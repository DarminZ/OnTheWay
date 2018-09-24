function observer(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach(function (key) {
        defineReactive(data, key, data[key])
    });

};

function defineReactive(data, key, val) {
    var dep = new Dep();
    if (!Array.isArray(val)) { // 添加对非数组对象的观察
        observer(val);
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: false,
            get: function () {
                Dep.target && dep.addSub(Dep.target);
                console.log('get' + val);
                return val;
            },
            set: function (newVal) {
                if (val === newVal) return
                val = newVal;
                console.log('set' + val);
                dep.notify();
            }
        });
    }else {
        var target = val;
        var arrayProto = Array.prototype;
        var arrayMethods = Object.create(arrayProto);
        var me = this;
        ['push','pop','shift','unshift','splice','sort','reverse'].forEach(function (item) {
            Object.defineProperty(arrayMethods, item, {
                value: function mutator() {
                    var original = arrayProto[item];
                    var args = Array.prototype.slice.apply(arguments);
                    original.apply(me, args);
                    dep.notify();
                }
            });
        });
        var src = arrayMethods;
        var keys = Object.getOwnPropertyNames(arrayMethods);
        keys.forEach(function (key) {
            Object.defineProperty(target, key, {
                value: src[key],
                enumerable: true,
                writable: true,
                configurable: true

            });
        });
        val.forEach(function (item) { observer(item); })
    }
}

function Dep() {
    this.subs = [];
}

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update();
        });
    }
};

