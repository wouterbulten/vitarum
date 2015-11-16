"use strict";

import THREE from "three";

import Camera from './view/ui/camera';
import OrbitControls from './view/ui/orbit-control';
import Scene from './view/scene';

import Ground from './view/models/ground';

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
});
renderer.setClearColor(new THREE.Color(0xC8DDE0, 1.0));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

const scene = new Scene();
const camera = new Camera();

const controls = new OrbitControls(camera, renderer.domElement);

const ground = new Ground();
scene.add(ground);

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
