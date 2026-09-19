import { useCallback, useEffect, useState } from "react";

type UseClipboardProps = {
  timeout?: number;
};

export function useClipboard({ timeout = 2000 }: UseClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator.clipboard) {
      console.error("clipboard not supported");
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch (error) {
      console.log("Problem while coping", error);
      setIsCopied(false);
    }
  }, []);

  useEffect(() => {
    if (setIsCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, timeout);
      return () => clearTimeout(timer);
    }
  }, [isCopied, timeout]);

  return {
    isCopied,
    handleCopy
  };
}
