import {settings} from '../render-settings';
import Box from '../../objects/box';

export default class SoilRenderer {

  constructor(position, entity, y) {
    this.entity = entity;
    this.position = position;
    this.y = y;
  }

  addTo(scene) {
    const width = settings.voxelSize;
    const depth = settings.voxelSize;
    const height = this.entity.height * settings.voxelSize;

    // Find the correct position of the object given the size of a single voxel
    const x = (this.position.x + 0.5) * settings.voxelSize;
    const z = (this.position.z + 0.5) * settings.voxelSize;
    const y = this.y * settings.voxelSize + 0.5 * height;

    const soilBox = new Box(width, height, depth, this.entity.color);
    soilBox.position.set(x, y, z);
    scene.add(soilBox);
  }
}
