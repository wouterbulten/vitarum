import Box from '../objects/Box';

export default class Ground extends Box {

  constructor(color = 0x5E3426) {
    super(1000, 10, 1000, color);

    this.position.y = -10;

    this.receiveShadow = true;
  }
}
