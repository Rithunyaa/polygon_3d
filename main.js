import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const texture = new THREE.TextureLoader().load( 'assets/earth.png' );
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// donut
const donut_geo = new THREE.TorusGeometry(10, 3, 16, 100);
const donut_tex = new THREE.TextureLoader().load( 'assets/galazy_polygon.png' );
const donut_mat = new THREE.MeshBasicMaterial({ map: donut_tex });
const donut = new THREE.Mesh(donut_geo, donut_mat);
scene.add(donut);

camera.position.z = 18;

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;
  donut.rotation.x += 0.05;
  donut.rotation.y += 0.05;
  renderer.render( scene, camera );
}

animate();


