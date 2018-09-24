Vue.component('z-select', {
    name: 'z-select',
    directives: {
        clickoutside: {
            bind: function (el, binding) {
                function documentHandler(e) {
                    if (el.contains(e.target)){
                        return false;
                    }
                    if (binding.expression){
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = documentHandler;
                document.addEventListener('click', documentHandler);
            },
            unbind: function (el) {
                document.removeEventListener('click', el.__vueClickOutside__);
                delete el.__vueClickOutside__;
            }
        }
    },
    provide:function() {
        return {
            'select': this
        }
    },
    template: '\
        <div class="z-select" v-clickoutside="closeOption">\
             <input class="z-select-input" \
                type="text" readonly="readonly" \
                :placeholder="placeholder" \
                :value="selectedLabel" \
                @click="showOption = !showOption">\
             <span class="z-select-switch" :class="{\'open\': showOption}">v</span>\
             <div v-if="showOption" class="z-option-panel">\
                 <slot></slot>\
             </div>\
        </div>',
    props:{
        value: {
            required: true
        },
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    data: function () {
        return{
            showOption: false,
            selectedLabel: undefined
        }
    },
    methods: {
        setter: function (val) {
            console.log(val);
            this.$emit('input',val.value);
            this.selectedLabel = val.label;
        },
        closeOption: function () {
            this.showOption = false
        }
    },
    created: function () {
        this.$on('setter', this.setter);
    }
});

