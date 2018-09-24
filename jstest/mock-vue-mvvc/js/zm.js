function Zm(options) {
    this.$options = options;
    var data = this._data = this.$options.data, me = this;
    Object.keys(data).forEach(function (key) {
       me._proxy(key);
    });
    observer(data, this);
    this.$compile = new Compile(options.el || document.body, this)
}

Zm.prototype = {
    _proxy: function (key) {
        var me = this;
        Object.defineProperty(me, key, {
            enumerable: true,
            configurable: false,
            get: function proxyGetter() {
                return me._data[key];
            },
            set: function proxySetter(newVal) {
                me._data[key] = newVal;
            }
        });
    }
}