import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

renderer.render(scene, camera);


// cube
const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const texture = new THREE.TextureLoader().load( 'assets/earth.png' );
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// donut
const donut_geo = new THREE.TorusGeometry(6, 2, 16, 100);
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

function add_star() {
  const star_geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const star_material = new THREE.MeshBasicMaterial({ color: 0xffffff  });
  const star = new THREE.Mesh(star_geometry, star_material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(add_star);

