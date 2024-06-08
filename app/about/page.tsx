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
                      2<sup>nd</sup> position to 3<sup>rd</sup>. I couldn&apos;t comprehend it at
                      the time, and the disappointment weighed heavily on me. Determined not to
                      repeat that performance, I made a promise to myself: I would never settle for
                      mediocrity again. As I entered first grade, I worked tirelessly, striving to
                      understand what had caused my setback. Despite my efforts, the mystery
                      remained unsolved. By second grade, I emerged with the title of &quot;Best in
                      ICT&quot; (Information and Communication Technology) and secured the second
                      position. It was a satisfying achievement, but I knew I couldn&apos;t rest
                      there. My goal was clear—I had to claim the top spot. Third grade became my
                      battleground. I burned the midnight oil, studying until 11 p.m., practicing
                      math diligently after school, and pushing my limits. Finally, the moment
                      arrived: I clinched the coveted title of “Best in ICT,” excelled in
                      Mathematics, topped the Science category and won the ultimate reward-First
                      place overall. That night, excitement bubbled within me. I had reclaimed my
                      position, proving that hard work and determination could rewrite my story. My
                      fourth-grade year remains etched in my memory as one of the most remarkable
                      periods of my life. Prior to that, during my first, second, and third grades,
                      I consistently secured the first overall position. However, despite my
                      achievements, I often felt that I deserved more recognition than I received.
                      Perhaps my confidence was a tad inflated. Everything changed in fourth grade.
                      To my surprise, I received a plethora of awards. Some of them still stand out
                      vividly: <b>&quot;Most Regular&quot;</b>, <b>&quot;Neatest Student&quot;</b>,{' '}
                      <b>&quot;Best in Science&quot;</b>, <b>&quot;Best in Mathematics&quot;</b>,{' '}
                      <b>&quot;Best in ICT&quot;</b>, <b>&quot;Best Behaved&quot;</b>, and, of
                      course, the coveted <b>&quot;1st Overall Position&quot;</b>. The excitement
                      was overwhelming—I had never won so many prizes before. Yet, amidst the
                      celebration, I discovered an unsettling truth. Most teachers didn&apos;t
                      allocate prizes solely based on merit. Instead, they distributed a few to the
                      top-performing student and divided the rest among others to ensure everyone
                      received something. It was a well-intentioned but flawed approach. However,
                      there was one exception: Mr. Francis Fazili, my fourth-grade teacher. Hailing
                      from the Federal Republic of Congo, he stood apart from his colleagues. He
                      refused to compromise on honesty. Unlike the rest, he awarded prizes to those
                      who genuinely deserved them. His unwavering commitment to fairness left a
                      lasting impression on me. Being too honest and always doing the right thing
                      can sometimes be a major disadvantage. This was the case for Mr. Fazili, a
                      teacher at our school. His unwavering commitment to honesty led to his
                      downfall, as he became disliked by some of his colleagues. I first suspected
                      something was amiss when Mr. Fazili didn&apos;t introduce himself to the new
                      students during the next term after my fourth grade. Later, I witnessed him
                      leaving the school premises, an unusual sight. Curious, I approached Mr.
                      Afolabi, the third grade teacher, who hesitated before revealing the truth:
                      Mr. Fazili had been fired. The real story emerged when I discussed it with my
                      mother. Apparently, the headmaster, Mr. Femi, harbored a deep resentment
                      toward Mr. Fazili. The reason? Mr. Fazili believed that prizes should be
                      awarded to deserving students during prize-giving ceremonies. The headmaster
                      disagreed, and this disagreement festered over time. Unfortunately, Mr.
                      Fazili&apos;s punctuality suffered due to floods and traffic during that
                      particular year. Seizing the opportunity, the headmaster reported this to the
                      school&apos;s proprietress, arguing that a teacher who consistently arrived
                      late couldn&apos;t be effective. After persistent efforts, the proprietress
                      decided to terminate Mr. Fazili&apos;s employment. The next day, he received
                      the dreaded sack letter and was asked to leave the school. I was furious upon
                      learning the truth. How could someone lose their job simply for being honest?
                      Although I kept my feelings to myself, my opinion of the headmaster changed
                      forever.
                    </p>
                    <br />
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                id="highProfile"
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
