import Box from '../objects/box';

export default class Ground extends Box {

  constructor(width = 500, depth = 500, height = 10, color = 0x5C4829) {
    super(width, height, depth, color);

    this.position.set(width / 2, - height / 2, depth / 2);

    this.receiveShadow = true;
  }
}
