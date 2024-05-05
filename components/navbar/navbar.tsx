import { Stack } from '@mui/material';
import '../../app/globalicons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export function NavBar() {
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
          <FontAwesomeIcon icon={faLinkedin} id="ld" />
          <FontAwesomeIcon icon={faTwitter} id="tweet" />
        </div>
      </nav>
    </Stack>
  );
}
