exports.id = 0;
exports.modules = {

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function BcParticles(geo,mat,map) {
	
	THREE.Points.call(this);
	
	var vertices  = [-3.71668,0.761901,4.27142,-3.45619,0.851529,4.18686,-3.42726,1.16765,4.19038,-3.68108,1.08496,4.28041,-3.71111,0.468968,4.16935,-3.44319,0.567266,4.08983,-3.66814,0.203952,3.98409,-3.3923,0.312204,3.90925,-3.59157,-0.03536,3.72555,-3.30751,0.083691,3.6551,-3.48517,-0.251174,3.40363,-3.19285,-0.120928,3.33733,-3.35273,-0.445701,3.02822,-3.05232,-0.304306,2.96592,-3.19802,-0.621149,2.60923,-2.88994,-0.469095,2.55085,-3.02485,-0.779729,2.15655,-2.70974,-0.617949,2.10207,-2.83697,-0.92365,1.68009,-2.51571,-0.753521,1.62956,-2.63819,-1.05512,1.18974,-2.31188,-0.878464,1.1433,-2.43227,-1.17635,0.695401,-2.10225,-0.995433,0.653238,-2.22301,-1.28955,0.20698,-1.89085,-1.10708,0.169358,-2.01419,-1.39692,-0.265628,-1.68169,-1.21606,-0.298374,-1.80958,-1.50069,-0.712524,-1.47878,-1.32502,-0.739989,-1.61297,-1.60305,-1.12381,-1.28614,-1.43661,-1.14552,-3.10688,0.874489,4.0932,-3.08304,1.17625,4.09205,-3.08919,0.607079,4.00028,-3.03407,0.370754,3.82338,-2.94564,0.162252,3.57255,-2.82799,-0.021691,3.25789,-2.68523,-0.184337,2.88946,-2.52147,-0.32895,2.47735,-2.34081,-0.458791,2.03161,-2.14735,-0.577123,1.56234,-1.9452,-0.68721,1.07961,-1.73847,-0.792314,0.593482,-1.53125,-0.895699,0.114044,-1.32766,-1.00063,-0.348632,-1.13179,-1.11036,-0.784471,-0.947762,-1.22816,-1.1834,-2.68231,0.835831,3.99152,-2.66217,1.11665,3.98659,-2.66231,0.592477,3.90177,-2.60624,0.382578,3.72756,-2.51817,0.202124,3.4791,-2.40218,0.047106,3.16659,-2.26233,-0.086484,2.80024,-2.10268,-0.202657,2.39026,-1.92731,-0.305422,1.94685,-1.74029,-0.398787,1.48023,-1.54568,-0.486762,1.0006,-1.34755,-0.573357,0.518165,-1.14997,-0.66258,0.043138,-0.957018,-0.758441,-0.414275,-0.772749,-0.864949,-0.843868,-0.601236,-0.986114,-1.23543,-2.19604,0.740605,3.88288,-2.17842,0.994744,3.87514,-2.17579,0.527529,3.79535,-2.12158,0.35065,3.62291,-2.03735,0.205106,3.3759,-1.927,0.086032,3.0647,-1.79446,-0.011436,2.69965,-1.64366,-0.092161,2.29113,-1.4785,-0.161008,1.84947,-1.30292,-0.222841,1.38505,-1.12082,-0.282523,0.908213,-0.936144,-0.34492,0.429326,-0.752796,-0.414893,-0.041257,-0.574702,-0.497308,-0.493177,-0.40578,-0.597029,-0.916077,-0.249952,-0.718919,-1.2996,-1.66163,0.593859,3.76838,-1.64554,0.816417,3.75885,-1.64286,0.416303,3.68209,-1.59288,0.277948,3.5105,-1.51537,0.172999,3.26413,-1.41402,0.095655,2.9535,-1.2925,0.04012,2.5891,-1.15447,0.000596,2.18148,-1.00362,-0.028717,1.74114,-0.843624,-0.053616,1.2786,-0.678151,-0.079899,0.804384,-0.510878,-0.113364,0.328996,-0.345483,-0.15981,-0.137041,-0.185638,-0.225034,-0.58321,-0.03502,-0.314835,-0.998995,0.102697,-0.43501,-1.37388,-1.09265,0.400644,3.64908,-1.07727,0.587558,3.63887,-1.07674,0.262868,3.56305,-1.03291,0.167449,3.39146,-0.964491,0.107602,3.14496,-0.874837,0.076545,2.83425,-0.767294,0.067496,2.46999,-0.645208,0.07367,2.06287,-0.511928,0.088286,1.62355,-0.3708,0.104559,1.16272,-0.225171,0.115708,0.691047,-0.07839,0.114949,0.219211,0.066197,0.095498,-0.242112,0.205243,0.050575,-0.682247,0.3354,-0.026606,-1.09052,0.453321,-0.142826,-1.45625,-0.502634,0.166007,3.52607,-0.487373,0.314055,3.51634,-0.490677,0.071294,3.43931,-0.454455,0.022127,3.26686,-0.396918,0.010716,3.01956,-0.32102,0.029271,2.70824,-0.229711,0.070002,2.34371,-0.125943,0.125119,1.93681,-0.012668,0.186833,1.49837,0.107163,0.247354,1.0392,0.230598,0.298892,0.570138,0.354686,0.333657,0.102006,0.476474,0.34386,-0.354369,0.593011,0.321711,-0.788161,0.701346,0.25942,-1.18854,0.798527,0.149197,-1.54469,0.094843,-0.105001,3.40042,0.110398,0.001796,3.39241,0.102113,-0.15435,3.3119,0.129706,-0.155039,3.13781,0.175119,-0.115859,2.8891,0.235848,-0.0456,2.57673,0.309391,0.04695,2.21167,0.393246,0.152999,1.80486,0.484908,0.263759,1.36728,0.581876,0.370439,0.909867,0.681645,0.46425,0.443594,0.781714,0.536402,-0.020585,0.879579,0.578105,-0.471711,0.972737,0.580568,-0.898826,1.05869,0.535004,-1.29097,1.13492,0.432621,-1.63719,0.686225,-0.407333,3.27322,0.702291,-0.34333,3.26824,0.688397,-0.409996,3.18192,0.706792,-0.361075,3.0054,0.739393,-0.270324,2.75475,0.784185,-0.147497,2.44101,0.839153,-0.002348,2.07526,0.902278,0.155368,1.66855,0.971548,0.315897,1.23195,1.04495,0.469485,0.776531,1.12045,0.606377,0.31335,1.19606,0.71682,-0.146528,1.26974,0.791059,-0.592037,1.33949,0.81934,-1.01211,1.40329,0.791907,-1.39569,1.45912,0.699008,-1.73171,1.25795,-0.735937,3.14553,1.27455,-0.715435,3.14498,1.25495,-0.691575,3.0504,1.26402,-0.593004,2.87074,1.28368,-0.450878,2.61768,1.31241,-0.275852,2.30235,1.34871,-0.078581,1.93588,1.39108,0.130281,1.52941,1.438,0.34008,1.09407,1.48798,0.540161,0.641007,1.53951,0.719871,0.181342,1.59109,0.868552,-0.273787,1.6412,0.975553,-0.713245,1.68834,1.03022,-1.1259,1.73102,1.02189,-1.50061,1.76772,0.939922,-1.82625,1.79647,-1.08577,3.01843,1.81343,-1.10863,3.02376,1.78853,-0.995017,2.91843,1.78862,-0.847849,2.73492,1.79575,-0.655722,2.47906,1.80895,-0.430097,2.16201,1.82721,-0.182437,1.79493,1.84957,0.075797,1.38898,1.87502,0.333143,0.955321,1.9026,0.578139,0.50511,1.9313,0.799325,0.049506,1.96016,0.985237,-0.400328,1.98817,1.12441,-0.833234,2.01436,1.2054,-1.23805,2.03775,1.21672,-1.60362,2.05733,1.14692,-1.91878,2.28822,-1.45177,2.89301,2.30517,-1.51703,2.90574,2.27592,-1.31625,2.78706,2.2678,-1.12264,2.59904,2.26339,-0.883055,2.34007,2.26221,-0.609663,2.02129,2.26379,-0.314606,1.65382,2.26766,-0.01003,1.24881,2.27336,0.291918,0.817372,2.2804,0.579088,0.370653,2.28832,0.839336,-0.080221,2.29664,1.06051,-0.524117,2.3049,1.23047,-0.949904,2.31262,1.33707,-1.34645,2.31934,1.36815,-1.70262,2.32457,1.31158,-2.00728,2.71964,-1.8289,2.77033,2.73601,-1.93474,2.79207,2.7039,-1.65122,2.65736,2.68879,-1.41438,2.46419,2.67436,-1.13108,2.20187,2.66062,-0.81398,1.88144,2.64759,-0.475774,1.51394,2.63529,-0.12914,1.11041,2.62375,0.213237,0.681905,2.61299,0.538678,0.239451,2.60304,0.834499,-0.205904,2.5939,1.08802,-0.643119,2.58561,1.28656,-1.06115,2.57819,1.41743,-1.44896,2.57166,1.46795,-1.7955,2.56604,1.42544,-2.08973,3.07718,-2.2121,2.65149,3.09221,-2.35588,2.6839,3.05921,-1.99584,2.53039,3.03881,-1.72012,2.33148,3.01644,-1.39799,2.06564,2.99259,-1.04248,1.74375,2.96774,-0.666631,1.37669,2.94237,-0.283478,0.975348,2.91696,0.093938,0.550596,2.89199,0.45258,0.113318,2.86795,0.779413,-0.325608,2.8453,1.0614,-0.755299,2.82454,1.28549,-1.16488,2.80613,1.43867,-1.54346,2.79058,1.50788,-1.88017,2.77835,1.48009,-2.16412,3.34726,-2.59634,2.53755,3.36002,-2.77455,2.58237,3.32865,-2.34605,2.40721,3.30507,-2.03687,2.20199,3.27741,-1.68199,1.93254,3.24655,-1.29459,1.60949,3.2134,-0.887864,1.24348,3.17883,-0.474988,0.845142,3.14374,-0.06915,0.425126,3.10901,0.316464,-0.005932,3.07553,0.668669,-0.437395,3.0442,0.97428,-0.858623,3.01591,1.22011,-1.25898,2.99153,1.39298,-1.62782,2.97197,1.47969,-1.95451,2.9581,1.46707,-2.22841];
	
	this.geometry = new THREE.Geometry();
	
	for(var i = 0; i < vertices.length - 3; i++) {
		
		var vec = new THREE.Vector3(
			
			
		)
		
	}
	
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