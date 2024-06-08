'use client';
import { Box, Stack, Typography } from '@mui/material';
import { NavBar } from 'components/navbar/navbar';
import Marquee from 'react-fast-marquee';

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
            <Stack id="introductionBody">
              <Marquee speed={50} gradient={false} direction="left">
                <Typography variant="h1" id="introductionSlider">
                  Harrison John-Anozie
                </Typography>
              </Marquee>
            </Stack>
          </Stack>
        </Box>
      </div>
    </body>
  );
}
