import Link from "next/link";
import React from "react";
import { Title } from ".";
import { Badge, Button } from "../ui";
import { Plus } from "lucide-react";

interface Tag {
  text: string;
  variant: "default" | "secondary" | "destructive" | "outline";
}

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string[];
  description: string;
  tags: Tag[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  description,
  tags,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/offers/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-65">
          <img className="w-53.75 h-53.75" src={imageUrl[0]} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        {/*<p className="text-sm text-gray-400">{tags} {description}</p>*/}

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant={tag.variant}>
                {tag.text}
              </Badge>
            ))}
          </div>
        )}

        <p className="text-sm text-gray-400 line-clamp-3"> {description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl">
            <b> {price.toLocaleString("ru-RU")} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />В корзину
          </Button>
        </div>
      </Link>
    </div>
  );
};
