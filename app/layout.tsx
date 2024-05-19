import { RootProvider } from '../providers/root-provider/root-provider';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Harrison John-Anozie'
  },
  description:
    'A website about Harrison John-Anozie (the owner of CrownAI, Sypher Globe, and creator of AICulture)'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
