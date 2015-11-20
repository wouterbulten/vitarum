import Bedrock from '../nature/soil/bedrock';

/**
 * A tile is a single square inside a Realm, it can contain multiple stacked objects.
 */
export default class Tile {

  constructor(x, z) {
    this.position = {x, z};
    this.entities = [];

    // Default add bedrock
    this.entities.push({entity: new Bedrock(), y: 0});
  }

  add(entity) {
    // todo Improve height calculation
    this.entities.push({entity: entity, y: this.height()});
  }

  height() {
    const last = this.entities[this.entities.length - 1];
    return last.y + last.entity.height;
  }
}
