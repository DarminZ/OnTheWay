function deepCopy(obj) {
	if (typeof obj !== "object" || !obj) return obj;

	if (Array.isArray(obj)){
		var copyArr = [];
		obj.forEach(function(item, index) {
			copyArr[index] = deepCopy(item);
		});
		return copyArr;
	}
	
	var copyObj = {};
	for (var prop in obj) {
		copyObj[prop] = deepCopy(obj[prop]);
	}
	return copyObj;
}
