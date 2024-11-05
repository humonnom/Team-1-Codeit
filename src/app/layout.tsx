import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import ClientProvider from '@/src/components/client-provider';
import Header from '@/src/components/common/header/container';
import { pretendard } from '@/src/fonts/pretendard/pretendard';
import '@/src/styles/globals.css';
import { theme } from '@/src/styles/theme';

export const metadata: Metadata = {
  title: 'CrewCrew',
  description: 'Generated by CODEIT TEAM1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <head>
        <ColorSchemeScript />
      </head>

      <body className="flex min-h-screen flex-col bg-gray-50">
        <ClientProvider>
          <MantineProvider theme={theme}>
            <Header />
            <div className="mx-auto flex w-full flex-1 flex-col lg:max-w-[1200px]">
              <main className="flex-1 md:shadow-bg">{children}</main>
            </div>
          </MantineProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
