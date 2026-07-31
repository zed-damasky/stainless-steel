import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const badges = await prisma.badge.findMany();
  return NextResponse.json(badges);
}

export async function POST() {}

export async function PUT() {}

export async function DELETE() {}