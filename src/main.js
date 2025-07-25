import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

/* 
Creando un cubo que gira
*/

/* 
Asigna las caracteristicas de una forma basado
en el ancho, alto y profundidad.
*/
const geometry = new THREE.BoxGeometry(1, 1, 1);

// La textura que usa la forma, puede ser un color
// o una imagen
const material = new THREE.MeshBasicMaterial({ color: 0x932f67 });
// fusiona ambas caracteristicas para crear una forma concreta.
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
/* 
por defecto cuando se añade un elemento a una escena aparece en 0 0, 
La camara se encuentra en ese lugar, asi que es necesario cambiar su posición. 
*/
camera.position.z = 5;


function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
