import { Link2 } from "lucide-react";
import { useCallback, useMemo } from "react";
import {
  SOCIAL_PROVIDERS,
  ShareConfig,
  SocialProvider
} from "./social-providers";
import { useClipboard } from "../use-clipboard";

type useShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

function normalizeUrl(url: string) {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  if (typeof window === "undefined") return url;

  return new URL(url, window.location.origin).toString();
}

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000
}: useShareProps) {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = useMemo(
    () => ({
      url: normalizeUrl(url),
      ...(title && { title }),
      ...(text && { text })
    }),
    [url, title, text]
  );

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        const absoluteUrl = normalizeUrl(url);

        if (provider === "clipboard") {
          return await handleCopy(absoluteUrl);
        }
        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig) {
          throw new Error(`Provider not supported ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl({
          ...shareConfig,
          url: absoluteUrl
        });
        const shareWindow = window.open(shareUrl, "_blank");

        return !!shareWindow;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    [shareConfig, handleCopy, url]
  );

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider)
      })),
      {
        provider: "clipboard",
        name: isCopied ? "Link copied" : "Copy Link",
        icon: <Link2 className="h-4 w-4" />,
        action: () => share("clipboard")
      }
    ],
    [isCopied, share]
  );

  return { share, shareButtons, clipboardTimeout };
}
