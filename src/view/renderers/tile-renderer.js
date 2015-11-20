import SoilRenderer from './nature/soil-renderer';

export default class TileRenderer {

  constructor(tile) {
    this.tile = tile;
    this.renderers = [];

    this.buildRenderers();
  }

  /**
   * Add the tile to a scene
   * @param  {Scene} scene THREE.js scene
   * @return {void}
   */
  addTo(scene) {
    this.renderers.forEach(o => {
      o.addTo(scene);
    });
  }

  buildRenderers() {
    this.tile.entities.forEach(({entity, y}) => {
      // Find the correct renderer using the entity symbol
      switch (entity.entityId()) {
      case Symbol.for('vit.entity.soil'):


        this.renderers.push(new SoilRenderer(this.tile.position, entity, y));
        break;

      default:
        console.error('No renderer for entity ' + entity.entityId().toString());
      }
    });
  }
}
