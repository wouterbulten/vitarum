import Box from '../objects/box';

export default class Ground extends Box {

  constructor(color = 0x5C4829) {
    super(1000, 10, 1000, color);

    this.position.y = -10;

    this.receiveShadow = true;
  }
}
