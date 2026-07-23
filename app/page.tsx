import {
  Categories,
  Container,
  FilterSide,
  SortPopup,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все предложения" size="lg" className="font-extrabold" />
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
            <div className="flex flex-col gap-16">Список предложений</div>
          </div>
        </div>
      </Container>
      <div style={{ height: "3000px" }}></div>
    </>
  );
}
