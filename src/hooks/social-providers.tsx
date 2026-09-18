import { Share2, MessageCircle, Send, Link2 } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider = "linkedin" | "facebook" | "slack" | "twitter";

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <Share2 className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`
  },
  facebook: {
    name: "Facebook",
    icon: <MessageCircle className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`
  },
  slack: {
    name: "Slack",
    icon: <Send className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`
  },
  twitter: {
    name: "Twitter",
    icon: <Link2 className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`
  }
};
