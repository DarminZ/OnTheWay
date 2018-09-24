Vue.component('z-option', {
    name: 'z-option',
    inject: ['select'],
    template: '\
        <li class="z-option"\
            :class="{\'selected\': selected}"\
            @click="handelSelect">\
             <slot>\
             <span>{{currentLabel}}</span>\
             </slot>\
        </li>',
    props: {
        value: {
            required: true
        },
        label: [String, Number]
    },
    computed: {
        currentLabel: function () {
            return this.label || this.value
        },
        selected: function () {
            return this.value === this.select.value
        }
    },
    methods: {
        handelSelect: function () {
            ZEmitter.prototype.dispatch.call(this, 'z-select', 'setter', {value:this.value, label:this.label})
        }
    }
})