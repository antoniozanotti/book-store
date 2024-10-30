import "@/assets/styles/globals.css";
import { fontPrimary, fontSecondary } from "@/assets/styles/fonts";
import { LayoutContainer } from "@/domain/layout/containers/layout-container";
import { ReactNode } from "react";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} font-secondary`}
      >
        <Providers>
          <LayoutContainer>{children}</LayoutContainer>
        </Providers>
      </body>
    </html>
  );
}
