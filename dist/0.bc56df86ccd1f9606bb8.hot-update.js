exports.id = 0;
exports.modules = [
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader__ = __webpack_require__(2);



var scene,
	camera,
	renderer;

var eventBus = new __WEBPACK_IMPORTED_MODULE_0_three__["a" /* EventDispatcher */]();	
	
var loader = new __WEBPACK_IMPORTED_MODULE_1__loader__["a" /* default */](eventBus, onLoadComplete);
	
var w = window.innerWidth;
var h = window.innerHeight;

var fxaaPass, fxaaBuffer;

var assetsList = [
	{ url : './assets/cloud.png', id : 'cloud' },
	{ url : './assets/smoke.png', id : 'smoke' },
];

var musicUrl = './assets/music.mp3';

loader.loadAssets(assetsList);

loader.loadMusic(musicUrl);

function onLoadComplete() {
	
	init();

	animate();
	
}

function init() {

	var domElement = document.createElement('div');
	
	domElement.setAttribute('id','world');
		
	document.body.appendChild(domElement);
	
	scene = new __WEBPACK_IMPORTED_MODULE_0_three__["b" /* Scene */]();
	
	camera = new __WEBPACK_IMPORTED_MODULE_0_three__["c" /* PerspectiveCamera */](45, w/h, 0.1, 2000);
	
	camera.position.set(0,0,200);
	
	camera.lookAt(new __WEBPACK_IMPORTED_MODULE_0_three__["d" /* Vector3 */](0,0,0));
	
	renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["e" /* WebGLRenderer */]({alpha:true,antialias:false});
	
	renderer.setSize(w, h);
	
	renderer.setPixelRatio(1.5);
	
	renderer.shadowMap.enabled = true;
	
	var container =  document.getElementById('world');
	
	container.appendChild(renderer.domElement);
	
	var axesHelper = new __WEBPACK_IMPORTED_MODULE_0_three__["f" /* AxisHelper */](10);
	
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
















/***/ })
];