"use strict";

import THREE from "three";

import Camera from './view/ui/camera';
import OrbitControls from './view/ui/orbit-control';
import Scene from './view/scene';

import Box from './view/objects/box';

import Ground from './view/models/ground';

import createDebugAxes from './view/ui/axes';

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('scene'),
  alpha: true,
  antialias: true,
});
renderer.setClearColor(new THREE.Color(0xC8DDE0, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const scene = new Scene();
const camera = new Camera();

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(250, 50, 250);
camera.lookAt(controls.target);

const ground = new Ground();
scene.add(ground);

// Create set of boxes
const voxelSize = 10;

const darkGroundColors = [0x291C0A, 0x1F1508, 0x1C1306, 0x1F1406, 0x1C1306];
const grassColors = [0x3CA128, 0x39A623, 0x41AB2C];

for (let d = 0; d < 5; d++) {
  for (let x = 0; x < 50; x++) {
    for (let z = 0; z < 50; z++) {

      if (Math.random() < 0.2) {
        continue;
      }
      const color = darkGroundColors[Math.round(Math.random() * (darkGroundColors.length - 1))];
      const box = new Box(voxelSize, voxelSize / 2, voxelSize, color);

      box.position.set((x + 0.5) * voxelSize, d * (voxelSize / 2), (z + 0.5) * voxelSize);
      scene.add(box);
    }
  }
}

for (let g = 0; g < 3; g++) {
  for (let x = 0; x < 50; x++) {
    for (let z = 0; z < 50; z++) {

      if (Math.random() < ((g * 2) / 10)) {
        continue;
      }
      const color = grassColors[Math.round(Math.random() * (grassColors.length - 1))];
      const box = new Box(voxelSize, voxelSize / 2, voxelSize, color);

      box.position.set((x + 0.5) * voxelSize, (g + 5) * (voxelSize / 2), (z + 0.5) * voxelSize);
      scene.add(box);
    }
  }
}

const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);

const shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
shadowLight.position.set(200, 200, 200);
shadowLight.castShadow = true;
shadowLight.shadowDarkness = 0.2;

const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
backLight.position.set(-100, 200, 50);
backLight.shadowDarkness = 0.1;
backLight.castShadow = true;

scene.add(backLight);
scene.add(light);
scene.add(shadowLight);

createDebugAxes(scene);

function render() {
  requestAnimationFrame( render );

  renderer.render( scene, camera );
}
render();
