"use strict";

import THREE from "three";

import Camera from './view/ui/camera';
import OrbitControls from './view/ui/orbit-control';
import Scene from './view/scene';

import Box from './view/objects/box';

import Ground from './view/models/ground';

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('scene'),
  alpha: true,
  antialias: true,
});
renderer.setClearColor(new THREE.Color(0xC8DDE0, 1.0));
renderer.setSize(1000, 700);
renderer.shadowMap.enabled = true;

const scene = new Scene();
const camera = new Camera();

const controls = new OrbitControls(camera, renderer.domElement);

const ground = new Ground();
scene.add(ground);

// Create set of boxes
for (let x = 0; x < 50; x++) {
  for (let z = 0; z < 50; z++) {
    const box = new Box(10, 5, 10, (Math.random()*0xFFFFFF<<0));
    box.position.x = x * 10;
    box.position.y = 0;
    box.position.z = z * 10 + 1;
    scene.add(box);
  }
}

const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);

const shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
shadowLight.position.set(200, 200, 200);
shadowLight.castShadow = true;
shadowLight.shadowDarkness = 0.2;

const backLight = new THREE.DirectionalLight(0xffffff, 0.4);
backLight.position.set(-100, 200, 50);
backLight.shadowDarkness = .1;
backLight.castShadow = true;

scene.add(backLight);
scene.add(light);
scene.add(shadowLight);

function render() {
  requestAnimationFrame( render );

  renderer.render( scene, camera );
}
render();
