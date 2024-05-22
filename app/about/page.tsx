'use client';
import { Box, Stack } from '@mui/material';
import { NavBar } from 'components/navbar/navbar';
import '../globalicons.css';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <body>
      <div>
        <Box>
          <Stack
            style={{
              backgroundImage: "url('/white.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              overflow: 'hidden'
            }}
          >
            <NavBar />
            <Stack style={{ display: 'flex', position: 'relative', flexDirection: 'row' }}>
              <Stack
                id="text"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  width: '50%',
                  height: '100%',
                  display: 'flex',
                  position: 'relative',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflowY: 'scroll'
                }}
              >
                <h1 id="titleAbout">Harrison John-Anozie</h1>
                <h3 id="contentAbout">Cerfified full stack developer</h3>
                <q id="contentQuote">
                  There&apos;s always a reason behind people&apos;s actions but that doesn&apos;t
                  give us a reason to fail
                </q>
                <br />
                <Stack className="autobiography">
                  <h2>Introduction</h2>
                  <Stack id="introduction">
                    <p id="firstParagraph">
                      My name is Harrison John-Anozie. I was born in Lome, Togo on Thursday 30th
                      April into an upper-middle class family as the 2nd son of 4 children.
                    </p>
                    <p>
                      Since I was about 8 years old, I never really had a friend. My friends then
                      were my books and because of that, people used to make fun of me a lot. It
                      took a while but I got used to the taunts, but my major problem was that I
                      never had a friend who was actually a human being
                    </p>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                style={{ display: 'flex', position: 'relative', height: '100%', width: '50%' }}
              >
                <Image
                  id="profile"
                  alt="profile"
                  src={'/file.png'}
                  height={700}
                  width={800}
                  draggable="false"
                ></Image>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </div>
    </body>
  );
}
