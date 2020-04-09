var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
var obj = {
    propObj: {
        foo: function () {
            console.log(1);
        }
    }
};
var foo1 = (_d = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.propObj) === null || _b === void 0 ? void 0 : (_c = _b).foo) === null || _d === void 0 ? void 0 : _d.call(_c);
obj.propObj.foo = null;
var foo2 = (_g = (_f = (_e = obj) === null || _e === void 0 ? void 0 : _e.propObj) === null || _f === void 0 ? void 0 : _f.foo, (_g !== null && _g !== void 0 ? _g : (function () {
    console.log(2);
})));
foo2();
var num = 0;
var num2 = 0;
var a = num || 1;
console.log(a);
var b = (_h = (num !== null && num !== void 0 ? num : num2), (_h !== null && _h !== void 0 ? _h : 1));
console.log(b);
var arr = [{ a: { b: 1 } }];
var arr1a = (_l = (_k = (_j = arr) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.a) === null || _l === void 0 ? void 0 : _l.b;
console.log('q', arr1a);
