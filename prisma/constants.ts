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
