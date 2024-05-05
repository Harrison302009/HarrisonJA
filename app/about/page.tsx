'use client';
import { Box, Stack } from '@mui/material';
import { NavBar } from 'components/navbar/navbar';
import '../globalicons.css';

export default function HomePage() {
  return (
    <body>
      <div>
        <Box>
          <Stack
            style={{
              backgroundImage: "url('/collage.png')",
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
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <h1 id="titleAbout">Harrison John-Anozie</h1>
                <h3 id="contentAbout">Hi I&apos;m a full stack developer</h3>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </div>
    </body>
  );
}
