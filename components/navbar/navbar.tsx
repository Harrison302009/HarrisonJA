import { Button, Stack } from '@mui/material';
import '../../app/globalicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export function NavBar() {
  const discordServer = () => {
    var displayUnit = document.getElementById('grayHidden') as HTMLDivElement;
    displayUnit.style.display = 'flex';
  };
  const notInterested = () => {
    var displayUnit = document.getElementById('outputShown') as HTMLDivElement;
    var shine = document.getElementById('grayHidden') as HTMLDivElement;
    displayUnit.style.animation = 'alix 0.6s linear';
    setTimeout(() => {
      shine.style.display = 'none';
      displayUnit.style.animation = 'dis 1s';
    }, 600);
  };
  const GoThroughAnotherMeans = () => {
    var displayUnit = document.getElementById('outputShown') as HTMLDivElement;
    var shine = document.getElementById('grayHidden') as HTMLDivElement;
    shine.addEventListener('click', (e: any) => {
      if (e.target.id === 'grayHidden') {
        displayUnit.style.animation = 'alix 0.6s linear';
        setTimeout(() => {
          shine.style.display = 'none';
          displayUnit.style.animation = 'dis 1s';
        }, 600);
      } else {
        displayUnit.style.animation = '';
      }
    });
  };
  const linkProfile = () => {
    window.location.href = 'https://www.linkedin.com/in/harrison-john-anozie-6766a7298';
  };
  return (
    <Stack>
      <nav id="nav">
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div id="icons">
          <FontAwesomeIcon icon={faInstagram} id="ig" />
          <FontAwesomeIcon icon={faFacebook} id="fb" />
          <FontAwesomeIcon icon={faLinkedin} id="ld" onClick={linkProfile} />
          <FontAwesomeIcon icon={faXTwitter} id="tweet" />
          <FontAwesomeIcon icon={faDiscord} onClick={discordServer} id="discord" />
        </div>
      </nav>
      <div id="grayHidden" onMouseOver={GoThroughAnotherMeans}>
        <div id="outputShown" className="outputShown">
          <FontAwesomeIcon icon={faX} id="times" onClick={notInterested} />
          <br />
          <div id="inmates">
            <FontAwesomeIcon icon={faDiscord} id="bigDiscord" />
            <h2 id="joinTi">Join our server and explore the community</h2>
            <Link href={'https://discord.gg/Bq4VEV3G'} target="_blank">
              <Button variant="contained" id="acceptedInvite">
                JOIN NOW!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Stack>
  );
}
