'use client';
import { Box, Stack, Typography } from '@mui/material';
import { NavBar } from 'components/navbar/navbar';
import '../globalicons.css';
import './about.css';
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';

export default function AboutMe() {
  return (
    <body>
      <div>
        <Box>
          <Stack
            id="mainBack"
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
                  height: 630,
                  display: 'flex',
                  position: 'relative',
                  overflowY: 'scroll',
                  overflowX: 'hidden'
                }}
              >
                <h1 id="titleAbout">Harrison John-Anozie</h1>
                <h3 id="contentAbout">Teenage Trailblazer: From Hello World to Full Stack Magic</h3>
                <q id="contentQuote">
                  There&apos;s always a reason behind people&apos;s actions but that doesn&apos;t
                  give us a reason to fail
                </q>
                <br />
                <Stack className="autobiography">
                  <h2>Early Life</h2>
                  <Stack id="introduction">
                    <p id="firstParagraph">
                      I was born in Lome, Togo on Thursday 30th April 2009 into an upper-middle
                      class family as the 2nd son of 4 children with a two-year interval between our
                      ages. I have two brothers: Clinton John-Anozie(older) and Carlton
                      John-Anozie(younger), and one younger sister(Emmanuella John-Anozie). Life was
                      simple, the people around me were friendly and there was always someone to
                      play with - that is, when I was awake. It wasn&apos;t till we moved to Nigeria
                      that I truly saw the world for what it is
                    </p>
                    <h2>Education</h2>
                    <p>
                      I had my kindergaten, nursery and primary school education in a school called{' '}
                      <Link
                        href={'https://babymigo.com/lagos/ebenezery-heights-international-school'}
                        title="ehis"
                      >
                        Ebenezery Heights International School
                      </Link>
                      (now known as{' '}
                      <Link href={'https://www.donumchristischools.com/'} title="dcs">
                        Donum Christi School
                      </Link>
                      ) and secondary school(high school) education in{' '}
                      <Link href={'https://whitesands.org.ng/'}>Whitesands School</Link>
                    </p>
                    <br />
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                id="separator"
                sx={{
                  display: 'flex',
                  position: 'relative',
                  height: '100%',
                  width: '10%',
                  visibility: 'hidden'
                }}
              ></Stack>
              <Stack
                id="highProfile"
                style={{ display: 'flex', position: 'relative', height: '100%', width: '40%' }}
              >
                <Image
                  id="profile"
                  alt="profile"
                  src={'/file.png'}
                  height={650}
                  width={680}
                  draggable="false"
                ></Image>
              </Stack>
            </Stack>
          </Stack>
          <Stack id="alternate">
            <Marquee speed={30} gradient={false}>
              <Typography variant="h4" id="Error">
                Error Generating Results
              </Typography>
            </Marquee>
            <Typography variant="h4" id="smallError">
              Error Generating Results
            </Typography>
            <Typography variant="h6" id="message">
              Please forgive us. It hasn&apos;t been programmed to work on mobile phones, therefore,
              may cause crashes.We&apos;ll try to sort it out as soon as possible &#x1F600;
            </Typography>
          </Stack>
        </Box>
      </div>
    </body>
  );
}
