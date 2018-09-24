function observer(data) {
    if (!data || typeof data !== 'object') {
        return;
    }
    Object.keys(data).forEach( function (key) {
        defineReactive(data, key, data[key])
    });
};

function defineReactive(data, key, val) {
    var dep = new Dep();
    observer(val);
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get: function () {
            Dep.target && dep.addSub(Dep.target);
            console.log('get'+val);
            return val;
        },
        set: function (newVal) {
            if (val === newVal) return
            val = newVal;
            console.log('set'+val);
            dep.notify();
        }
    })
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
}