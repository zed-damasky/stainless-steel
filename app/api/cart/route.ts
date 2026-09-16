import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("cartToken")?.value;

  if (!token) {
    return NextResponse.json({ items: [] });
  }

  const cart = await prisma.cart.findFirst({
    where: { token },
    include: {
      cartItems: {
        orderBy: { createdAt: "asc" },
        include: { product: true },
      },
    },
  });

  if (!cart) {
    return NextResponse.json({ items: [] });
  }

  const items = cart.cartItems.map((ci) => ({
    ...ci.product,
    id: ci.id,
    cartId: ci.cartId,
    productId: ci.productId,
  }));

  return NextResponse.json({ items });
}

export async function POST(req: NextRequest) {
  let token = req.cookies.get("cartToken")?.value;
  let isNewToken = false;

  if (!token) {
    token = crypto.randomUUID();
    isNewToken = true;
  }

  const { productId } = await req.json();

  let cart = await prisma.cart.findFirst({ where: { token } });
  if (!cart) {
    cart = await prisma.cart.create({ data: { token } });
  }

  let cartItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
    include: { product: true },
  });

  if (!cartItem) {
    cartItem = await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
      },
      include: { product: true },
    });
  }

  const responseItem = {
    ...cartItem.product,
    id: cartItem.id,
    cartId: cartItem.cartId,
    productId: cartItem.productId,
  };

  const response = NextResponse.json({
    success: true,
    item: responseItem,
  });

  if (isNewToken) {
    response.cookies.set("cartToken", token, {
      path: "/",
      maxAge: 60 * 60 * 24,
      httpOnly: true,
    });
  }

  return response;
}

export async function DELETE(req: NextRequest) {
  const token = req.cookies.get("cartToken")?.value;
  if (!token) {
    return NextResponse.json({ error: "No token" }, { status: 401 });
  }

  const { cartItemId } = await req.json();

  const cart = await prisma.cart.findFirst({ where: { token } });
  if (cart) {
    await prisma.cartItem.delete({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
    });
  }

  return NextResponse.json({ success: true });
}
