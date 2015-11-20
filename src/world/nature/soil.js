/**
 * Base class for all soil levels
 */
export default class Soil {

  constructor(height = 1) {
    this.height = height;
    this.color = 0x6B3E21;
  }

  entityId() {
    return Symbol.for('vit.entity.soil');
  }
}
