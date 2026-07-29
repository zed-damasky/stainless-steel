import { prisma } from "./prisma";

import {
  categoriesMetal,
  categoriesProducts,
  specialBadge,
  productStainlessSteelCircleMock,
  productStainlessSteelQuadMock,
  productAlloySteelQuadMock,
  productAlloySteelCircleMock,
  cartsMock,
} from "./constants";
import { hashSync } from "bcrypt";

async function put() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "3User1 3Useruser1 3Useruseruser1",
        email: "1user@1user.1user",
        password: hashSync("111111", 10),
        verified: true,
        role: "USER",
      },
      {
        fullName: "2Admin1 2Adminadmin1 2Adminadminadmin1",
        email: "1admin@1admin.1admin",
        password: hashSync("111111", 10),
        verified: true,
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categoriesProducts,
  });

  await prisma.material.createMany({
    data: categoriesMetal,
  });

  await prisma.specialBadge.createMany({
    data: specialBadge,
  });

  for (const productStainlessSteelCircle of productStainlessSteelCircleMock) {
    await prisma.product.create({
      data: productStainlessSteelCircle,
    });
  }

  for (const productStainlessSteelQuad of productStainlessSteelQuadMock) {
    await prisma.product.create({
      data: productStainlessSteelQuad,
    });
  }

  for (const productAlloySteelQuad of productAlloySteelQuadMock) {
    await prisma.product.create({
      data: productAlloySteelQuad,
    });
  }

  for (const productAlloySteelCircle of productAlloySteelCircleMock) {
    await prisma.product.create({
      data: productAlloySteelCircle,
    });
  }

  for (const cart of cartsMock) {
    await prisma.cart.create({
      data: cart,
    });
  }
  /*
const getProductIdByName = async (productName: string): Promise<string> => {
  const product = await prisma.product.findFirstOrThrow({
    where: { name: productName },
    select: { id: true },
  });
  return product.id;
};

const getCartIdByToken = async (cartToken: string): Promise<string> => {
  const cart = await prisma.cart.findFirstOrThrow({
    where: { token: cartToken },
    select: { id: true },
  });
  return cart.id;
};

export const addProductToCart = async (productName: string, cartToken: string, quantity: number = 1) => {
  try {
    const productId = await getProductIdByName(productName);
    const cartId = await getCartIdByToken(cartToken);

    const cartItem = await prisma.cartItem.create({
      data: {
        productId,
        cartId,
        quantity,
      },
    });

    return cartItem;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
*/

  const product = await prisma.product.findFirstOrThrow({
    where: { name: "Круг 12 мм, сталь 40Х" },
    select: { id: true },
  });

  const cart = await prisma.cart.findFirstOrThrow({
    where: { token: "123" },
    select: { id: true },
  });

  await prisma.cartItem.create({
    data: {
      productId: product.id,
      cartId: cart.id,
      quantity: 5,
    },
  });
}

async function clear() {
  await prisma.product.deleteMany({});
  await prisma.cartItem.deleteMany({});
  await prisma.cart.deleteMany({});
  //////////////////
  await prisma.user.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.material.deleteMany({});
  await prisma.specialBadge.deleteMany({});
}

async function main() {
  try {
    await clear();
    await put();
  } catch (err) {
    console.log(err);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.log(err);
    await prisma.$disconnect();
    process.exit(1);
  });
