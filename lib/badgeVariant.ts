export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline";

const BADGE_VARIANT_MAP: Record<string, BadgeVariant> = {
  "быстрая отгрузка": "outline",
  "новое": "default",
  "популярное": "secondary",
  "мало на складе": "destructive",
};

export const getBadgeVariant = (name: string): BadgeVariant => {
  const key = name.trim().toLocaleLowerCase("ru-RU");

  return BADGE_VARIANT_MAP[key] ?? "outline";
};