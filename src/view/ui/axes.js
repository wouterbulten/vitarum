import THREE from 'three';

function createAxis(scene, p1, p2, color) {
  const lineGeometry = new THREE.Geometry();
  const lineMat = new THREE.LineBasicMaterial({color: color, linewidth: 5});
  lineGeometry.vertices.push(p1, p2);
  const line = new THREE.Line(lineGeometry, lineMat);
  scene.add(line);
}

export default function(scene, axisLength = 1000) {
  createAxis(scene, new THREE.Vector3(-axisLength, 0, 0), new THREE.Vector3(axisLength, 0, 0), 0xFF0000);
  createAxis(scene, new THREE.Vector3(0, -axisLength, 0), new THREE.Vector3(0, axisLength, 0), 0x00FF00);
  createAxis(scene, new THREE.Vector3(0, 0, -axisLength), new THREE.Vector3(0, 0, axisLength), 0x0000FF);
}
