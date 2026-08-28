import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
export async function POST() {
  
}

export async function PUT() {
  
}

export async function DELETE() {
  
}