import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const materials = await prisma.material.findMany();
  return NextResponse.json(materials);
}

export async function POST() {}

export async function PUT() {}

export async function DELETE() {}