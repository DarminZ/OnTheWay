var _a, _b, _c, _d, _e;
var obj = {
    propObj: {
        foo: function () {
            console.log(1);
        }
    }
};
var foo1 = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.propObj) === null || _b === void 0 ? void 0 : _b.foo;
foo1 && foo1();
obj.propObj.foo = null;
var foo2 = (_e = (_d = (_c = obj) === null || _c === void 0 ? void 0 : _c.propObj) === null || _d === void 0 ? void 0 : _d.foo, (_e !== null && _e !== void 0 ? _e : (function () {
    console.log(2);
})));
foo2();
var num = 0;
var a = num || 1;
console.log(a);
var b = (num !== null && num !== void 0 ? num : 1);
console.log(b);
