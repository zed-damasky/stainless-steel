import { prisma } from "./prisma";

import {
  categoriesMetal,
  categoriesProducts,
  badge,
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

  await prisma.badge.createMany({
    data: badge,
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
/*
  for (const cart of cartsMock) {
    await prisma.cart.create({
      data: cart,
    });
  }

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
  });*/
}

/*
async function clear() {
  
  await prisma.cartItem.deleteMany({});
  await prisma.cart.deleteMany({});
  await prisma.product.deleteMany({});
  //////////////////
  await prisma.user.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.material.deleteMany({});
  await prisma.badge.deleteMany({});
  
  
}
*/

async function clear() {
  const tables = await prisma.$queryRaw<{ tablename: string }[]>`
    SELECT tablename 
    FROM pg_tables 
    WHERE schemaname = 'public' AND tablename != '_prisma_migrations'
  `;

  const tableList = tables.map((t) => `"${t.tablename}"`).join(", ");

  if (tableList) {
    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE ${tableList} RESTART IDENTITY CASCADE;`,
    );
    console.log(`cleared tables: ${tables.length}`);
  }
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
