function Compile(el,vm) {
    this.$vm = vm;
    this.$el = el.nodeType === 1 ? el : document.querySelector(el);
    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el);
        this.init();
        this.$el.appendChild(this.$fragment);
    }
}
Compile.prototype = {
    init: function () {
        this.comileElement(this.$fragment);
    },
    node2Fragment: function (el) {
      var fragment = document.createDocumentFragment();
      while (child = el.firstChild) {
          fragment.appendChild(child);
      }
      return fragment;
    },
    comileElement: function (el) {
        var childNodes = el.childNodes, me = this;
        [].slice.call(childNodes).forEach(function (node) {
           var text = node.textContent;
           var reg = /\{\{(.*)\}\}/;
           if (node.nodeType === 1){
               me.compile(node);
           } else if (node.nodeType === 3 && reg.test(text)){
               me.compileText(node, RegExp.$1);
           }
           if (node.childNodes && node.childNodes.length){
               me.comileElement(node);
           }
        });
    },
    compile: function (node) {
        var nodeAttrs = node.attributes, me = this;
        [].slice.call(nodeAttrs).forEach(function (attr) {
            var attrName = attr.name;
            if (attrName.indexOf('z-model') === 0){
                var dataName = attr.value;
                me.bind(node, me.$vm, dataName, 'model');
                node.addEventListener('input', function(e) {
                    me.$vm[dataName] = e.target.value;
                    console.log(me.$vm);
                });
                node.removeAttribute('z-model');
            }
        });
    },
    compileText: function (node, dataName) {
        this.bind(node, this.$vm, dataName, 'text');
    },
    bind: function (node, vm, dataName, dir) {
        if (dir === 'model'){
            node.value = typeof vm[dataName] === 'undefined' ? '' : vm[dataName];
        } else if (dir === 'text'){
            node.textContent = typeof vm[dataName] === 'undefined' ? '' : vm[dataName];
        }
        new Watcher(vm, dataName, function (value, oldValue) {
           if (dir === 'model'){
               console.log('update node z-model');
               node.value = typeof value === 'undefined' ? '' : value;
           } else if (dir === 'text'){
               console.log('update node text');
               node.textContent = typeof value === 'undefined' ? '' : value;
           }
        });
    }
}