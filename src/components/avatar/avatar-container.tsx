import { AvatarChildrenProps } from "./types";

export function AvatarContainer({ children }: AvatarChildrenProps) {
  return <div className="flex items-center gap-3">{children}</div>;
}
