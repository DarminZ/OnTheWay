function Watcher(vm, dataName, callback) {
    Dep.target = this;
    this.cb = callback;
    this.vm = vm;
    this.dataName = dataName;
    this.value = this.get();
    Dep.target = null;
}
Watcher.prototype = {
    update: function () {
        this.run();
    },
    run: function () {
        var value = this.get();
        var oldValue = this.value;
        if (value !== oldValue){
            this.value = value;
            this.cb.call(this.vm, value, oldValue);
        }
    },
    get: function () {
        var value = this.vm[this.dataName];
        return value;
    }
}