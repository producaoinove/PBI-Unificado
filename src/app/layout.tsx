import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const poppins = Poppins({ subsets: ["latin"] , weight: ["100", "200", "300","400","700","800"]});

export const metadata: Metadata = {
  title: "PBI unificado",
  description: "Site do PBI unificado"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title?.toString()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${poppins.className} tablet:bg-background mobile:bg-mat-black`}>
        <div className="inset-0 z[-1]">
          <Image
            src="/background-wide.png"
            alt="screens background"
            width={7800}
            height={3080}
            quality={100}
            className="absolute bg-cover bg-center h-screen w-screen object-cover object-left brightness-150 max-tablet:hidden"
          />
        </div>
        {children}
      </body>
    </html>
  );
}

