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
                      My name is Harrison John-Anozie. I was born in Lome, Togo on Thursday 30th
                      April into an upper-middle class family as the 2nd son of 4 children. Life was
                      simple, the people around me were friendly and there was always someone to
                      play with - that is, when I was awake. It wasn&apos;t till we moved to Nigeria
                      that I truly experienced the cruelness and harshness of human beings in this
                      world
                    </p>
                    <p>
                      As a child, I marveled at the universe. It was a vast canvas, painted with
                      questions waiting to be answered. Why did the sky wear its cerulean cloak? How
                      did birds defy gravity? What alchemy turned grass into an emerald carpet? My
                      inquiries flowed like a stream, and the adults around me initially indulged my
                      curiosity. But soon, their patience wore thin. Instead of spoon-feeding me
                      answers, they handed me books—keys to unlock the mysteries myself.
                    </p>
                    <br />
                    <p>
                      At five years old, the concept of “research” eluded me, but I clutched those
                      little volumes like treasures. Cross-legged on the floor, I flipped through
                      pages, absorbing knowledge as if it were sunlight filtering through leaves.
                      The scent of paper and ink became my sanctuary, and the words ignited a spark
                      within me—an ember that would blaze into a lifelong love affair with books.
                    </p>
                    <br />
                    <p>
                      Yet, this passion set me apart. While some admired my insatiable curiosity,
                      others couldn&apos;t fathom it. I became an outsider—a bookworm in a world
                      that favored more conventional pursuits. During school recess, while my peers
                      kicked soccer balls or played tag, I nestled under a tree, engrossed in thick
                      novels. Sunlight danced on the pages, casting dappled patterns. Their glances
                      spoke volumes: “What&apos;s wrong with him? Doesn&apos;t he know how to have
                      fun?”
                    </p>
                    <br />
                    <p>
                      As I grew older, the teasing intensified. They&apos;d mimic my serious
                      expression, pretending to read invisible books. “Hey, Harrison,” theyd jeer,
                      “what&apos;s the square root of 144?” I&apos;d answer, and their laughter
                      echoed like a chorus of mockingbirds.
                    </p>
                    <br />
                    <p>
                      While my peers chatted about movies and pop songs, I lost myself in the
                      written word. But their whispers reached me: “He&apos;ll never fit in.” Hurt,
                      I tried to bridge the gap. I joined their conversations, attempting to blend
                      in. Yet, when they asked about slangs or politicians, my mind drew blanks.
                      “Michael Crowder just published a book,” one would say, and the others would
                      laugh. I stood there, disappointed, hearing that voice in my head: “Stick to
                      what you&apos;re good at.”
                    </p>
                    <br />
                    <p>
                      And so, I navigated the uncharted path—the one where books were my companions
                      and bullies my adversaries. I learned that being different wasn&apos;t a flaw;
                      it was my superpower. The library became my refuge, and the characters within
                      its shelves whispered encouragement. They taught me resilience, empathy, and
                      the art of standing tall even when the world tried to shrink me.
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
