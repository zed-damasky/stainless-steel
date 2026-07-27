import { prisma } from "./prisma";
import { hashSync } from "bcrypt";
import { categoriesMetal, categoriesProducts, specialBadge } from "./constants";

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
    /*data: [
      { name: "Круг" },
      { name: "Квадрат" },
      { name: "Шестигранник" },
      { name: "Полоса" },
      { name: "Уголок" },
      { name: "Швеллер" },
      { name: "Труба" },
      { name: "Лист" },
      { name: "Метизы" },
      { name: "Прочее" },
    ],*/
  });

  await prisma.material.createMany({
    data: categoriesMetal,
    /*data: [
      { name: "Нержавеющая сталь" },
      { name: "Марочная сталь" },
      { name: "Алюминий" },
      { name: "Дюраль" },
      { name: "Медь" },
      { name: "Бронза" },
      { name: "Латунь" },
      { name: "Цинк" },
      { name: "Нихром" },
      { name: "Прочее" },
    ],*/
  });

  await prisma.specialBadge.createMany({
    data: specialBadge,
    /*data: [
      { name: "Быстрая отгрузка" },
      { name: "Новое" },
      { name: "Популярное" },
      { name: "Мало на складе" },
    ],*/
  });
}

async function clear() {
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
