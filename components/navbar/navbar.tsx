import { Stack } from '@mui/material';
import '../../app/globalicons.css';

export function NavBar() {
  return (
    <Stack>
      <nav id="nav">
        <div id="home">
          <span></span>
          <h6>Home</h6>
        </div>
        <div id="about">
          <span></span>
          <h6>About</h6>
        </div>
      </nav>
    </Stack>
  );
}
