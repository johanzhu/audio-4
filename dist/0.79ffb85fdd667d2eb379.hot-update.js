exports.id = 0;
exports.modules = {

/***/ 0:
false,

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preload_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preload_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preload_js__);


function Loader(eventBus, onLoadComplete) {
	
	var scope = this;
	
	var preload,
		sound,
		analyser;
	
	var loadNum = 2;
	
	var total1 = 0;
	var total2 = 0;
	
	eventBus.addEventListener('loaded',function() {
			
		if(loadNum == 1)
		
			onLoadComplete();
		
		else
		
			loadNum--;
		
	});
	
	this.loadAssets = function(assetsList) {
		
		preload = new __WEBPACK_IMPORTED_MODULE_0_preload_js___default.a.LoadQueue(false);
				
		preload.addEventListener( 'complete', onAssetsLoaded );
	
		preload.addEventListener( 'progress', onProgress1);
		
		loadAssets(assetsList);
		
	}
	
	function loadAssets(assetsList) {
		
		var len = assetsList.length;			
			
		for(var i = 0; i < len; i++) {
			
			var url = assetsList[i].url;
			
			var id = assetsList[i].id;
			
			preload.loadFile({ src : url, id : id });
			
		}
			
	}
	
	function onAssetsLoaded() {
		
		scope.getResult = function(id) {
			
			return preload.getResult(id);
			
		}
		
		eventBus.dispatchEvent({type:'loaded'});
		
	}
	
	function onProgress1() {
		
		var per = preload.progress * 50 ;
		
		total1 = per;
		
		var p = total1 + total2 / 100 * 150;
		
		loadingBar.style.width = p + 'px';
		
		loadingBar.innerHTML = (total1 + total2).toFixed(2) + '%';
		
		console.log('assets : ' + per);
		
	}
	
	this.loadMusic = function(musicUrl) {
		
		var listener = new THREE.AudioListener();
				
		sound = new THREE.Audio(listener);
		
		var audioLoader = new THREE.AudioLoader();
		
		analyser = new THREE.AudioAnalyser(sound, 512);
		
		scope.analyser = analyser;
		
		audioLoader.load(musicUrl, onMusicLoaded, onProgress2);
		
	}
	
	function onMusicLoaded(buffer) {
		
		sound.setBuffer( buffer );
		
		sound.setLoop(false);
		
		sound.setVolume(1);
		
		scope.sound = sound;
		
		eventBus.dispatchEvent({type:'loaded'});
		
	}
	
	function onProgress2(xhr) {
		
		var per = xhr.loaded/xhr.total * 50;
		
		total2 = per;
		
		var p = total1 + total2 / 100 * 150;
		
		loadingBar.style.width = p + 'px';
		
		loadingBar.innerHTML = (total1 + total2).toFixed(2) + '%';
		
		console.log('music : ' + per);
		
	}
}

/* harmony default export */ __webpack_exports__["a"] = (Loader);


/***/ })

};