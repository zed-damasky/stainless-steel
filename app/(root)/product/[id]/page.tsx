import { Container, ProductImage, Title } from "@/components/shared";
import { Badge, Button } from "@/components/ui";
import { prisma } from "@/prisma/prisma";
import { getBadgeVariant } from "@/lib/badgeVariant";
import { Plus } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      badges: true,
      material: true,
      category: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="my-4">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <section className="w-full">
          <ProductImage
            className="w-full max-w-120"
            imageUrls={product.imageUrl}
            alt={product.name}
          />
        </section>

        <section className="flex w-full flex-col gap-2">
          <div className="space-y-3">
            {product.badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <Badge key={badge.id} variant={getBadgeVariant(badge.name)} className="font-extrabold text-md p-4 select-none ">
                    {badge.name}
                  </Badge>
                ))}
              </div>
            )}

            <Title
              text={product.name}
              size="lg"
              className="font-extrabold leading-tight"
            />

            <p className="text-sm text-muted-foreground">
              {product.quantity > 0
                ? `В наличии: ${product.quantity} шт.`
                : "Нет в наличии"}
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-secondary/50 p-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Стоимость</p>

              <p className="text-3xl font-extrabold">
                {Number(product.price).toLocaleString("ru-RU")} ₽
              </p>
            </div>

            <Button
              variant="secondary"
              className="w-full text-base font-bold sm:w-auto"
            >
              <Plus size={20} className="mr-1" />В корзину
            </Button>
          </div>

          <section className="rounded-2xl border p-6">
            <Title text="Характеристики" size="md" className="font-extrabold" />

            <dl className="mt-2 divide-y">
              <div className="flex items-center justify-between gap-4 py-2">
                <dt className="text-muted-foreground">Материал</dt>
                <dd className="text-right font-medium">
                  {product.material?.name ?? "н/д"}
                </dd>
              </div>

              <div className="flex items-center justify-between gap-4 py-2">
                <dt className="text-muted-foreground">Категория</dt>
                <dd className="text-right font-medium">
                  {product.category?.name ?? "н/д"}
                </dd>
              </div>

              <div className="flex items-center justify-between gap-4 py-2">
                <dt className="text-muted-foreground">Количество</dt>
                <dd className="text-right font-medium">
                  {product.quantity} шт.
                </dd>
              </div>

              <div className="flex items-center justify-between gap-4 py-2">
                <dt className="text-muted-foreground">Масса</dt>
                <dd className="text-right font-medium">
                  {Number(product.mass).toLocaleString("ru-RU")} кг
                </dd>
              </div>
            </dl>
          </section>

          <section className="space-y-3">
            <Title text="Дополнительно" size="md" className="font-extrabold" />

            <p className="whitespace-pre-line leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          </section>
        </section>
      </div>
    </Container>
  );
}
