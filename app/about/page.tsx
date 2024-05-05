'use client';
import { Box, Stack } from '@mui/material';
import { NavBar } from 'components/navbar/navbar';
import Image from 'next/image';

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
            <Stack style={{ display: 'flex', position: 'relative', flexDirection: 'row' }}>
              <Stack
                id="text"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  width: '50%',
                  height: '100vh'
                }}
              >
                <h1>I&apos;m a full stack developer</h1>
              </Stack>
              <Stack
                id="image"
                style={{ backgroundColor: 'transparent', width: '50%', height: '100vh' }}
              >
                <Image
                  id="profile"
                  alt="profile"
                  src={'/rem.png'}
                  height={1000}
                  width={1000}
                ></Image>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </div>
    </body>
  );
}
