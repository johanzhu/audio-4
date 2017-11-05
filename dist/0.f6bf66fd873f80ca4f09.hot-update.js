exports.id = 0;
exports.modules = {

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Ball(geo,mat,imgs,camera) {
	
	THREE.Mesh.call(this);
	
	this.geometry = new THREE.SphereGeometry(5,64,64);
	
	var vetexShader = [
	
		"void main() {",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
		"}"
		
	].join("\n");
	
	var fragmentShader = [
		"uniform samplerCube mapCube;",
	
		"void main() {",
			"gl_FragColor = textureCube(mapCube, reflect(normalize(-cameraPosition), normalize(normal)));",
		"}"
 
	].join("\n");
	
	this.material = new THREE.ShaderMaterial({
		uniforms : {
			mapCube: { type:"t", value: THREE.CubeTexture(imgs) },
			cameraPosition : { type : 'v', value: camera.position}
		},
		vertexShader : vetexShader,
		fragmentShader : fragmentShader
	});
	
}

Ball.prototype = Object.create(THREE.Mesh.prototype);
Ball.prototype.constructor = Ball;

/* harmony default export */ __webpack_exports__["a"] = (Ball);


/***/ })

};