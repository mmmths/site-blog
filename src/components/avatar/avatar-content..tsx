import { AvatarChildrenProps } from "./types";

export function AvatarContent({ children }: AvatarChildrenProps) {
  return <div className="flex flex-col">{children}</div>;
}
