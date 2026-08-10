import {
  Container,
  FilterSide,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title
          text="Все предложения"
          size="lg"
          className="font-extrabold mx-4"
        />
      </Container>
      <TopBar />

      <Container className=" mt-10 pb-14px">
        <div className="flex gap-15">
          {/* filter side */}
          <div className="w-62.5">
            <FilterSide />
          </div>
          {/* product side */}
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <ProductsGroupList
                title={"Круг"}
                categoryId={1}
                items={[
                  {
                    id: 0,
                    name: "Предложение 1 Предложение 1Предложение 1Предложение 1Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "outline" },
                      { text: "Мало на складе", variant: "destructive" },
                    ],
                  },
                  {
                    id: 1,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 2,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 3,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 4,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 5,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 6,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 7,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 8,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                ]}
              />

              <ProductsGroupList
                title={"Квадрат"}
                categoryId={2}
                items={[
                  {
                    id: 0,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 1,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 2,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 3,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 4,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 5,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 6,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 7,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 8,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                ]}
              />

              <ProductsGroupList
                title={"Шестигранник"}
                categoryId={3}
                items={[
                  {
                    id: 0,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 1,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 2,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 3,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 4,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 5,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 6,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 7,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                  {
                    id: 8,
                    name: "Предложение 1",
                    price: 10000,
                    imageUrl: [
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/330px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg",
                    ],
                    description: "",
                    tags: [
                      { text: "Быстрая отгрузка", variant: "default" },
                      { text: "Новое", variant: "secondary" },
                      { text: "Популярное", variant: "secondary" },
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
      {/*<div style={{ height: "3000px" }}></div>*/}
    </>
  );
}
