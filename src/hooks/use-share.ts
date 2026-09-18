import { useCallback, useMemo } from "react";
import {
  SOCIAL_PROVIDERS,
  ShareConfig,
  SocialProvider
} from "./social-providers";

type useShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export function useShare({
  url,
  title,
  text,
  clipboardTimeout = 2000
}: useShareProps) {
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text })
    }),
    [url, title, text]
  );

  const share = useCallback(
    (provider: SocialProvider) => {
      try {
        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig) {
          throw new Error(`Provider not supported ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(shareUrl, "_blank");

        return !!shareWindow;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    [shareConfig]
  );

  const shareButtons = useMemo(
    () =>
      Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider)
      })),
    [share]
  );

  return { share, shareButtons, clipboardTimeout };
}
