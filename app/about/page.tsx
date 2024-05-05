'use client';
import { Box, Stack } from '@mui/material';
import { NavBar } from 'components/navbar/navbar';

export default function HomePage() {
  return (
    <body>
      <div>
        <Box>
          <Stack
            style={{
              backgroundImage: "url('/about-wall.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh'
            }}
          >
            <NavBar />
          </Stack>
        </Box>
      </div>
    </body>
  );
}
