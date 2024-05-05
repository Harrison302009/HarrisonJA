import { RootProvider } from '../providers/root-provider/root-provider';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Harrison John-Anozie'
  },
  description: 'A website about the co-founder of CrownAI and creator of AICulture'
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
