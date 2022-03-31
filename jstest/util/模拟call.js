Function.prototype.mycall = function(context) {
	context = context || window;
	context.$tempF = this;
	
	var params = Array.prototype.slice.apply(arguments, [1]);
	var paramsStr = '';
	params.forEach(function(param, index) {
		paramsStr += 'params['+ index + '],';
	});
	paramsStr = paramsStr.substring(0, paramsStr.lastIndexOf(','));

	var result;
	console.log('result = context.$tempF(' + paramsStr + ');');
	eval('result = context.$tempF(' + paramsStr + ');');
	delete context.$tempF;
	
	return result;
}