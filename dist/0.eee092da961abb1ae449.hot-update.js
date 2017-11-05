exports.id = 0;
exports.modules = {

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function BcParticles(geo,mat,map) {
	
	THREE.Points.call(this);
	
	var vertices  = 
	
	this.geometry = new THREE.Geometry();
	
	
	var texture = new THREE.Texture(map);
	
	texture.needsUpdate = true;
	
	this.material = new THREE.PointsMaterial({transparent : true, map : texture, color : 0x5594f1, alphaTest: 0.5});

	this.scale.set(3,5,5);
	
	this.rotation.x = -Math.PI/18;
	
	this.position.x = 2;
	console.log(this.geometry);
}

BcParticles.prototype = Object.create(THREE.Points.prototype);
BcParticles.prototype.constructor = BcParticles;

BcParticles.prototype.update = function() {
	
	this.rotation.z += Math.PI/400;
	
}

/* harmony default export */ __webpack_exports__["a"] = (BcParticles);


/***/ })

};