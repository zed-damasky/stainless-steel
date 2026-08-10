import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
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
      min: stats._min.price ?? 0,
      max: stats._max.price ?? 0,
    },
    quantity: {
      min: stats._min.quantity ?? 0,
      max: stats._max.quantity ?? 0,
    },
  });
}

export async function POST() {}

export async function PUT() {}

export async function DELETE() {}
