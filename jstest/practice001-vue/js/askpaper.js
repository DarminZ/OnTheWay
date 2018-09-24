Vue.component('z-askpaper', {
    name: 'z-askpaper',
    template: '\
        <div class="qs-card">\
             <z-askpaper-panel v-if="active <= paperInfos.length"\
                          :title="active + \' / \' + paperInfos.length"\
                          :question="active + \'、\' + paperInfos[active-1].question"\
                          :type="paperInfos[active-1].type"\
                           :answer="paperInfos[active-1].answer">\
              <z-button v-if="active !==paperInfos.length" type="primary" :disabled="!paperInfos[active-1].answer.value" @click="nextStep">下一步</z-button>\
              <z-button v-if="active ===paperInfos.length" type="primary" :disabled="!paperInfos[active-1].answer.value" @click="submit">提交</z-button>\
              <z-button v-if="active !==1 " @click="preStep">上一步</z-button>\
              <z-button :disabled="!paperInfos[active-1].answer.value" @click="reset">重置</z-button>\
          </z-askpaper-panel>\
        </div>',
    props:{
        paperInfos:{
            type: Array,
            require: true,
            validator: function (paperInfos) {
                var flag = true;
                paperInfos.forEach( function (paperItem) {
                    flag = flag && paperItem.hasOwnProperty('question');
                    flag = flag && paperItem.hasOwnProperty('type');
                    flag = flag && paperItem.hasOwnProperty('answer');
                    flag = flag && paperItem.answer.hasOwnProperty('key');
                    flag = flag && paperItem.answer.hasOwnProperty('value');
                });
                return flag;
            }
        }
    },
    data: function () {
        return{
            active: 1 // 显示哪个question
        }
    },
    methods: {
        nextStep: function () {
            this.active ++;
        },
        preStep: function () {
            this.active --;
        },
        reset: function () {
            switch (this.paperInfos[this.active-1].type) {
                case 'single': this.paperInfos[this.active-1].answer.value = '';break;
                case 'multiple': this.paperInfos[this.active-1].answer.value = [];break;
                case 'text': this.paperInfos[this.active-1].answer.value = '';break;
            }
        },
        submit: function () {
            this.$emit('submit');
        }
    },
    created: function () {
      console.log('super created')
    },
    beforeMount: function () {
        console.log('super beforeMount')
    },
    mounted: function () {
        console.log('super mounted')
    }
});