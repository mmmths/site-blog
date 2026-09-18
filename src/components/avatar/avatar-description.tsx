import { AvatarChildrenProps } from "./types";

export function AvatarDescription({ children }: AvatarChildrenProps) {
  return <div className="text-gray-300 text-body-xs">{children}</div>;
}
