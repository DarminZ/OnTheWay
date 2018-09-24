 Vue.component('z-askpaper-panel', {
    name: 'z-askpaper-panel',
    components:{
      'z-input':{
          template:'<div class="option" @click="select"><input :type="nativeType" v-model="model.value" :value="opt">{{opt}}</div>',
          props:{
              type: String,
              model: {},
              opt: String,
          },
          computed:{
              nativeType: function () {
                  if(this.type === 'single') return 'radio';
                  if(this.type === 'multiple') return 'checkbox';
              }
          },
          methods:{
              select: function () {
                  if(this.type === 'single') {
                      this.model.value = this.opt;
                  }
                  if(this.type === 'multiple') {
                      var inx = this.model.value.indexOf(this.opt);
                      if (inx>-1){
                        this.model.value.splice(inx,1);
                      }else {
                        this.model.value.push(this.opt);
                      }
                  }
              }
          }
      }
    },
    template: '\
        <div class="z-askpaper-panel">\
            <div class="head">{{title}}</div>\
            <div class="main">\
                <p class="question">{{question}}</p> \
                <div class="answer" v-if="type === typeEnum.single ">\
                    <z-input v-for="(opt,i) in answer.options" :key="i" :type="type" :model="answer" :opt="opt"></z-input>\
                </div>\
                <div class="answer" v-if="type === typeEnum.multiple">\
                    <z-input v-for="(opt,i) in answer.options" :key="i" :type="type" :model="answer" :opt="opt"></z-input>\
                </div>\
                <div class="answer" v-if="type === typeEnum.text">\
                    <textarea class="text-answer" rows="5" maxlength="100" v-model="answer.value" placeholder="---"></textarea>\
                </div>\
             </div>\
            <div class="footer">\
            <slot>\
                <z-button type="primary" :disabled="!answer.value" @click="submit">确定</z-button>\
                <z-button :disabled="!answer.value" @click="reset">重置</z-button>\
            </slot>\
            </div>\
        </div>',
    props:{
        question: {
            type: String,
            default: 'question'
        },
        type: {
            type: String,
            default: 'single'
        },
        answer: {
            type: Object,
            default: {
                key: '',    //答案名
                value: '',//答案值 可能是[单选：String | 多选：Array | 文本：Text]
                options: [] //答案选项，文本题时不需要此项
            }
        },
        title: {
            type:String,
            default: ''
        }
    },
    data: function () {
        return {
            typeEnum: {
                single: 'single',
                multiple: 'multiple',
                text: 'text'
            }
        }
    },
    methods: {
        reset: function () {
            switch (this.type){
                case this.typeEnum.single: this.answer.value = '';break;
                case this.typeEnum.multiple: this.answer.value = [];break;
                case this.typeEnum.text: this.answer.value = '';break;
            }
        },
        submit: function (evt) {
            this.$emit('submit',evt);
        }
    },
     created: function () {
         console.log('child created')
     },
     beforeMount: function () {
         console.log('child beforeMount')
     },
     mounted: function () {
         console.log('child mounted');
         var parent = this.$parent;
         console.log(parent.active++);
     }
});
