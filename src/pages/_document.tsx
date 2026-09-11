import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  //controlar a estrutura inicial do html que vem do servidor (só executado no servidor)
  return (
    <Html lang="en">
      <Head />
      <body className="dark min-h-screen bg-background text-foreground antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
