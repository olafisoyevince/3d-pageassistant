const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("webgl"),
});
renderer.setSize(window.innerWidth, window.innerHeight);

const loader = new THREE.GLTFLoader();

// Load your model
loader.load("/", (gltf) => {
  const model = gltf.scene; // The loaded model
  scene.add(model);

  // Optionally, you can manipulate the model's position, rotation, and scale
  // model.position.set(0, 0, 0);
  // model.rotation.set(0, 0, 0);
  // model.scale.set(1, 1, 1);
});

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0x404040); // Soft ambient light
scene.add(ambientLight);

const animate = () => {
  requestAnimationFrame(animate);

  // Add any animations or updates here

  renderer.render(scene, camera);
};

animate();
