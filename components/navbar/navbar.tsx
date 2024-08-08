import { Button, Dialog, Skeleton, Stack } from '@mui/material';
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
import Image from 'next/image';
import { useState } from 'react';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
          <FontAwesomeIcon icon={faLinkedin} id="ld" onClick={handleOpen} />
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
            <Button
              variant="contained"
              id="acceptedInvite"
              target="_blank"
              href="https://discord.gg/ZCr75WVW"
            >
              JOIN NOW!
            </Button>
          </div>
        </div>
      </div>
      <Dialog
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClose={handleClose}
      >
        <Stack
          sx={{
            display: 'flex',
            position: 'relative',
            height: 500,
            width: 500,
            backgroundColor: '#fff'
          }}
        >
          <Stack>
            <Skeleton
              variant="circular"
              height={200}
              width={200}
              sx={{
                display: loaded ? 'none' : 'flex',
                position: 'absolute',
                top: '2%',
                left: '30%'
              }}
            />
            <Image
              src={'/profile.jpg'}
              alt="Profile"
              id="linkedInProfile"
              height={200}
              width={200}
              style={{
                display: 'flex',
                position: 'absolute',
                top: '2%',
                left: '30%',
                borderRadius: 100,
                visibility: loaded ? 'visible' : 'hidden'
              }}
              onLoad={() => setLoaded(true)}
              draggable="false"
            ></Image>
          </Stack>
        </Stack>
      </Dialog>
    </Stack>
  );
}
