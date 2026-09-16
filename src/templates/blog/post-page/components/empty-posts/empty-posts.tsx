import { Inbox } from "lucide-react";

export function EmptyPosts() {
  return (
    <div className="container px-8">
      <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-2 border-dashed border-gray-300 p-8 md:p-12">
        <Inbox className="h-12 w-12 text-cyan-100" />
        <p className="text-center text-gray-100">Nenhum post encontrado</p>
      </div>
    </div>
  );
}
