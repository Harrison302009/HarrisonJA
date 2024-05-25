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
                  overflow: 'scroll'
                }}
              >
                <h1 id="titleAbout">Harrison John-Anozie</h1>
                <h3 id="contentAbout">Teenage Trailblazer: From Zero to Full Stack Hero</h3>
                <q id="contentQuote">
                  There&apos;s always a reason behind people&apos;s actions but that doesn&apos;t
                  give us a reason to fail
                </q>
                <br />
                <Stack className="autobiography">
                  <h2>Background</h2>
                  <Stack id="introduction">
                    <p id="firstParagraph">
                      My name is Harrison John-Anozie. I was born in Lome, Togo on Thursday 30th
                      April into an upper-middle class family as the 2nd son of 4 children. Life was
                      simple, the people around me were friendly and there was always someone to
                      play with - that is, when I was awake.
                    </p>
                    <p>
                      As a child, I marveled at the world. I always had one question or the other.
                      The people I asked answered me in the beginning but, of course, it got
                      annoying. So, instead of answering me directly, they&apos;d give me a book and
                      tell me to read it and find my answer or they&apos;d tell me to research about
                      it. At 5 years, I didn&apos;t understand the meaning of the word
                      &quot;research&quot; so I&apos;d just carry the book and read it
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
