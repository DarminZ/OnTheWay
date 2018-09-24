var readTime = 2000; // 设置每页阅读时间 ms
var readTimeOut = readTime + 2000; // 设置timeout时 还要加上 上次翻页时的动画时间（与turnjs的option设置中要对应）
var showImageTime = 2000;
var showImageTimeOut = showImageTime + 3000; //3000是book飞出的动画时间
var dsjTimeout = 1000;

/**
 * 按数组顺序依次执行下一个对象中的函数,间隔时间在每一个对象中定义，第一个函数立刻执行
 * @param funcInfoArray /[{option:function, timeout:number/}, ...]
 */
function runOneByOne(funcInfoArray) {
    if (funcInfoArray.length === 0 || typeof funcInfoArray[0].option !== 'function'){
        console.error("wrong params", arguments);
    } else if (funcInfoArray.length === 1){
        funcInfoArray[0].option();
    } else {
        if (typeof funcInfoArray[0].timeout !== 'number') {
            funcInfoArray[0].timeout = readTimeOut;
        }
        funcInfoArray[0].option();
        setTimeout(function () {
            runOneByOne(funcInfoArray.slice(1));
        }, funcInfoArray[0].timeout);
    }
}

/**
 * 按数组顺序依次间隔固定timeout执行下一个函数，第一个函数立刻执行
 * @param timeout
 * @param funcArray
 */
function runOneByOneWithFixedTimeout(timeout, funcArray) {
    if (typeof timeout !== 'number' || funcArray.length === 0 || typeof funcArray[0] !== 'function'){
        console.error("wrong params", arguments);
    } else {
        var funcInfoArray = funcArray.map(function (option) {
            return {
                option: option,
                timeout: timeout
            }
        });
        runOneByOne(funcInfoArray);
    }
}

function runf1Thenf2(f1, timeout, f2) {
    if (typeof f1 !== 'function' || typeof f2 !== 'function' || typeof timeout !== 'number'){
        console.error("wrong params");
        return;
    }
    f1();
    setTimeout(function () {
        f2();
    },timeout);
}

$('.btn-play').click(function (ev) {
    runf1Thenf2(function () {
        $('.btn-play').css({opacity: '0'}).attr("disabled", "disabled");
    }, 300, stdBookPlay);
});

//播放动画
function stdBookPlay() {
    runOneByOne([
        {
            option: turnToFirstPage,
            timeout: 2000
        },{
            option: turnToNextPage,
            timeout: readTimeOut
        },{
            option: turnToNextPage,
            timeout: readTimeOut
        },{
            option: turnToNextPage,
            timeout: readTimeOut
        },{
            option: showWjlc,
            timeout: showImageTimeOut
        },{
            option: showBzhmk,
            timeout: showImageTimeOut*5
        },{
            option: showDsj,
            timeout: showImageTimeOut*3
        },{
            option: showBzhtx,
            timeout: showImageTimeOut*5
        },{
            option: playMedia,
            timeout: showImageTimeOut*9
        },{
            option: hideImages,
            timeout: readTimeOut
        },{
            option: turnToNextPage,
            timeout: readTimeOut
        },{
            option: turnToNextPage,
            timeout: readTimeOut
        }
    ])
}
function turnToNextPage() {
    $('.std-docs').turn("next");
}

function turnToFirstPage() {
    $('.std-docs').turn("page", 1);
}

/*function showLdps() {
    runf1Thenf2(function () {
        $('.std-docs').addClass("zoom-out");
        $('.image-show').css({visibility: "visible", background: "#fff"});
        $('.img-ldps').addClass("start");
        $('.image-title').text("领导批示").fadeIn();
    },showImageTime, function () {
        $('.img-ldps').addClass("move");
        $('.img-dzb').addClass("start");
    })
}*/
function showWjlc() {
    runf1Thenf2(function () {
        $('.std-docs').addClass("zoom-out");
        $('.image-show').css({visibility: "visible", background: "#fff"});
        // $('.image-title').fadeOut();
        // $('.img-ldps').removeClass("start");
        // $('.img-dzb').removeClass("start");
    },1000, function () {
        $('.image-title').text("统一思想、顶层设计、分步制定、紧抓落实、严格考评").fadeIn();
        $('.img-wjlc').fadeIn();
    })
}
function showBzhmk() {
    runOneByOne(
        [
            {
                option: function() {
                    $('.image-title').fadeOut();
                    $('.img-wjlc').fadeOut();
                    $('.img-bzhmk').css({opacity: '1'});
                    },
                timeout: showImageTimeOut
            },{
                option:function() {
                    $('.img-bzhmk-wj1').addClass('start');
                    $('.img-bzhmk-wj2').addClass('start');
                    $('.img-bzhmk-wj3').addClass('start');
                    },
                timeout: showImageTimeOut
            },{
                option:function() {
                    $('.img-bzhmk-wj1').removeClass('start');
                    $('.img-bzhmk-wj2').removeClass('start');
                    $('.img-bzhmk-wj3').removeClass('start');
                    $('.img-bzhmk-wj4').addClass('start');
                    $('.img-bzhmk-wj5').addClass('start');
                    },
                timeout: showImageTimeOut
            },{
                option:function() {
                    $('.img-bzhmk-wj4').removeClass('start');
                    $('.img-bzhmk-wj5').removeClass('start');
                    $('.img-bzhmk-wj6').addClass('start');
                    $('.img-bzhmk-wj7').addClass('start');
                    },
                timeout: showImageTimeOut
            },{
                option:function() {
                    $('.img-bzhmk-wj6').removeClass('start');
                    $('.img-bzhmk-wj7').removeClass('start');
                    $('.img-bzhmk-wj8').addClass('start');
                    }
            }
        ]
    );
}

function showDsj() {
    runOneByOne(
        [
            {
                option: function() {$('.img-bzhmk-wj8').removeClass('start');$('.img-bzhmk').css({opacity: '0'});},
                timeout: dsjTimeout
            },{
                option:function() {$('.img-dsj1').fadeIn();},
                timeout: dsjTimeout
            },{
                option:function() {$('.img-dsj2').fadeIn();},
                timeout: dsjTimeout
            },{
                option:function() {$('.img-dsj3').fadeIn();},
                timeout: dsjTimeout
            },{
                option:function() {$('.img-dsj4').fadeIn();$('.img-dsj5').fadeIn();},
                timeout: 4000
            },{
                option:function() {$('.img-dsj-part1').addClass('move');$('.img-dsj-part2').addClass('start');},
                timeout: dsjTimeout
            },{
                option:function() {$('.img-dsj6').fadeIn();},
                timeout: dsjTimeout
            },{
                option:function() {$('.img-dsj7').fadeIn();}
            }
        ]
    );
}
function showBzhtx() {
    $('.img-dsj').fadeOut();
   runOneByOne(
        [
            {
                option:function() {$('.img-bzhtx-bg').fadeIn();$('.img-bzhtx-bg2').fadeIn();$('.img-bzhtx-logo').fadeIn();},
                timeout: showImageTime
            },{
                option:function() {$('.img-bzhtx1').addClass('start');},
                timeout: showImageTime
            },{
                option:function() {$('.img-bzhtx1').removeClass('start');$('.img-bzhtx2').addClass('start');},
                timeout: showImageTime
            },{
                option:function() {$('.img-bzhtx2').removeClass('start');$('.img-bzhtx3').addClass('start');},
                timeout: showImageTime
            },{
                option:function() {$('.img-bzhtx3').removeClass('start');$('.img-bzhtx4').addClass('start');},
                timeout: showImageTime
            },{
                option:function() {$('.img-bzhtx4').removeClass('start');$('.img-bzhtx5').addClass('start');},
                timeout: showImageTime
            },{
                option:function() {$('.img-bzhtx5').removeClass('start');$('.img-bzhtx6').addClass('start');},
                timeout: showImageTime
            },{
                option:function() {$('.img-bzhtx6').removeClass('start');$('.img-bzhtx-wj1').addClass('start');},
                timeout: showImageTimeOut
            },{
                option:function() {$('.img-bzhtx-wj1').addClass('move');$('.img-bzhtx-wj2').addClass('start');},
                timeout: showImageTimeOut
            },{
                option:function() {$('.img-bzhtx-wj2').addClass('move');$('.img-bzhtx-wj3').addClass('start');},
                timeout: showImageTimeOut
            },{
                option:function() {$('.img-bzhtx-wj3').addClass('move');$('.img-bzhtx-wj4').addClass('start');}
            }
        ]
    );
}
$(window).load(function() {
    $('#slider').nivoSlider({
        pauseTime: showImageTimeOut,
        controlNav: false,
        manualAdvance: true, // 手动切换至下一张
        afterLoad: function () {
          $('#slider').css({visibility: "hidden"});
        },
        slideshowEnd: function () {
            $('#slider').css({visibility: "hidden"});
        }
    });
});
function playMedia() {
    var PIC_MEDIA_NUM = 9;
    var funcInfoArr = [
        {
            option:function () {$(".img-bzhtx").fadeOut().removeClass("move start");$(".img-media-bg").fadeIn();},
            timeout: 2000
        },{
            option:function () {$('#slider').css({visibility: "visible"});},
            timeout: showImageTimeOut
        }
    ];
    // 添加多个切换到下一张的操作，直至最后一张
    for (var i = 0; i < PIC_MEDIA_NUM - 1; i++){
        funcInfoArr.push({
            option:function () {$(".nivo-nextNav").click()},
            timeout: showImageTimeOut
        })
    }
    runOneByOne(funcInfoArr);
}

function hideImages() {
    runf1Thenf2(function () {
        $(".img-media-bg").fadeOut();
        $('#slider').css({visibility: "hidden", background: "rgba(0,0,0,0)"});
        $('.image-show').css({visibility: "hidden"});
    }, 1000, function () {
        $('.std-docs').removeClass("zoom-out");
    });
}