exports.id = 0;
exports.modules = [
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bcparticles__ = __webpack_require__(5);




var scene,
	camera,
	renderer,
	sound,
	analyser;

var eventBus = new __WEBPACK_IMPORTED_MODULE_0_three__["a" /* EventDispatcher */]();	
	
var loader = new __WEBPACK_IMPORTED_MODULE_1__loader__["a" /* default */](eventBus, onLoadComplete);
	
var w = window.innerWidth;
var h = window.innerHeight;

var isPlay = false;
var playBtn = document.getElementById('play');
var loadingBar = document.getElementById('loadingBar');

var bcParticles;

var fxaaPass, fxaaBuffer;

var assetsList = [
	{ url : './assets/cloud.png', id : 'cloud' },
	{ url : './assets/smoke.png', id : 'smoke' },
	{ url : './assets/particle.png', id : 'particle' },
	{ url : './assets/px.png', id : 'px' },
	{ url : './assets/py.png', id : 'py' },
	{ url : './assets/pz.png', id : 'pz' },
	{ url : './assets/nx.png', id : 'nx' },
	{ url : './assets/ny.png', id : 'ny' },
	{ url : './assets/nz.png', id : 'nz' },
];

var musicUrl = './assets/music.mp3';

loader.loadAssets(assetsList);

loader.loadMusic(musicUrl);

function onLoadComplete() {
	
	init();
	
	createBc();
	
	animate();
	
}

function init() {
	loadingBar.style.display = 'none';
	
	playBtn.style.display = 'block';
	
	var domElement = document.createElement('div');
	
	domElement.setAttribute('id','world');
		
	document.body.appendChild(domElement);
	
	scene = new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* Scene */]();
	
	camera = new __WEBPACK_IMPORTED_MODULE_0_three__["c" /* PerspectiveCamera */](45, w/h, 0.1, 2000);
	
	camera.position.set(0,0,50);
	
	camera.lookAt(new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* Vector3 */](0,0,0));
	
	renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* WebGLRenderer */]({alpha:true,antialias:false});
	
	renderer.setSize(w, h);
	
	renderer.setPixelRatio(1.5);
	
	renderer.shadowMap.enabled = true;
	
	var container =  document.getElementById('world');
	
	container.appendChild(renderer.domElement);
	
	var axesHelper = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* AxesHelper */](10);
	
	scene.add(axesHelper);
	
	new __WEBPACK_IMPORTED_MODULE_0_three__["OrbitControls"](camera);
	
	window.addEventListener('resize',onWindowResize,false);
	
	function onWindowResize() {
		
		renderer.setSize(w, h);
		
		camera.aspect = w / h;
		
		camera.updateProjectionMatrix();
		
	}
	
	sound = loader.sound;
	
	analyser = loader.analyser;
	
	playBtn.onclick = function() {
		
		playBtn.style.display = 'none';
					
		isPlay = true;
		
		sound.play();
		
	}
    
}

function createBc() {
	
	bcParticles = new __WEBPACK_IMPORTED_MODULE_2__bcparticles__["a" /* default */](null,null, loader.getResult('particle'));
	
	scene.add(bcParticles);
	
	
}

function render() {
	
	renderer.render(scene,camera);
	
}

	
function detectMusicEnd() {
			
	var isPlaying = sound.isPlaying ? true : false;
	
	if(!isPlaying) {
		
		isPlay = false;
		
		playBtn.style.display = 'block';
		
	}
	
}
	

function animate() {
	
	requestAnimationFrame(animate);
	
	render();
	
}
















/***/ })
];