import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
    include: {
      products: true, // ← Должно ТОЧНО совпадать с типом
    },
  });

  return NextResponse.json(categories);
}

export async function POST() {}

export async function PUT() {}

export async function DELETE() {}
