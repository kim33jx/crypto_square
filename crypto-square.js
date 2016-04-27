//create our Crypto class
// it takes a string as an arguments
var Crypto = function(text){
	this.message = text
	
};
Crypto.prototype.normalizePlaintext = function() {
	return this.message.replace(/[\W]/g,'').toLowerCase() ;
};

Crypto.prototype.size = function() {
		var length = this.normalizePlaintext().length;
		return Math.ceil(Math.sqrt(length));
	};
Crypto.prototype.plaintextSegments = function() {
	//return an array of string that represent
	// our plain text segments
	var segments = [],
		npt = this.normalizePlaintext();
		size = this.size();

		for (var i = 0; i < npt.length; i += size) {
			segments.push(npt.substr(i,size));
		}
		return segments;
	};

Crypto.prototype.ciphertext = function() {
	var code = "";
		segs = this.plaintextSegments;
	//loop through the columns
	for (var i = 0; i < size; i += 1) {
		//loop through the rows
		for (var j = 0; j < segs.length; j += 1){
			code += segs[j].charAt(i);
		}
	}
	//return a string representing a coded message
	return code;
};
module.exports = Crypto