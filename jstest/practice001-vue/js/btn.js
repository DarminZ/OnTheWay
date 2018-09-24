Vue.component('z-button', {
    name: 'z-button',
    template:'\
            <button type="button" :class="btnClass" :disabled="disabled" @click="handleClick">\
            <slot>{{ name }}</slot>\
            </button>',
    props: {
        checked:{
            default: 1
        },
        name: {
            type: String,
            default: 'button'
        },
        type:{
            type: String,
            default: 'default'
        },
        disabled: Boolean
    },
    computed: {
        btnClass: function () {
            return ['z-btn', 'z-btn-'+this.type,
                {
                    'z-btn-disabled': this.disabled
                }]
        }
    },
    methods: {
        handleClick: function (evn) {
            this.$emit('click',evn);
        }
    }
});