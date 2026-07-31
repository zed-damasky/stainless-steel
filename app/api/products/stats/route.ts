import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stats = await prisma.product.aggregate({
      _min: {
        price: true,
        quantity: true,
      },
      _max: {
        price: true,
        quantity: true,
      },
    });

    return NextResponse.json({
      price: {
        min: stats._min.price ?? "",
        max: stats._max.price ?? "",
      },
      quantity: {
        min: stats._min.quantity ?? "",
        max: stats._max.quantity ?? "",
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 },
    );
  }
}

export async function POST() {}

export async function PUT() {}

export async function DELETE() {}
