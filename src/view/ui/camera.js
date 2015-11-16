import THREE from 'three';

export default class Camera extends THREE.PerspectiveCamera {

  constructor() {
    super(75, window.innerWidth / window.innerHeight, 1, 10000);

    this.position.x = 30;
    this.position.y = 100;
    this.position.z = 100;
    this.lookAt(new THREE.Vector3(0, 0, 0));
  }
}
