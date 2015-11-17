import THREE from 'three';

export default class Camera extends THREE.PerspectiveCamera {

  constructor() {
    super(75, window.innerWidth / window.innerHeight, 1, 10000);

    this.position.x = -100;
    this.position.y = 200;
    this.position.z = -25;
  }
}
