import * as THREE from 'three';

var scene,
	camera,
	renderer;
	
var w = window.innerWidth;
var h = window.innerHeight;

var fxaaPass, fxaaBuffer;

init();

animate();

function init() {

	var domElement = document.createElement('div');
	
	domElement.setAttribute('id','world');
		
	document.body.appendChild(domElement);
	
	scene = new THREE.Scene();
	
	camera = new THREE.PerspectiveCamera(45, w/h, 0.1, 2000);
	
	camera.position.set(0,0,200);
	
	camera.lookAt(new THREE.Vector3(0,0,0));
	
	renderer = new THREE.WebGLRenderer({alpha:true,antialias:false});
	
	renderer.setSize(w, h);
	
	renderer.setPixelRatio(1.5);
	
	renderer.shadowMap.enabled = true;
	
	var container =  document.getElementById('world');
	
	container.appendChild(renderer.domElement);
	
	var axesHelper = new THREE.AxisHelper(10);
	
	scene.add(axesHelper);
	
	window.addEventListener('resize',onWindowResize,false);
	
	function onWindowResize() {
		
		renderer.setSize(w, h);
		
		camera.aspect = w / h;
		
		camera.updateProjectionMatrix();
		
	}
    
}

function render() {
	
	renderer.render(scene,camera);
	
}



function animate() {
	
	requestAnimationFrame(animate);
	
	render();
	
}














