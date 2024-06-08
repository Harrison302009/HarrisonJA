'use client';
import { Box, Stack } from '@mui/material';
import { NavBar } from 'components/navbar/navbar';

export default function HomePage() {
  const preventSight = () => {
    var backSight = document.getElementById('backVid') as HTMLVideoElement;
    backSight.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  };
  return (
    <body>
      <div>
        <Box>
          <Stack
            style={{
              backgroundImage: "url('/main.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh'
            }}
          >
            <NavBar />
            <video
              src="/Cutedge.mp4"
              id="backVid"
              autoPlay
              muted
              onMouseOver={preventSight}
            ></video>
          </Stack>
        </Box>
      </div>
    </body>
  );
}
