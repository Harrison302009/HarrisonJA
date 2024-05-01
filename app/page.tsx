import { Box, Stack } from '@mui/material';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <Box>
      <Stack
        style={{
          backgroundImage: "url('/main.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh'
        }}
      >
        <h1>Hello, world!</h1>
        <p>This is a high-performance ecommerce store built with Next.js, Vercele, and Shopify.</p>
      </Stack>
    </Box>
  );
}
