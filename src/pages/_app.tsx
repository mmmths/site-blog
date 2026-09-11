import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // aqui que adiciona estados globais e estilos globais
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
