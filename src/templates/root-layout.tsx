import "../styles.css";

import type { ReactNode } from "react";

import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";

type RootLayoutProps = { children: ReactNode };

export const RootLayout = async ({ children }: RootLayoutProps) => {
  const data = await getData();

  return (
    <div id="__waku" className="flex flex-col min-h-screen font-['Nunito']">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const getData = async () => {
  const data = {
    description: "An internet website!",
    icon: "/images/favicon.png",
  };

  return data;
};
