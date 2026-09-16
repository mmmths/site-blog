import { useState } from "react";
import { Link2, MessageCircle, Send, Share2 } from "lucide-react";

type PostShareProps = {
  slug: string;
};

export function PostShare({ slug }: PostShareProps) {
  const [copied, setCopied] = useState(false);
  const postPath = `/blog/${slug}`;

  async function handleCopyLink() {
    await navigator.clipboard.writeText(window.location.origin + postPath);
    setCopied(true);
  }

  return (
    <aside className="space-y-4 lg:sticky lg:top-8 lg:self-start">
      <h2 className="text-heading-xs text-gray-100">Compartilhar</h2>
      <div className="flex flex-col gap-2">
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postPath)}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-md border border-gray-400 px-3 py-2 text-body-sm text-gray-200 transition-colors hover:border-blue-300 hover:text-blue-200"
        >
          <Share2 className="size-4" /> LinkedIn
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postPath)}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-md border border-gray-400 px-3 py-2 text-body-sm text-gray-200 transition-colors hover:border-blue-300 hover:text-blue-200"
        >
          <MessageCircle className="size-4" /> Facebook
        </a>
        <a
          href={`https://slack.com/share?url=${encodeURIComponent(postPath)}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-md border border-gray-400 px-3 py-2 text-body-sm text-gray-200 transition-colors hover:border-blue-300 hover:text-blue-200"
        >
          <Send className="size-4" /> Slack
        </a>
        <button
          type="button"
          onClick={handleCopyLink}
          className="flex items-center gap-3 rounded-md border border-gray-400 px-3 py-2 text-left text-body-sm text-gray-200 transition-colors hover:border-blue-300 hover:text-blue-200"
        >
          <Link2 className="size-4" /> {copied ? "Link copiado" : "Copiar link"}
        </button>
      </div>
    </aside>
  );
}