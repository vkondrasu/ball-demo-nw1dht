import { BounceBall } from './Ball';
// Try uncommenting the line below :)
// import pad from 'left-pad'; alert(pad);
 
// Set gravity effect on the ball.
// 1 = Earth, .16 = Moon, 2 = Jupiter.
const GRAVITY = 0.03;

// Color of the ball.
const COLOR = 'pink';

// Bounce the ball!
BounceBall({
  color: COLOR,
  gravity: GRAVITY
});