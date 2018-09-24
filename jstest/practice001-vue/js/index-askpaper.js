var app = new Vue({
    el: '#app',
    data: {
        paperInfos: [
            {
                type: 'single',
                question: '请问您的性别是',
                answer: {
                    key: 'sex',
                    value: '',
                    options:['男','女','保密']
                }
            },
            {
                type: 'multiple',
                question: '请选择你的兴趣爱好',
                answer: {
                    key: 'interest',
                    value: [],
                    options:['看书','游泳','跑步','看电影','听歌']
                }
            },
            {
                type: 'text',
                question: '请选择你的兴趣爱好',
                answer: {
                    key: 'introduce',
                    value: ''
                }
            }
        ]
    },
    methods: {
        submit: function () {
            var result = [];
            this.paperInfos.forEach(function (paperItem) {
                result.push(paperItem.answer.key,paperItem.answer.value);
            });
            alert('submit:'+result);
        }
    }
})