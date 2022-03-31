(function () {
    var _a, _b, _c, _d, _e, _f, _g;
    var obj = {
        propObj: {
            foo: function () {
                console.log(1);
            }
        }
    };
    var foo1 = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.propObj) === null || _a === void 0 ? void 0 : _a.foo) === null || _b === void 0 ? void 0 : _b.call(_a);
    obj.propObj.foo = null;
    var foo2 = (_d = (_c = obj === null || obj === void 0 ? void 0 : obj.propObj) === null || _c === void 0 ? void 0 : _c.foo) !== null && _d !== void 0 ? _d : (function () {
        console.log(2);
    });
    foo2();
    var num = 0;
    var num2 = 0;
    var a = num || 1;
    console.log(a);
    var b = (_e = num !== null && num !== void 0 ? num : num2) !== null && _e !== void 0 ? _e : 1;
    console.log(b);
    var arr = [{ a: { b: 1 } }];
    var arr1a = (_g = (_f = arr === null || arr === void 0 ? void 0 : arr[0]) === null || _f === void 0 ? void 0 : _f.a) === null || _g === void 0 ? void 0 : _g.b;
    console.log("q", arr1a);
    var NumberEnum;
    (function (NumberEnum) {
        NumberEnum[NumberEnum["aa"] = 0] = "aa";
        NumberEnum[NumberEnum["bb"] = 1] = "bb";
        NumberEnum[NumberEnum["cc"] = 2] = "cc";
    })(NumberEnum || (NumberEnum = {}));
    var TestEnum;
    (function (TestEnum) {
        TestEnum["aaa"] = "aaa1";
        TestEnum["bbb"] = "bbb2";
        TestEnum["ccc"] = "ccc3";
    })(TestEnum || (TestEnum = {}));
    var test = function (test) {
        return test;
    };
    test(TestEnum.aaa);
    var testC = function (test) {
        return test;
    };
    testC("aaa1" /* aaa */);
    var test2 = function (test) {
        return test + "";
    };
    test2("aaa");
})();
