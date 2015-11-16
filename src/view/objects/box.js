import THREE from 'three';

export default class Box extends THREE.Mesh {

  constructor(width, height, depth, color) {
    super(new THREE.BoxGeometry(width, height, depth), new THREE.MeshLambertMaterial({color}));
  }
}
