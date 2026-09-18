import { AvatarChildrenProps } from "./types";

export function AvatarTitle({ children }: AvatarChildrenProps) {
  return <strong className="text-gray-200 text-body-sm">{children}</strong>;
}
