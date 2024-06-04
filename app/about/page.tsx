'use client';
import { Box, Stack } from '@mui/material';
import { NavBar } from 'components/navbar/navbar';
import '../globalicons.css';
import Image from 'next/image';
import Link from 'next/link';

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
                      I had my kindergaten, nursery and primary school in a school called{' '}
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
                      ). I don&apos;t quite remember my kindergaten education, but I do remember
                      that, since I entered Nursery school, I was told that getting good grades in
                      school is the only way to enjoy a good life in the future. Being only 4 years
                      old, I didn&apos;t fully understand that statement, all I knew was that I
                      needed to read and get good grades in order to make my parents happy, which
                      was of utmost priority to me. The school always organized a program at the end
                      od every academic session where each class performs a show of their choice,
                      then the school hands out prizes to the best student in each subject and the
                      best students in each class(1<sup>st</sup>, 2<sup>nd</sup> and 3<sup>rd</sup>{' '}
                      respectively). I won best in Mathematics and 1<sup>st</sup> position at the
                      end of my Nursery 1 session. In Nursery 2, things were a little bit different.
                      First of all, one of my close friends, Imoh Williams, studied so hard that
                      session that he our results were tied at the end of that session. Naturally,
                      there needed to be a tie breaker, which, unfortunately, happened to be{' '}
                      <b>handwriting</b>. I hated that, of course, because my handwriting then was
                      really terrible. I wasn&apos;t bothered during tests and exams because they
                      were all objective, but this time around, that was the tie breaker. I lost
                      very easily, and that was no surprise to me. In fact, I had even expected it.
                      But I felt really terrible to lost 1<sup>st</sup> position to someone else. As
                      soon as I got home, I went to my room, shut the door, put my head down, and
                      wept bitterly. I don&apos;t remember how long I cried, but I know that it was
                      over an hour at least. I felt really terrible and miserable. Later that night,
                      after dinner, I went to meet my parents and asked them why my handwriting was
                      so bad. That was when they told me everything: How I was left-handed when I
                      was born, how they kept spanking and forcing me to use my right hand instead
                      of my left because they didn&apos;t want any child of theirs to be
                      left-handed. After hearing their story, I was furious. I couldn&apos;t stop
                      wondering how my parents&apos; attitude many years earlier was what made me to
                      lose the 1<sup>st</sup> position. But they told me something that night:
                      Something that helped me a lot many years after. As they put it,{' '}
                      <q>
                        It&apos;s never too late for anything. If you believe that you can do it,
                        and you work towards achieving it then it&apos;s possible.{' '}
                      </q>{' '}
                      After that, I wasn&apos;t all that angry anymore. Instead, I started working
                      on how to improve my handwriting. It took a while (more than 7 years actually)
                      but I finally achieved it. When I entered primary school, things were a lot
                      different from what they were back in nursery school. We had to read books,
                      solve math questions, read poems, and identify phonetic sounds. I had no
                      problem with most of them, except reading poems. I hated literature because
                      our strict teacher demanded perfection. It was really annoying how, out of a
                      class of 18-20, she&apos;d always call me to read the poems. In the beginning,
                      I hated coming out to read in front of everyone else. On top of that,
                      everytime I failed just one word, she&apos;d punish me for the rest of that
                      class. People even used to laugh, asking me how I always do it. I didn&apos;t
                      like it eiter but later on, I realized that she was actually doing all that to
                      help me. It surprised me when, after class, she released me from the
                      punishment I was serving and told me something:{' '}
                      <q>
                        Never give up on yourself. Always try to find a way, after all, it&apos;s
                        not impossible.
                      </q>{' '}
                      Those words helped me a lot, probably even more than she thought. From then
                      on, I started studying all the poems, learning everything there was to know
                      about each of them, and then, by the next week, I could recite just about any
                      poem from the book. Of course, she was impressed, though she didn&apos;t show
                      it immediately. She called me later on and encouraged me to continue like that
                      in all my subjects. Unfortunately, at the end of that session, I dropped from
                      2<sup>nd</sup> position to 3<sup>rd</sup>. I didn&apos;t understand it at all.
                      I was really disappointed in myself and I was sure that a lot of people were
                      as well. I didn&apos;t understand it at all. In Nursery 2, it was handwriting
                      that caused it, but I couldn&apos;t understand what caused it in my 1
                      <sup>st</sup> grade.
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
