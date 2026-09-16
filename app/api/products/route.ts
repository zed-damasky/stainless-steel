import { filterProducts } from "@/lib/filterProducts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const toArray = (value: string | null): string[] => {
    if (!value) return [];
    return value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };

  try {
    const products = await filterProducts({
      categories: toArray(searchParams.get("categories")),
      materials: toArray(searchParams.get("materials")),
      badges: toArray(searchParams.get("badges")),
      priceFrom: searchParams.has("priceFrom")
        ? Number(searchParams.get("priceFrom"))
        : undefined,
      priceTo: searchParams.has("priceTo")
        ? Number(searchParams.get("priceTo"))
        : undefined,
      quantityFrom: searchParams.has("quantityFrom")
        ? Number(searchParams.get("quantityFrom"))
        : undefined,
      quantityTo: searchParams.has("quantityTo")
        ? Number(searchParams.get("quantityTo"))
        : undefined,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("[PRODUCTS_SEARCH] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

export async function POST() {}

export async function PUT() {}

export async function DELETE() {}
