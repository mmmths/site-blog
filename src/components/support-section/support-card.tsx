import { type LucideIcon } from "lucide-react";

type SupportCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  cardClassName: string;
  iconClassName: string;
};

export function SupportCard({
  icon: Icon,
  title,
  description,
  cardClassName,
  iconClassName
}: SupportCardProps) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-lg p-6 text-left md:p-12 ${cardClassName}`}
    >
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${iconClassName}`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <strong className="text-heading-sm text-gray-100">{title}</strong>
      <p className="text-body-sm text-gray-200">{description}</p>
    </div>
  );
}
