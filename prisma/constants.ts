import { hashSync } from "bcrypt";

export const usersMock = [
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
];

export const cartsMock = [
  {
    user: {
      connect: { email: "1user@1user.1user" },
    },
    token: "123",
  },
  {
    token: "456",
  },
];
/*
export const cartItemsMock = [
  {
    productId {
      connect: {name: "Круг 12 мм, сталь 40Х"},
    },
    cartId {
      connect { token: "123"}
    }
  }
];
*/

export const categoriesProducts = [
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
];

export const categoriesMetal = [
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
];

export const badge = [
  { name: "Быстрая отгрузка" },
  { name: "Новое" },
  { name: "Популярное" },
  { name: "Мало на складе" },
];

export const productStainlessSteelCircleMock = [
  {
    name: "Круг нержавеющий 10 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/cSnvvPTp/1-1.jpg",
      "https://i.ibb.co/nMbdJc8G/1-2.jpg",
      "https://i.ibb.co/571Hd7S/1-1.jpg",
    ],
    price: 450.0,
    quantity: 150,
    mass: 0.62,
    description:
      "Круглый прокат из нержавеющей стали AISI 304 диаметром 10 мм. Применяется в пищевой промышленности, машиностроении и строительстве. Устойчив к коррозии и механическим воздействиям.",
    ordersCount: 342,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: { connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }] },
  },
  {
    name: "Круг нержавеющий 12 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/QvscnLWF/2-1.jpg",
      "https://i.ibb.co/9mnhVxWy/2-2.jpg",
      "https://i.ibb.co/TqWBvDZW/2-3.jpg",
    ],
    price: 580.0,
    quantity: 85,
    mass: 0.89,
    description:
      "Круг из нержавеющей стали AISI 316 диаметром 12 мм. Повышенная коррозионная стойкость благодаря содержанию молибдена. Идеален для морской среды и химической промышленности.",
    ordersCount: 215,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: { connect: [{ name: "Популярное" }] },
  },
  {
    name: "Круг нержавеющий 16 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/mrXrbZ1h/3-1.jpg",
      "https://i.ibb.co/pvB7QvbD/3-2.jpg",
      "https://i.ibb.co/N6QtkWX8/3-3.jpg",
    ],
    price: 720.0,
    quantity: 120,
    mass: 1.58,
    description:
      "Круглый пруток из нержавейки AISI 304 диаметром 16 мм. Используется для изготовления валов, осей, крепежных элементов. Отличная свариваемость и пластичность.",
    ordersCount: 48,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: { connect: [{ name: "Быстрая отгрузка" }] },
  },
  {
    name: "Круг нержавеющий 20 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/4ZP1KKJ7/4-1.jpg",
      "https://i.ibb.co/6RdhRHWg/4-2.jpg",
      "https://i.ibb.co/YT1vDWBF/4-3.jpg",
    ],
    price: 890.0,
    quantity: 95,
    mass: 2.47,
    description:
      "Круг из нержавеющей стали диаметром 20 мм марки AISI 304. Применяется в архитектурных конструкциях, мебельном производстве и декоративных элементах. Поверхность шлифованная.",
    ordersCount: 189,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: { connect: [{ name: "Новое" }, { name: "Популярное" }] },
  },
  {
    name: "Круг нержавеющий 25 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/FbjcC9y1/5-1.jpg",
      "https://i.ibb.co/KzshC4gm/5-2.jpg",
      "https://i.ibb.co/HRNsfkC/5-3.jpg",
    ],
    price: 1150.0,
    quantity: 60,
    mass: 3.85,
    description:
      "Круглый прокат из стали AISI 316 диаметром 25 мм. Высокая прочность и устойчивость к агрессивным средам. Используется в судостроении и химическом машиностроении.",
    ordersCount: 12,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: { connect: [{ name: "Мало на складе" }] },
  },
  {
    name: "Круг нержавеющий 30 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/JjnLMsXS/6-1.jpg",
      "https://i.ibb.co/KxZ9Tfy4/6-2.jpg",
      "https://i.ibb.co/LDM5X561/6-3.jpg",
    ],
    price: 1380.0,
    quantity: 75,
    mass: 5.55,
    description:
      "Круг из нержавеющей стали AISI 304 диаметром 30 мм. Предназначен для изготовления деталей машин, валов, втулок. Калиброванный, точные размеры.",
    ordersCount: 67,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: { connect: [{ name: "Быстрая отгрузка" }] },
  },
  {
    name: "Круг нержавеющий 35 мм AISI 310",
    imageUrl: [
      "https://i.ibb.co/9HhH1Wdb/7-1.jpg",
      "https://i.ibb.co/DHJVT66S/7-2.jpg",
      "https://i.ibb.co/kVjdnjtB/7-3.jpg",
    ],
    price: 1650.0,
    quantity: 40,
    mass: 7.55,
    description:
      "Жаропрочный круг из нержавеющей стали AISI 310 диаметром 35 мм. Рабочая температура до 1100°C. Применяется в печах, теплообменниках и высокотемпературных установках.",
    ordersCount: 8,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: { connect: [{ name: "Мало на складе" }, { name: "Новое" }] },
  },
  {
    name: "Круг нержавеющий 40 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/jk3qzBqd/8-1.jpg",
      "https://i.ibb.co/ZpLC7TBS/8-2.jpg",
      "https://i.ibb.co/Zpft81n8/8-3.jpg",
    ],
    price: 1920.0,
    quantity: 55,
    mass: 9.86,
    description:
      "Круглый пруток из нержавейки AISI 304 диаметром 40 мм. Используется в тяжелом машиностроении, для изготовления крупных деталей и конструкций. Поверхность матовая.",
    ordersCount: 156,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: { connect: [{ name: "Популярное" }] },
  },
  {
    name: "Круг нержавеющий 50 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/Vp3dvN7z/9-1.jpg",
      "https://i.ibb.co/d4Yjcr75/9-2.jpg",
    ],
    price: 2450.0,
    quantity: 30,
    mass: 15.41,
    description:
      "Круг из нержавеющей стали AISI 316 диаметром 50 мм. Максимальная коррозионная стойкость и прочность. Применяется в нефтегазовой отрасли, судостроении и химической промышленности.",
    ordersCount: 23,
    category: { connect: { name: "Круг" } },
    material: { connect: { name: "Нержавеющая сталь" } },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productStainlessSteelQuadMock = [
  {
    name: "Квадрат нержавеющий 10x10 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/7dh7ffkB/1-1.jpg",
      "https://i.ibb.co/3yp8qGS6/1-3.jpg",
      "https://i.ibb.co/wTHvTsf/1-2.jpg",
    ],
    price: 520.0,
    quantity: 200,
    mass: 0.79,
    description:
      "Квадратный прокат из нержавеющей стали AISI 304 сечением 10x10 мм. Применяется для изготовления каркасов, стеллажей, элементов декора и деталей в пищевой промышленности. Отличная коррозионная стойкость.",
    ordersCount: 287,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Квадрат нержавеющий 12x12 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/nNsQJ4YQ/2-1.jpg",
      "https://i.ibb.co/qFNg0zxZ/2-2.jpg",
      "https://i.ibb.co/WvQs7gWZ/2-3.jpg",
    ],
    price: 680.0,
    quantity: 110,
    mass: 1.14,
    description:
      "Квадрат из нержавеющей стали AISI 316 сечением 12x12 мм. Благодаря добавлению молибдена обладает повышенной устойчивостью к хлоридам и морской воде. Идеален для судостроения и химической отрасли.",
    ordersCount: 198,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Квадрат нержавеющий 16x16 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/yCF6r6R/3-1.jpg",
      "https://i.ibb.co/ynd3gFJW/3-2.jpg",
      "https://i.ibb.co/HD3kHmDn/3-3.jpg",
    ],
    price: 850.0,
    quantity: 140,
    mass: 2.02,
    description:
      "Квадратный пруток из стали AISI 304 размером 16x16 мм. Используется в машиностроении для изготовления валов, осей и крепежных элементов. Поверхность шлифованная, точные геометрические размеры.",
    ordersCount: 54,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Квадрат нержавеющий 20x20 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/bgmwmFLC/4-1.jpg",
      "https://i.ibb.co/PvCmpPbD/4-2.jpg",
      "https://i.ibb.co/BH7CTQB1/4-3.jpg",
    ],
    price: 1050.0,
    quantity: 90,
    mass: 3.16,
    description:
      "Квадрат из нержавеющей стали AISI 304 сечением 20x20 мм. Широко применяется в архитектурных конструкциях, мебельном производстве и при изготовлении ограждений. Эстетичный внешний вид.",
    ordersCount: 176,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Популярное" }],
    },
  },
  {
    name: "Квадрат нержавеющий 25x25 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/JWvwPYPX/5-1.jpg",
      "https://i.ibb.co/S7G48wTk/5-2.jpg",
      "https://i.ibb.co/8LVF5RtB/5-3.jpg",
    ],
    price: 1400.0,
    quantity: 65,
    mass: 4.93,
    description:
      "Квадратный прокат из стали AISI 316 размером 25x25 мм. Высокая прочность и устойчивость к агрессивным химическим средам. Используется в нефтегазовой отрасли и тяжелом машиностроении.",
    ordersCount: 15,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }],
    },
  },
  {
    name: "Квадрат нержавеющий 30x30 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/8LKJD5k6/6-1.jpg",
      "https://i.ibb.co/pvkx1c4T/6-2.jpg",
      "https://i.ibb.co/tpXMgdkV/6-3.jpg",
    ],
    price: 1650.0,
    quantity: 80,
    mass: 7.11,
    description:
      "Квадрат из нержавеющей стали AISI 304 сечением 30x30 мм. Предназначен для изготовления несущих конструкций, рам и опорных элементов. Калиброванный, с высокой точностью размеров.",
    ordersCount: 72,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Квадрат нержавеющий 35x35 мм AISI 321",
    imageUrl: [
      "https://i.ibb.co/pBgJW4LV/7-1.jpg",
      "https://i.ibb.co/8nkfmQgt/7-2.jpg",
      "https://i.ibb.co/3nqCP8F/7-3.jpg",
    ],
    price: 1900.0,
    quantity: 45,
    mass: 9.68,
    description:
      "Жаропрочный квадрат из нержавеющей стали AISI 321 размером 35x35 мм. Стабилизирован титаном, рабочая температура до 800°C. Применяется в печах, теплообменниках и выхлопных системах.",
    ordersCount: 9,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Новое" }],
    },
  },
  {
    name: "Квадрат нержавеющий 40x40 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/S7KvQwZ1/8-1.jpg",
      "https://i.ibb.co/kgdqcGpP/8-2.jpg",
      "https://i.ibb.co/s9QH4x50/8-3.jpg",
    ],
    price: 2200.0,
    quantity: 50,
    mass: 12.64,
    description:
      "Квадратный пруток из нержавейки AISI 304 сечением 40x40 мм. Используется в тяжелом машиностроении для изготовления крупных деталей, штампов и пресс-форм. Поверхность матовая.",
    ordersCount: 143,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Квадрат нержавеющий 50x50 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/chGD8CGD/9-1.jpg",
      "https://i.ibb.co/rKNzts7j/9-2.jpg",
      "https://i.ibb.co/WNsZ73qC/9-3.jpg",
    ],
    price: 2950.0,
    quantity: 35,
    mass: 19.75,
    description:
      "Квадрат из нержавеющей стали AISI 316 размером 50x50 мм. Максимальная коррозионная стойкость и механическая прочность. Применяется в судостроении, химической промышленности и энергетике.",
    ordersCount: 28,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productAlloySteelCircleMock = [
  {
    name: "Круг 12 мм, сталь 40Х",
    imageUrl: [
      "https://i.ibb.co/Q7yq73LM/11360486267.webp",
      "https://i.ibb.co/N8DtjGw/11360981292.webp",
      "https://i.ibb.co/2Y7KbY3r/11563449474.webp",
    ],
    price: 125.0,
    quantity: 500,
    mass: 0.89,
    description:
      "Круглый прокат из легированной конструкционной стали 40Х диаметром 12 мм. Обладает высокой прочностью и хорошей обрабатываемостью. Применяется для изготовления осей, валов, шестерен и других деталей машин.",
    ordersCount: 412,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Круг 16 мм, сталь 09Г2С",
    imageUrl: [
      "https://i.ibb.co/vxjmG7JK/11399771227.webp",
      "https://i.ibb.co/HpqXgxz1/11554837540.webp",
      "https://i.ibb.co/Fb2y2j8k/11605329880.webp",
    ],
    price: 95.0,
    quantity: 850,
    mass: 1.58,
    description:
      "Круг из низколегированной стали 09Г2С диаметром 16 мм. Отличается высокой свариваемостью и хладостойкостью (до -70°C). Широко используется в строительстве, мостостроении и производстве сварных конструкций.",
    ordersCount: 328,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Круг 20 мм, сталь 45",
    imageUrl: [
      "https://i.ibb.co/20g1CGqj/11609860785.webp",
      "https://i.ibb.co/HLRBcmx2/11358793031.webp",
      "https://i.ibb.co/7J206DCw/11403661371.webp",
    ],
    price: 110.0,
    quantity: 600,
    mass: 2.47,
    description:
      "Качественный конструкционный углеродистый круг сталь 45 диаметром 20 мм. После термической обработки приобретает высокую твердость и износостойкость. Идеален для деталей, работающих под нагрузкой (валы, шпиндели).",
    ordersCount: 63,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Круг 25 мм, сталь 30ХГСА",
    imageUrl: [
      "https://i.ibb.co/2Y7mxpTp/11399360038.webp",
      "https://i.ibb.co/dzcRbMG/11403377958.webp",
    ],
    price: 185.0,
    quantity: 250,
    mass: 3.85,
    description:
      "Круг из высокопрочной легированной стали 30ХГСА (хромансиль) диаметром 25 мм. Сочетает высокую прочность с хорошей ударной вязкостью. Применяется в авиастроении и для изготовления высоконагруженных деталей.",
    ordersCount: 11,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Новое" }],
    },
  },
  {
    name: "Круг 30 мм, сталь 65Г",
    imageUrl: [
      "https://i.ibb.co/1f8NL29V/11403548675.webp",
      "https://i.ibb.co/4wnVTkyB/10163671607.webp",
    ],
    price: 135.0,
    quantity: 320,
    mass: 5.55,
    description:
      "Круглый прокат из рессорно-пружинной стали 65Г диаметром 30 мм. Обладает высоким пределом упругости и выносливости. Основное применение: изготовление пружин, рессор, шайб и тормозных лент.",
    ordersCount: 187,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Круг 40 мм, сталь 20",
    imageUrl: [
      "https://i.ibb.co/h1g0xdNN/7313564957.webp",
      "https://i.ibb.co/v6Mq56dx/11398827474.webp",
    ],
    price: 88.0,
    quantity: 1200,
    mass: 9.86,
    description:
      "Круг из конструкционной углеродистой стали 20 диаметром 40 мм. Хорошо сваривается без ограничений, поддается цементации и цианированию для повышения твердости поверхности. Используется для малонагруженных деталей.",
    ordersCount: 74,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Круг 50 мм, сталь 40ХН",
    imageUrl: [
      "https://i.ibb.co/xSq3Z2Vm/11399623067.webp",
      "https://i.ibb.co/G4KXpgkc/11562883688.webp",
    ],
    price: 215.0,
    quantity: 180,
    mass: 15.41,
    description:
      "Круг из легированной стали 40ХН диаметром 50 мм. Отличается высокой прокаливаемостью и прочностью. Применяется для изготовления крупных ответственных деталей: коленчатых валов, шатунов, тяжелых шестерен.",
    ordersCount: 19,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }],
    },
  },
  {
    name: "Круг 60 мм, сталь 35ХМ",
    imageUrl: [
      "https://i.ibb.co/Z12fQvnb/11607621343.webp",
      "https://i.ibb.co/PZkx03km/7355121404.webp",
    ],
    price: 260.0,
    quantity: 90,
    mass: 22.19,
    description:
      "Круглый прокат из легированной стали 35ХМ диаметром 60 мм. Работает при высоких температурах и нагрузках. Используется в энергетическом машиностроении, для изготовления валов турбин и крепежа повышенной прочности.",
    ordersCount: 7,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Круг 80 мм, сталь ШХ15",
    imageUrl: [
      "https://i.ibb.co/h1KfHfwx/8238107500.webp",
      "https://i.ibb.co/dwdw4h9T/11604229860.webp",
    ],
    price: 195.0,
    quantity: 150,
    mass: 39.46,
    description:
      "Круг из подшипниковой стали ШХ15 диаметром 80 мм. Обладает высокой твердостью, износостойкостью и контактной выносливостью. Предназначен для изготовления колец и тел качения подшипников, а также измерительного инструмента.",
    ordersCount: 256,
    category: {
      connect: { name: "Круг" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productAlloySteelQuadMock = [
  {
    name: "Квадрат 10x10 мм, сталь Ст3сп",
    imageUrl: [
      "https://i.ibb.co/xqfShj4W/9143137119.webp",
      "https://i.ibb.co/Lh6Pvqvs/9143136691.webp",
    ],
    price: 95.0,
    quantity: 500,
    mass: 0.79,
    description:
      "Квадратный прокат из конструкционной углеродистой стали обыкновенного качества Ст3сп. Отличается хорошей свариваемостью и пластичностью. Широко применяется для изготовления строительных конструкций, решеток, ограждений и закладных деталей.",
    ordersCount: 385,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Квадрат 12x12 мм, сталь 45",
    imageUrl: [
      "https://i.ibb.co/60WvkfPn/11810928730.webp",
      "https://i.ibb.co/7dCxkg3M/6425175983.webp",
    ],
    price: 135.0,
    quantity: 450,
    mass: 1.13,
    description:
      "Квадрат из качественной конструкционной углеродистой стали 45. После термической обработки (закалки и отпуска) приобретает высокую прочность и твердость. Идеален для изготовления осей, шпинделей, валов и шестерен.",
    ordersCount: 241,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Квадрат 14x14 мм, сталь 09Г2С",
    imageUrl: [
      "https://i.ibb.co/dzgkchY/8539924082.webp",
      "https://i.ibb.co/HDh1DrwG/7144217010.webp",
    ],
    price: 165.0,
    quantity: 600,
    mass: 1.54,
    description:
      "Квадратный прокат из низколегированной стали 09Г2С. Обладает высокой свариваемостью без подогрева и хладостойкостью до -70°C. Основное применение: несущие элементы сварных конструкций в строительстве и мостостроении.",
    ordersCount: 58,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Квадрат 16x16 мм, сталь 40Х",
    imageUrl: [
      "https://i.ibb.co/0jpw5nF6/7922363963.webp",
      "https://i.ibb.co/nqkqCyk8/9182255400.webp",
    ],
    price: 210.0,
    quantity: 300,
    mass: 2.01,
    description:
      "Квадрат из легированной конструкционной стали 40Х. Характеризуется высокой прочностью и хорошей обрабатываемостью резанием. Применяется для изготовления улучшаемых деталей: валов, втулок, зубчатых колес и крепежа.",
    ordersCount: 164,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Популярное" }],
    },
  },
  {
    name: "Квадрат 20x20 мм, сталь 20",
    imageUrl: [
      "https://i.ibb.co/VcL2X89c/9054396653.webp",
      "https://i.ibb.co/0VQxy9DS/9791523230.webp",
    ],
    price: 320.0,
    quantity: 800,
    mass: 3.14,
    description:
      "Квадратный прокат из качественной конструкционной углеродистой стали 20. Хорошо поддается цементации и цианированию для повышения твердости поверхностного слоя. Используется для малонагруженных деталей, рычагов, копира.",
    ordersCount: 71,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Квадрат 25x25 мм, сталь 65Г",
    imageUrl: [
      "https://i.ibb.co/XfnC3xZh/11198696310.webp",
      "https://i.ibb.co/xqfShj4W/9143137119.webp",
    ],
    price: 510.0,
    quantity: 250,
    mass: 4.91,
    description:
      "Квадрат из рессорно-пружинной стали 65Г. Отличается высоким пределом упругости, выносливостью и износостойкостью. Основное назначение: изготовление пружин, рессор, стопорных шайб и тормозных лент.",
    ordersCount: 18,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }],
    },
  },
  {
    name: "Квадрат 30x30 мм, сталь 30ХГСА",
    imageUrl: [
      "https://i.ibb.co/Lh6Pvqvs/9143136691.webp",
      "https://i.ibb.co/60WvkfPn/11810928730.webp",
    ],
    price: 740.0,
    quantity: 150,
    mass: 7.07,
    description:
      "Квадратный прокат из высокопрочной легированной стали 30ХГСА (хромансиль). Сочетает в себе высокую прочность с хорошей ударной вязкостью. Критически важен в авиастроении и для высоконагруженных деталей машин.",
    ordersCount: 6,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Новое" }],
    },
  },
  {
    name: "Квадрат 35x35 мм, сталь 40ХН",
    imageUrl: [
      "https://i.ibb.co/7dCxkg3M/6425175983.webp",
      "https://i.ibb.co/dzgkchY/8539924082.webp",
    ],
    price: 1020.0,
    quantity: 100,
    mass: 9.62,
    description:
      "Квадрат из легированной конструкционной стали 40ХН. Обладает высокой прокаливаемостью и прочностью. Применяется для изготовления крупных ответственных деталей: коленчатых валов, шатунов и тяжелых шестерен.",
    ordersCount: 132,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Квадрат 40x40 мм, сталь ШХ15",
    imageUrl: [
      "https://i.ibb.co/HDh1DrwG/7144217010.webp",
      "https://i.ibb.co/XfnC3xZh/11198696310.webp",
    ],
    price: 1350.0,
    quantity: 120,
    mass: 12.56,
    description:
      "Квадратный прокат из шарикоподшипниковой стали ШХ15. Гарантирует высокую твердость, износостойкость и контактную выносливость. Предназначен для изготовления тел качения подшипников, калибров и измерительного инструмента.",
    ordersCount: 24,
    category: {
      connect: { name: "Квадрат" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productStainlessSteelHexMock = [
  {
    name: "Шестигранник нержавеющий 10 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/5gxTFsXn/1-1.jpg",
      "https://i.ibb.co/9mwwDq7k/1-2.jpg",
      "https://i.ibb.co/s9jd6S7N/1-3.jpg",
    ],
    price: 550.0,
    quantity: 300,
    mass: 0.68,
    description:
      "Шестигранный прокат из нержавеющей стали AISI 304 размером под ключ 10 мм. Идеально подходит для изготовления болтов, гаек, клапанов и деталей крепежа. Отличная обрабатываемость на станках ЧПУ и высокая коррозионная стойкость.",
    ordersCount: 415,
    category: {
      connect: { name: "Шестигранник" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Шестигранник нержавеющий 12 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/mxj68Dr/2-1.jpg",
      "https://i.ibb.co/WZPHnCv/2-2.jpg",
      "https://i.ibb.co/nsV7vZ8M/2-3.jpg",
    ],
    price: 720.0,
    quantity: 150,
    mass: 0.98,
    description:
      "Шестигранник из кислотостойкой нержавеющей стали AISI 316 (12 мм). Благодаря содержанию молибдена обладает повышенной устойчивостью к хлоридам и морской воде. Применяется в судостроении, химическом машиностроении и производстве фитингов.",
    ordersCount: 230,
    category: {
      connect: { name: "Шестигранник" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Шестигранник нержавеющий 14 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/GvSyZPBX/3-1.jpg",
      "https://i.ibb.co/60wfSSyr/3-2.jpg",
      "https://i.ibb.co/qLm9pSPX/3-3.jpg",
    ],
    price: 890.0,
    quantity: 200,
    mass: 1.33,
    description:
      "Калиброванный шестигранный пруток из стали AISI 304 размером 14 мм. Используется в приборостроении и для производства запорной арматуры. Высокая точность геометрических размеров и качественная шлифованная поверхность.",
    ordersCount: 112,
    category: {
      connect: { name: "Шестигранник" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Шестигранник нержавеющий 17 мм AISI 321",
    imageUrl: [
      "https://i.ibb.co/N6nSyFV7/4-1.jpg",
      "https://i.ibb.co/8LtKbcV7/4-2.jpg",
      "https://i.ibb.co/8DwDvXVy/4-3.jpg",
    ],
    price: 1150.0,
    quantity: 80,
    mass: 1.95,
    description:
      "Жаропрочный шестигранник из нержавеющей стали AISI 321 (17 мм). Стабилизирован титаном, что обеспечивает сохранение механических свойств при температурах до 800°C. Идеален для деталей выхлопных систем, теплообменников и печного оборудования.",
    ordersCount: 45,
    category: {
      connect: { name: "Шестигранник" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Шестигранник нержавеющий 22 мм AISI 316L",
    imageUrl: [
      "https://i.ibb.co/v4s2zFxN/5-1.jpg",
      "https://i.ibb.co/gZ2gzV55/5-2.jpg",
      "https://i.ibb.co/JjrHbhSS/5-3.jpg",
    ],
    price: 1680.0,
    quantity: 60,
    mass: 3.35,
    description:
      "Шестигранный прокат из стали AISI 316L (с пониженным содержанием углерода) размером 22 мм. Низкое содержание углерода предотвращает межкристаллитную коррозию после сварки. Широко применяется в пищевой, фармацевтической промышленности и производстве емкостного оборудования.",
    ordersCount: 88,
    category: {
      connect: { name: "Шестигранник" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productStainlessSteelStripMock = [
  {
    name: "Полоса нержавеющая 20x4 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/ym65wngP/1-1.jpg",
      "https://i.ibb.co/hxpP2LjV/1-2.jpg",
      "https://i.ibb.co/7NYGP6WN/1-3.jpg",
    ],
    price: 350.0,
    quantity: 450,
    mass: 0.63,
    description:
      "Полоса (шина) нержавеющая 20x4 мм из стали AISI 304. Универсальный профиль для изготовления крепежа, закладных деталей и декоративных элементов. Отличная свариваемость и высокая устойчивость к атмосферной коррозии.",
    ordersCount: 520,
    category: {
      connect: { name: "Полоса" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Полоса нержавеющая 25x5 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/Mk7kK78H/2-1.jpg",
      "https://i.ibb.co/W4493Qcr/2-2.jpg",
      "https://i.ibb.co/dJHyLH90/2-3.jpg",
    ],
    price: 650.0,
    quantity: 180,
    mass: 0.99,
    description:
      "Полоса из кислотостойкой нержавеющей стали AISI 316 сечением 25x5 мм. Благодаря добавлению молибдена обладает исключительной стойкостью к агрессивным химическим средам и морской воде. Применяется в химическом машиностроении и судостроении.",
    ordersCount: 280,
    category: {
      connect: { name: "Полоса" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Полоса нержавеющая 30x3 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/W4J1yHX2/3-1.jpg",
      "https://i.ibb.co/zH7J38Cq/3-2.jpg",
      "https://i.ibb.co/7xgYrkrZ/3-3.jpg",
    ],
    price: 420.0,
    quantity: 320,
    mass: 0.71,
    description:
      "Тонкий профиль из стали AISI 304 размером 30x3 мм с гладкой шлифованной поверхностью. Идеально подходит для отделочных работ, изготовления ограждений, поручней, а также элементов дизайна интерьера и мебели.",
    ordersCount: 145,
    category: {
      connect: { name: "Полоса" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Полоса нержавеющая 40x5 мм AISI 321",
    imageUrl: [
      "https://i.ibb.co/2mWnN6L/4-1.jpg",
      "https://i.ibb.co/G3GBQLKC/4-2.jpg",
      "https://i.ibb.co/0Vn0ybMS/4-3.jpg",
    ],
    price: 950.0,
    quantity: 90,
    mass: 1.58,
    description:
      "Жаропрочная полоса из нержавеющей стали AISI 321 сечением 40x5 мм. Стабилизирована титаном, что обеспечивает сохранение механических свойств при температурах до 800°C. Используется для деталей печей, теплообменников и выхлопных систем.",
    ordersCount: 35,
    category: {
      connect: { name: "Полоса" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Полоса нержавеющая 50x6 мм AISI 316L",
    imageUrl: [
      "https://i.ibb.co/7dz3shxW/5-1.jpg",
      "https://i.ibb.co/SXFGCqw6/5-2.jpg",
      "https://i.ibb.co/GQ0bpvRp/5-3.jpg",
    ],
    price: 1450.0,
    quantity: 55,
    mass: 2.37,
    description:
      "Полоса из стали AISI 316L (с пониженным содержанием углерода) размером 50x6 мм. Низкое содержание углерода предотвращает межкристаллитную коррозию в околошовной зоне после сварки. Является стандартом для пищевой и фармацевтической промышленности.",
    ordersCount: 78,
    category: {
      connect: { name: "Полоса" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productAlloySteelAngleMock = [
  {
    name: "Уголок 25x25x3 мм, сталь Ст3сп",
    imageUrl: [
      "https://i.ibb.co/fdJK47yV/9078413332.webp",
      "https://i.ibb.co/3m4VKqSr/8493566564.webp",
      "https://i.ibb.co/8L2FRyRk/10222235309.webp",
    ],
    price: 85.0,
    quantity: 1500,
    mass: 1.12,
    description:
      "Равнополочный уголок из конструкционной углеродистой стали обыкновенного качества Ст3сп. Отличается отличной свариваемостью и пластичностью. Широко применяется в строительстве для изготовления каркасов, ферм, ограждений и закладных деталей.",
    ordersCount: 850,
    category: {
      connect: { name: "Уголок" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Уголок 32x32x4 мм, сталь 09Г2С",
    imageUrl: [
      "https://i.ibb.co/1YFTh5vp/7441388017.webp",
      "https://i.ibb.co/DDmkx6Rj/8328046581.webp",
      "https://i.ibb.co/wrWwPk2y/12427223531.webp",
    ],
    price: 145.0,
    quantity: 800,
    mass: 1.91,
    description:
      "Уголок из низколегированной стали 09Г2С. Обладает высокой хладостойкостью (до -70°C) и отличной свариваемостью без предварительного подогрева. Идеален для несущих элементов строительных конструкций, мостостроения и работы в условиях Севера.",
    ordersCount: 420,
    category: {
      connect: { name: "Уголок" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Уголок 40x40x4 мм, сталь Ст3сп",
    imageUrl: [
      "https://i.ibb.co/TBVDzsTV/13007271621.webp",
      "https://i.ibb.co/4gdG96XH/13007177246.webp",
      "https://i.ibb.co/5hvprG6G/11685043729.webp",
    ],
    price: 115.0,
    quantity: 2000,
    mass: 2.42,
    description:
      "Самый востребованный размер равнополочного уголка из стали Ст3сп. Используется повсеместно: от усиления строительных конструкций и изготовления ворот до создания стеллажей и каркасов в машиностроении. Соответствует ГОСТ 8509-93.",
    ordersCount: 1200,
    category: {
      connect: { name: "Уголок" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Уголок 50x50x5 мм, сталь 45",
    imageUrl: [
      "https://i.ibb.co/DDttDyv6/7209959387.webp",
      "https://i.ibb.co/qFPvpVvs/10091475549.webp",
      "https://i.ibb.co/vxVzLRVP/11059665812.webp",
    ],
    price: 210.0,
    quantity: 350,
    mass: 3.77,
    description:
      "Уголок из качественной конструкционной углеродистой стали 45. После термической обработки (закалки и отпуска) приобретает высокую прочность и твердость. Применяется для изготовления усиленных рам, осей, кронштейнов и деталей, работающих под высокой нагрузкой.",
    ordersCount: 180,
    category: {
      connect: { name: "Уголок" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Уголок 63x63x6 мм, сталь 09Г2С",
    imageUrl: [
      "https://i.ibb.co/7tpz2rTV/8473728611.webp",
      "https://i.ibb.co/HTg1nS1k/8493566415.webp",
      "https://i.ibb.co/TxR9FK0B/11086373228.webp",
    ],
    price: 265.0,
    quantity: 450,
    mass: 5.72,
    description:
      "Крупногабаритный уголок из низколегированной стали 09Г2С. Предназначен для создания тяжелых несущих конструкций, опор ЛЭП, каркасов промышленных зданий и мостовых сооружений. Гарантирует высокую надежность и долговечность.",
    ordersCount: 310,
    category: {
      connect: { name: "Уголок" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productAlloySteelChannelMock = [
  {
    name: "Швеллер 5П, сталь Ст3сп",
    imageUrl: [
      "https://i.ibb.co/QjjJVSMX/11953831432.webp",
      "https://i.ibb.co/cKWmNb0L/8306154906.webp",
      "https://i.ibb.co/MyHBGRzj/8306049214.webp",
    ],
    price: 280.0,
    quantity: 600,
    mass: 4.84,
    description:
      "Горячекатаный швеллер №5 с параллельными гранями полок (П) из стали Ст3сп. Используется для изготовления небольших каркасов, стеллажей, опор и рам в машиностроении и строительстве. Отличная свариваемость.",
    ordersCount: 520,
    category: {
      connect: { name: "Швеллер" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Швеллер 6.5П, сталь Ст3сп",
    imageUrl: [
      "https://i.ibb.co/SXCx7c93/11953866614.webp",
      "https://i.ibb.co/LhNqJY7h/11685644743.webp",
      "https://i.ibb.co/mVxV7xtY/8306399788.webp",
    ],
    price: 320.0,
    quantity: 500,
    mass: 5.9,
    description:
      "Швеллер №6.5П из конструкционной стали Ст3сп. Универсальный профиль для создания силовых конструкций, направляющих и армирования железобетона. Соответствует ГОСТ 8240-97.",
    ordersCount: 380,
    category: {
      connect: { name: "Швеллер" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Швеллер 8П, сталь 09Г2С",
    imageUrl: [
      "https://i.ibb.co/JFWh9tmR/7944775645.webp",
      "https://i.ibb.co/R42MyGfd/11684595655.webp",
      "https://i.ibb.co/TDcw7vwn/8306165501.webp",
    ],
    price: 485.0,
    quantity: 300,
    mass: 7.05,
    description:
      "Швеллер №8П из низколегированной стали 09Г2С. Обладает повышенной прочностью и хладостойкостью до -70°C. Применяется в мостостроении, для создания несущих каркасов промышленных зданий и в условиях Крайнего Севера.",
    ordersCount: 210,
    category: {
      connect: { name: "Швеллер" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Швеллер 10П, сталь Ст3сп",
    imageUrl: [
      "https://i.ibb.co/DPc3hxJ6/8306092823.webp",
      "https://i.ibb.co/KpMnjgZv/11954372859.webp",
      "https://i.ibb.co/jxsDv6d/11059661078.webp",
    ],
    price: 540.0,
    quantity: 400,
    mass: 8.59,
    description:
      "Швеллер №10П из стали Ст3сп — один из самых ходовых размеров в строительстве. Используется для колонн, кровельных прогонов, перекрытий и в вагоностроении. Высокая жесткость на изгиб при относительно небольшом весе.",
    ordersCount: 680,
    category: {
      connect: { name: "Швеллер" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }, { name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Швеллер 12П, сталь 09Г2С",
    imageUrl: [
      "https://i.ibb.co/35njmbST/9372743710.webp",
      "https://i.ibb.co/qM8dQbnG/8306180477.webp",
      "https://i.ibb.co/fzb9hcm4/11954627201.webp",
    ],
    price: 720.0,
    quantity: 150,
    mass: 10.4,
    description:
      "Крупный швеллер №12П из конструкционной низколегированной стали 09Г2С. Предназначен для восприятия значительных нагрузок: балок перекрытий, крановых путей, опор ЛЭП и каркасов тяжелых промышленных сооружений.",
    ordersCount: 95,
    category: {
      connect: { name: "Швеллер" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
];

export const productAlloySteelPipeMock = [
  {
    name: "Труба 32x3 мм, сталь Ст20",
    imageUrl: [
      "https://i.ibb.co/MDXDCMq1/9460834248.webp",
      "https://i.ibb.co/KcBLDTps/10857549209.webp",
      "https://i.ibb.co/8gt82SxZ/10438078185.webp",
    ],
    price: 185.0,
    quantity: 800,
    mass: 2.15,
    description:
      "Бесшовная горячедеформированная труба из конструкционной углеродистой стали 20 диаметром 32 мм с толщиной стенки 3 мм. Применяется в машиностроении, для изготовления трубопроводов, работающих под давлением, и деталей механизмов. Соответствует ГОСТ 8732-78.",
    ordersCount: 420,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Труба 42x3.5 мм, сталь 09Г2С",
    imageUrl: [
      "https://i.ibb.co/kpPjztw/9112787958.webp",
      "https://i.ibb.co/5x6dQnbg/12150827155.webp",
      "https://i.ibb.co/7hCHYZN/12682678425.webp",
    ],
    price: 245.0,
    quantity: 500,
    mass: 3.33,
    description:
      "Труба из низколегированной стали 09Г2С диаметром 42 мм. Обладает повышенной прочностью и хладостойкостью до -70°C. Идеальна для магистральных трубопроводов, работающих в условиях Крайнего Севера, и ответственных строительных конструкций.",
    ordersCount: 285,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Труба 57x4 мм, сталь Ст20",
    imageUrl: [
      "https://i.ibb.co/4wDVgNH1/6588353736.webp",
      "https://i.ibb.co/tM51HQWR/10857401216.webp",
      "https://i.ibb.co/hFSFvHwv/10005017863.webp",
    ],
    price: 320.0,
    quantity: 650,
    mass: 5.23,
    description:
      "Бесшовная труба диаметром 57 мм из стали 20. Широко применяется в нефтегазовой промышленности, для транспортировки жидкостей и газов под давлением. Отличная свариваемость и механическая прочность.",
    ordersCount: 510,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Труба 76x5 мм, сталь 40Х",
    imageUrl: [
      "https://i.ibb.co/356BsjFX/10632237695.webp",
      "https://i.ibb.co/NnxYH4JS/9460950726.webp",
      "https://i.ibb.co/zhnM8V1Z/11291333336.webp",
    ],
    price: 485.0,
    quantity: 200,
    mass: 8.75,
    description:
      "Труба из легированной конструкционной стали 40Х диаметром 76 мм. После термической обработки приобретает высокую прочность и износостойкость. Применяется для изготовления валов, втулок, деталей машин, работающих под высокой нагрузкой.",
    ordersCount: 125,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Труба 89x6 мм, сталь 09Г2С",
    imageUrl: [
      "https://i.ibb.co/4n6m6sd2/12596075911.webp",
      "https://i.ibb.co/6JVw5Qbc/6569953136.webp",
      "https://i.ibb.co/q3wsb45j/10405869187.webp",
    ],
    price: 620.0,
    quantity: 180,
    mass: 12.28,
    description:
      "Крупногабаритная труба из низколегированной стали 09Г2С диаметром 89 мм. Предназначена для магистральных трубопроводов высокого давления, несущих конструкций в мостостроении и промышленном строительстве. Повышенная надежность и долговечность.",
    ordersCount: 95,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productStainlessSteelPipeMock = [
  {
    name: "Труба нержавеющая 15x1.5 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/QjN5b2Sq/image-1.jpg",
      "https://i.ibb.co/zT3BxJJn/image-2.jpg",
      "https://i.ibb.co/LzW6kh4y/image-3.jpg",
    ],
    price: 420.0,
    quantity: 500,
    mass: 0.51,
    description:
      "Тонкостенная бесшовная труба из нержавеющей стали AISI 304 диаметром 15 мм. Применяется в пищевой промышленности, для изготовления теплообменников, трубопроводов для пищевых продуктов и декоративных элементов. Отличная коррозионная стойкость.",
    ordersCount: 380,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Труба нержавеющая 20x2 мм AISI 316",
    imageUrl: [
      "https://i.ibb.co/pqtG9cT/image-4.jpg",
      "https://i.ibb.co/5WgjPG02/image-5.jpg",
      "https://i.ibb.co/GfNs9Bzv/image-6.jpg",
    ],
    price: 680.0,
    quantity: 250,
    mass: 0.89,
    description:
      "Труба из кислотостойкой нержавеющей стали AISI 316 диаметром 20 мм. Благодаря содержанию молибдена обладает исключительной стойкостью к хлоридам и морской воде. Идеальна для химической промышленности, судостроения и фармацевтики.",
    ordersCount: 215,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Труба нержавеющая 25x2.5 мм AISI 304",
    imageUrl: [
      "https://i.ibb.co/zWz1xdYL/image-7.jpg",
      "https://i.ibb.co/vy0ZQg2/image-8.jpg",
      "https://i.ibb.co/1GrQy06X/image-9.jpg",
    ],
    price: 850.0,
    quantity: 320,
    mass: 1.39,
    description:
      "Бесшовная труба из стали AISI 304 диаметром 25 мм. Универсальный размер для систем водоснабжения, отопления, изготовления ограждений, поручней и элементов дизайна. Шлифованная поверхность, точные геометрические размеры.",
    ordersCount: 465,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Труба нержавеющая 32x3 мм AISI 321",
    imageUrl: [
      "https://i.ibb.co/vGqKDXh/image-10.jpg",
      "https://i.ibb.co/Jw2cdFHT/image-12.jpg",
      "https://i.ibb.co/zHTHHRLQ/image-11.jpg",
    ],
    price: 1150.0,
    quantity: 120,
    mass: 2.15,
    description:
      "Жаропрочная труба из нержавеющей стали AISI 321 диаметром 32 мм. Стабилизирована титаном, что обеспечивает сохранение механических свойств при температурах до 800°C. Применяется в печах, теплообменниках, выхлопных системах и энергетическом оборудовании.",
    ordersCount: 68,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Труба нержавеющая 42x3.5 мм AISI 316L",
    imageUrl: [
      "https://i.ibb.co/pjfm4nWN/image-13.jpg",
      "https://i.ibb.co/Fky9cjHD/image-14.jpg",
      "https://i.ibb.co/20cn230D/image-15.jpg",
    ],
    price: 1680.0,
    quantity: 85,
    mass: 3.33,
    description:
      "Труба из стали AISI 316L (с пониженным содержанием углерода) диаметром 42 мм. Низкое содержание углерода предотвращает межкристаллитную коррозию после сварки. Стандарт для пищевой, фармацевтической промышленности и производства емкостного оборудования.",
    ordersCount: 92,
    category: {
      connect: { name: "Труба" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productStainlessSteelSheetMock = [
  {
    name: "Лист нержавеющий 1 мм AISI 304 (1250x2500)",
    imageUrl: [
      "https://i.ibb.co/7NxnD9M9/7494766811.webp",
      "https://i.ibb.co/Q5QKYh4/12639173147.webp",
      "https://i.ibb.co/1YYxhMSY/12639173219.webp",
    ],
    price: 2850.0,
    quantity: 180,
    mass: 7.85,
    description:
      "Холоднокатаный лист из нержавеющей стали AISI 304 толщиной 1 мм размером 1250x2500 мм. Поверхность 2B (матовая). Применяется в пищевой промышленности, для изготовления емкостей, декоративных панелей и элементов дизайна. Отличная коррозионная стойкость.",
    ordersCount: 420,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Лист нержавеющий 2 мм AISI 316 (1500x3000)",
    imageUrl: [
      "https://i.ibb.co/hRfXHPdL/12645488853.webp",
      "https://i.ibb.co/HfhK8Zjx/9097620320.webp",
      "https://i.ibb.co/8kPht9d/9097620497.webp",
    ],
    price: 6200.0,
    quantity: 95,
    mass: 31.4,
    description:
      "Горячекатаный лист из кислотостойкой стали AISI 316 толщиной 2 мм. Благодаря содержанию молибдена обладает повышенной устойчивостью к хлоридам и агрессивным средам. Используется в химической промышленности, судостроении и производстве резервуаров.",
    ordersCount: 285,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Лист нержавеющий 3 мм AISI 304 (1250x2500)",
    imageUrl: [
      "https://i.ibb.co/d4mL94kp/12639167266.webp",
      "https://i.ibb.co/Z6mfrDhT/7494745415.webp",
      "https://i.ibb.co/W49cbtZx/9496840241.webp",
    ],
    price: 4150.0,
    quantity: 150,
    mass: 58.9,
    description:
      "Лист нержавеющей стали AISI 304 толщиной 3 мм. Универсальный материал для изготовления сварных конструкций, кожухов, емкостей и деталей машин. Шлифованная поверхность, хорошая формуемость и свариваемость.",
    ordersCount: 365,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Лист нержавеющий 4 мм AISI 321 (1500x6000)",
    imageUrl: [
      "https://i.ibb.co/gZmBZ0Wd/12639168355.webp",
      "https://i.ibb.co/WNWXNMBv/8975472261.webp",
      "https://i.ibb.co/Y74QVfPq/12639169243.webp",
    ],
    price: 8900.0,
    quantity: 60,
    mass: 125.6,
    description:
      "Жаропрочный лист из стали AISI 321 толщиной 4 мм, стабилизированный титаном. Рабочая температура до 800°C. Применяется для изготовления теплообменников, печного оборудования, выхлопных систем и деталей, работающих при высоких температурах.",
    ordersCount: 78,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Лист нержавеющий 5 мм AISI 316L (2000x6000)",
    imageUrl: [
      "https://i.ibb.co/RpX9g7B3/12645487841.webp",
      "https://i.ibb.co/LDn02Gx8/12594044314.webp",
      "https://i.ibb.co/zW1k67gJ/9328622734.webp",
    ],
    price: 12500.0,
    quantity: 45,
    mass: 235.5,
    description:
      "Толстолистовой прокат из стали AISI 316L (с пониженным содержанием углерода) толщиной 5 мм. Низкое содержание углерода предотвращает межкристаллитную коррозию после сварки. Стандарт для пищевой, фармацевтической промышленности и химических производств.",
    ordersCount: 92,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productAlloySteelSheetMock = [
  {
    name: "Лист горячекатаный 2 мм Ст3сп (1250x2500)",
    imageUrl: [
      "https://i.ibb.co/HTCshrc0/10932987729.webp",
      "https://i.ibb.co/xtV8D334/10988319771.webp",
      "https://i.ibb.co/k6PFsWzd/8234933792.webp",
    ],
    price: 1250.0,
    quantity: 500,
    mass: 39.25,
    description:
      "Горячекатаный лист из конструкционной стали Ст3сп толщиной 2 мм. Отличная свариваемость и пластичность. Применяется для изготовления строительных конструкций, заборов, ворот, элементов металлокаркасов и деталей машин. Соответствует ГОСТ 19903-74.",
    ordersCount: 680,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Лист 09Г2С 4 мм (1500x6000)",
    imageUrl: [
      "https://i.ibb.co/Wv2kJrVh/9868460562.webp",
      "https://i.ibb.co/PZ4xnj1P/9372791142.webp",
      "https://i.ibb.co/Mk7QycYj/8234785586.webp",
    ],
    price: 2850.0,
    quantity: 250,
    mass: 188.4,
    description:
      "Низколегированный лист из стали 09Г2С толщиной 4 мм. Обладает повышенной прочностью и хладостойкостью до -70°C. Идеален для мостостроения, создания несущих конструкций в условиях Крайнего Севера и сварных металлоконструкций повышенной надежности.",
    ordersCount: 320,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Лист рифленый 3 мм Ст3 (1250x2500)",
    imageUrl: [
      "https://i.ibb.co/fYz9WJtc/6918839925.webp",
      "https://i.ibb.co/67yNFvvB/7304051428.webp",
      "https://i.ibb.co/4ZCp7PrX/10865278224.webp",
    ],
    price: 1680.0,
    quantity: 320,
    mass: 62.8,
    description:
      "Рифленый (насечка ромб) лист из стали Ст3 толщиной 3 мм. Антискользящая поверхность делает его идеальным для изготовления ступеней, полов, площадок, трапов и пешеходных переходов. Повышенная прочность и безопасность.",
    ordersCount: 410,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Лист 40Х 6 мм (1500x3000)",
    imageUrl: [
      "https://i.ibb.co/cScQgPGL/10865279501.webp",
      "https://i.ibb.co/rK7fd3Dj/10919314057.webp",
    ],
    price: 4200.0,
    quantity: 80,
    mass: 235.5,
    description:
      "Лист из легированной конструкционной стали 40Х толщиной 6 мм. После термической обработки приобретает высокую прочность и износостойкость. Применяется для изготовления штампов, пресс-форм, зубчатых колес и других высоконагруженных деталей.",
    ordersCount: 95,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Лист холоднокатаный 1 мм 08пс (1250x2500)",
    imageUrl: [
      "https://i.ibb.co/FjxF7Y4/12593852944.webp",
      "https://i.ibb.co/WW6Pp7Y0/11941039455.webp",
      "https://i.ibb.co/b5FrNB0C/9693852838.webp",
    ],
    price: 1450.0,
    quantity: 400,
    mass: 19.6,
    description:
      "Холоднокатаный лист из стали 08пс толщиной 1 мм с гладкой поверхностью. Отличная штампуемость и вытяжка. Используется для холодной штамповки сложных деталей, изготовления кузовных элементов, бытовой техники и декоративных изделий.",
    ordersCount: 520,
    category: {
      connect: { name: "Лист" },
    },
    material: {
      connect: { name: "Марочная сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
];

export const productStainlessSteelFastenersMock = [
  {
    name: "Болт нержавеющий М8x40 AISI 304 (упаковка 100 шт)",
    imageUrl: [
      "https://i.ibb.co/0j9vZRdt/9748110108.webp",
      "https://i.ibb.co/5H6wqPZ/7765121877.webp",
      "https://i.ibb.co/7tnKP734/7514803101.webp",
    ],
    price: 850.0,
    quantity: 250,
    mass: 2.5,
    description:
      "Комплект болтов из нержавеющей стали AISI 304 размером М8x40 мм (100 штук в упаковке). Класс прочности A2-70. Применяются для крепежа в пищевой промышленности, судостроении, строительстве. Устойчивы к коррозии в атмосферных условиях.",
    ordersCount: 580,
    category: {
      connect: { name: "Метизы" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Гайка нержавеющая М10 AISI 316 (упаковка 100 шт)",
    imageUrl: [
      "https://i.ibb.co/v4Xj5djk/8460122389.webp",
      "https://i.ibb.co/sdwgFpp1/7298399955.webp",
      "https://i.ibb.co/xZj8khq/9644118482.webp",
    ],
    price: 1200.0,
    quantity: 180,
    mass: 3.2,
    description:
      "Шестигранные гайки из кислотостойкой стали AISI 316 размером М10 (100 штук). Класс прочности A4-70. Благодаря молибдену в составе устойчивы к воздействию хлоридов и морской воды. Идеальны для судостроения и химической промышленности.",
    ordersCount: 420,
    category: {
      connect: { name: "Метизы" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Винт нержавеющий М6x30 с потайной головкой AISI 304 (100 шт)",
    imageUrl: [
      "https://i.ibb.co/ch1v7YXd/12388705496.webp",
      "https://i.ibb.co/p6HDWkFF/7298413623.webp",
      "https://i.ibb.co/GvYLNCYW/7296972882.webp",
    ],
    price: 680.0,
    quantity: 320,
    mass: 1.8,
    description:
      "Винты с потайной головкой и крестообразным шлицем (PH) из стали AISI 304 размером М6x30 мм. Применяются для крепления декоративных панелей, элементов интерьера, в мебельном производстве. Эстетичный внешний вид и коррозионная стойкость.",
    ordersCount: 350,
    category: {
      connect: { name: "Метизы" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Шпилька резьбовая М12x1000 AISI 304 (шт)",
    imageUrl: [
      "https://i.ibb.co/Z6qqx65C/9276181163.webp",
      "https://i.ibb.co/933tt9NP/7364002584.webp",
      "https://i.ibb.co/1YKd6dWF/8530561989.webp",
    ],
    price: 450.0,
    quantity: 150,
    mass: 0.89,
    description:
      "Резьбовая шпилька из нержавеющей стали AISI 304 диаметром М12 длиной 1000 мм. Используется для создания шпилечных соединений в ответственных узлах, крепления оборудования, монтажа трубопроводов и металлоконструкций.",
    ordersCount: 185,
    category: {
      connect: { name: "Метизы" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Мало на складе" }],
    },
  },
  {
    name: "Шайба нержавеющая плоская М8 AISI 316 (упаковка 200 шт)",
    imageUrl: [
      "https://i.ibb.co/20Ft4Bv2/9948895699.webp",
      "https://i.ibb.co/21sGmVb5/7298739320.webp",
      "https://i.ibb.co/Yq4SPLt/9087907708.webp",
    ],
    price: 950.0,
    quantity: 200,
    mass: 2.1,
    description:
      "Плоские шайбы из стали AISI 316 под болт М8 (200 штук в упаковке). Предназначены для увеличения площади опоры и предотвращения повреждения соединяемых деталей. Повышенная коррозионная стойкость для работы в агрессивных средах.",
    ordersCount: 290,
    category: {
      connect: { name: "Метизы" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }, { name: "Быстрая отгрузка" }],
    },
  },
];

export const productStainlessSteelOtherMock = [
  {
    name: "Сетка нержавеющая плетеная 1х1 мм AISI 304 (рулон 1x30 м)",
    imageUrl: [
      "https://i.ibb.co/WvPwsp9C/9719852725.webp",
      "https://i.ibb.co/MrR6tyz/12840762443.webp",
      "https://i.ibb.co/k60bgFf0/8867014744.webp",
    ],
    price: 3200.0,
    quantity: 85,
    mass: 8.5,
    description:
      "Тканая сетка из нержавеющей проволоки AISI 304 с размером ячейки 1х1 мм. Применяется для фильтрации жидкостей и газов, в пищевой промышленности, для изготовления грохотов, сит и защитных экранов. Высокая прочность и долговечность.",
    ordersCount: 240,
    category: {
      connect: { name: "Прочее" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Проволока нержавеющая 2 мм AISI 304 (бухта 50 кг)",
    imageUrl: [
      "https://i.ibb.co/prBxtWwZ/6840491121.webp",
      "https://i.ibb.co/qMVcfK5S/11516679254.webp",
      "https://i.ibb.co/rf0vXmKT/9719852467.webp",
    ],
    price: 4500.0,
    quantity: 120,
    mass: 50.0,
    description:
      "Холоднотянутая проволока из нержавеющей стали AISI 304 диаметром 2 мм. Используется для изготовления пружин, тросов, сеток, электродов для сварки и крепежных элементов. Высокая прочность на разрыв и отличная коррозионная стойкость.",
    ordersCount: 310,
    category: {
      connect: { name: "Прочее" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Популярное" }],
    },
  },
  {
    name: "Перфорированный лист 2 мм AISI 304 (отверстия 5 мм)",
    imageUrl: [
      "https://i.ibb.co/MkZZy7xQ/7185392215.webp",
      "https://i.ibb.co/nNpXQ4r0/6732223536.webp",
      "https://i.ibb.co/93bNKctv/11308258863.webp",
    ],
    price: 5800.0,
    quantity: 65,
    mass: 45.2,
    description:
      "Перфорированный лист из нержавеющей стали AISI 304 толщиной 2 мм с круглыми отверстиями диаметром 5 мм. Применяется для изготовления фильтров, декоративных панелей, экранов, защитных кожухов и элементов дизайна интерьера.",
    ordersCount: 145,
    category: {
      connect: { name: "Прочее" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Новое" }, { name: "Быстрая отгрузка" }],
    },
  },
  {
    name: "Уголок перфорированный 40x40x2 мм AISI 304 (2 м)",
    imageUrl: [
      "https://i.ibb.co/4RMc2cZg/8376730848.webp",
      "https://i.ibb.co/h1nPt1Dm/12293111616.webp",
      "https://i.ibb.co/7tQmh7P9/11516671534.webp",
    ],
    price: 1250.0,
    quantity: 200,
    mass: 3.8,
    description:
      "Перфорированный уголок из нержавеющей стали AISI 304 длиной 2 метра. Отверстия для крепления расположены с шагом 25 мм. Идеален для монтажа полок, стеллажей, каркасов и крепления оборудования. Не требует дополнительной обработки.",
    ordersCount: 380,
    category: {
      connect: { name: "Прочее" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Быстрая отгрузка" }, { name: "Популярное" }],
    },
  },
  {
    name: "Профиль алюминиевый с пазом (анодированный, 2 м)",
    imageUrl: [
      "https://i.ibb.co/qMY8J7Jf/9053378035.webp",
      "https://i.ibb.co/zW55y8bZ/7449164184.webp",
      "https://i.ibb.co/Q71PLTQQ/12807341884.webp",
    ],
    price: 1850.0,
    quantity: 150,
    mass: 4.2,
    description:
      "Алюминиевый профиль с Т-образным пазом для модульных конструкций. Анодированное покрытие обеспечивает защиту от коррозии. Применяется для создания стеллажей, рабочих столов, ограждений, каркасов торгового оборудования и автоматизации.",
    ordersCount: 265,
    category: {
      connect: { name: "Прочее" },
    },
    material: {
      connect: { name: "Нержавеющая сталь" },
    },
    badges: {
      connect: [{ name: "Мало на складе" }],
    },
  },
];

export const mockProducts = [
  productStainlessSteelCircleMock,
  productStainlessSteelQuadMock,
  productAlloySteelCircleMock,
  productAlloySteelQuadMock,
  productStainlessSteelHexMock,
  productStainlessSteelStripMock,
  productAlloySteelAngleMock,
  productAlloySteelChannelMock,
  productAlloySteelPipeMock,
  productStainlessSteelPipeMock,
  productStainlessSteelSheetMock,
  productAlloySteelSheetMock,
  productStainlessSteelFastenersMock,
  productStainlessSteelOtherMock,
];
