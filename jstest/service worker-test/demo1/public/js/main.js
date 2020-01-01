var BASEHOST = location.hostname === 'a.c.t.com' ? 'c.t.com' : 'c.com'
document.domain = BASEHOST

function getCookie(name) {
    var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)"),
        m = document.cookie.match(r);

    return !m ? "" : m[1];
}

//简易 guid
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

var getACSRFToken = function (skey) {
    if (!skey) {
        return ''
    }
    var hash = 5381
    for (var i = 0, len = skey.length; i < len; ++i) {
        hash += (hash << 5) + skey.charCodeAt(i)
    }
    return hash & 0x7fffffff
}

/**
 *  a.c.com cgi 请求代理方法
 */
window.postSend = function (url, data, opts) {
    var Promise = window.Promise || parent.Promise
    var $ = parent.$
    opts = opts || {}

    return Promise.resolve($.ajax($.extend({
        type: 'post',
        xhr: function () {
            try {
                return new window.XMLHttpRequest();
            } catch (e) {
            }
        },
        url: url,
        headers: {
            "X-SeqId": guid(),
            "X-Referer": parent.location.href,
            "X-CsrfCode": getACSRFToken(getCookie('skey') || getCookie('p_skey')),
            "x-lid": opts.lid,
            "x-life": opts.life
        },
        data: opts.isFormData ? data : JSON.stringify(data),
        dataType: 'json',
        processData: !opts.isFormData,
        contentType: opts.isFormData ? false : 'application/json; charset=utf-8'
    }, opts)))
}


//////////////////////////////////////////////
window.VERSION = "zh";


doc.domain = document.domain.indexOf('t.com') > -1 ? 'c.t.com' : 'c.com';
window.cCONSOLE_HOST = 'console.' + doc.domain;
window.cCDN_HOST = 'ccache.t-c.com';
if (doc.domain == 'c.t.com') {
    window.cMAIN_HOST = 'c.t.com';
    window.cb_HOST = 'b.c.t.com';
    window.cBASE_HOST = 'a.c.t.com';
    window.cACCOUNT_HOST = 'account.c.t.com';
} else {
    window.cMAIN_HOST = 'www.c.com';
    window.cb_HOST = 'b.c.com';
    window.cBASE_HOST = 'a.c.com';
    window.cACCOUNT_HOST = 'account.c.com';
}

var basePath = '//' + cCDN_HOST + '/c/app/cc/dest/';
var max_age = 31536000;

//language begin
;(function () {

    var key, result;
    var map = {'en': 'en/', 'ko': 'ko/', 'jp': '/jp'};
    var cleanUrl = false;

    if (result = /lang(?:uage)?=(\w+)/.exec(window.location.search)) {
        key = result[1];
        cleanUrl = true; // 如果从 url 上带有 language 参数, 则应该清除这个参数

        var cn_en_tag;

        if (key === 'en') {
            cn_en_tag = 1;
        } else if (key === 'zh') {
            cn_en_tag = 0;
        }

        // 当query有language，且==en时，设tag为1；==zh时设0，其他不管，过期时间半年 from ericji
        if (typeof cn_en_tag !== 'undefined') {
            document.cookie = 'cn_en_tag=' + cn_en_tag + '; expires=' + new Date(Date.now() + 6 * 30 * 24 * 60 * 60 * 1000).toUTCString() + ' ;domain=' + document.domain + '; path=/';
        }
    } else if (result = /(?:^|\s)language=(\w+)(?:;|$)/.exec(document.cookie)) {
        key = result[1];
    } else {
        key = 'zh';
    }

    if (map[key]) {
        basePath = '//' + cCDN_HOST + '/c/app/cc/build/' + key + '/';
        VERSION = key;
        max_age = 86400;
        // document.write('<link href="//' + cdnHost + '/open_proj/proj_c_v2/mc_2014/css/international-nav.css?max_age=31536000" rel="stylesheet" />');
    }

    var bodyLangCls = {
        'zh': '',
        'en': 'international',
        'ko': 'c-lang-ko',
        'jp': 'c-lang-jp'
    }
    document.body.className = bodyLangCls[key];

    document.cookie = 'language=' + window.VERSION + '; expires=' + new Date(2153717523864).toUTCString() + ' ;domain=' + document.domain + '; path=/';

    if (window.LOGIN_INFO && window.LOGIN_INFO.area === 2) {
        document.cookie = 'intl_language=' + window.VERSION + '; expires=' + new Date(2153717523864).toUTCString() + ' ;domain=' + document.domain + '; path=/';
    }

    if (cleanUrl) {
        location.search = location.search.replace(/&?lang(uage)?=\w+/, '');
    }

})();

//language end

var loader = {
    load: function (url, cb) {
        var urlArr = [];
        if (typeof (url) == 'string') {
            urlArr.push(url);
        } else {
            urlArr = url;
        }
        var len = urlArr.length,
            failUrl = [],
            callback = function (url) {
                return function (error) {
                    if (error) {
                        failUrl.push(url);
                    }
                    if (!--len) {
                        cb && cb(failUrl.length ? new Error('资源加载失败：\n' + failUrl.join('\n')) : null);
                    }
                }
            };
        for (var i = 0, url; url = urlArr[i]; i++) {
            this._load(url, callback(url));
        }
    },
    _load: function (url, cb) {
        var oldIe = /msie [\w.]+/.test(navigator.userAgent.toLowerCase());
        if (oldIe && VERSION === "zh") {
            this._iframeLoad(url, cb);
        } else {
            this._scriptLoad(url, cb);
        }
    },
    _scriptLoad: function (url, cb, retryTimes) {
        retryTimes = retryTimes || 0;
        var el = doc.createElement('script');
        var scriptVersion = '20180329';
        url = /^(https?:)?\/\//i.test(url) ? url : basePath + url + '?max_age=' + max_age + '&ver=' + scriptVersion;
        el.setAttribute('type', 'text/javascript');
        el.setAttribute('src', url);
        el.setAttribute('async', true);
        // 只有 im.q.com 和 img.c.com 两个域名支持跨域脚本协议
        if (_cosdp.test(url)) {
            el.setAttribute('crossorigin', 'anonymous');
        }
        el.onerror = function (error) {
            if (retryTimes === 0) {
                ++retryTimes;
                setTimeout(function () {
                    loader._scriptLoad(url, cb, retryTimes);
                }, 500);
                console.warn('Retrying (classic): %s', url);
            } else if (retryTimes === 1) {
                ++retryTimes;
                setTimeout(function () {
                    retryViaXhr('js', url, function (result) {
                        result.retry = retryTimes;
                        cb(result.success ? null : result);
                    });
                }, 1000);
                console.warn('Retrying (xhr): %s', url);
            } else {
                cb({retry: retryTimes});
            }
            el.onerror = el.onload = el.onreadystatechange = null;
        };
        el.onload = el.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                if (storeMode && seajs.modules) {
                    var modules = seajs.modules,
                        jsStr = '';
                    for (var key in modules) {
                        jsStr += 'define("' + key + '",' + modules[key] + ');';
                    }
                    try {
                        clearLocal(url);
                        localStorage[url] = jsStr;
                    } catch (e) {
                        console.log(e)
                    }

                    seajs.modules = {};
                }
                cb(null);
                el.onerror = el.onload = el.onreadystatechange = null;
            }
        };
        doc.getElementsByTagName("head")[0].appendChild(el);
    },
    _iframeLoad: function (url, cb) {
        var iframe = doc.createElement('iframe');
        iframe.style.display = "none";
        iframe.src = 'javascript:void(function(){document.open();' +
            'document.domain = "' + doc.domain + '";document.close();}());';
        url = /^(https?:)?\/\//i.test(url) ? url : basePath + url + '?max_age=' + max_age;
        iframe.callback = function (jsStr) {
            if (!jsStr) {
                cb(new Error('js load failed'));
                return;
            }
            try {
                eval(jsStr);
                if (storeMode) {
                    try {
                        clearLocal(url);
                        localStorage[url] = jsStr;
                    } catch (e) {
                    }
                }
                cb(null);
            } catch (err) {
                cb(err);
            }
            setTimeout(function () {
                doc.body.removeChild(iframe);
                iframe = null;
            }, 1000)

        };
        var iframeLoad = function () {
            var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            var iframeHtm = [
                '<html><head><meta charset="utf-8"></head><body onload="callback()">',
                '<script type="text/javascript">',
                'var jsStr = "", cb = false;',
                'var define = function (id, factory) {',
                'if (typeof(factory) == "function") {',
                'var factoryStr = factory.toString();',
                'jsStr += "define(\'" + id + "\'," + factoryStr + ");"',
                '}',
                '};<\/script>',
                '<script type="text/javascript" src="' + url + '"><\/script>',
                '<script type="text/javascript">',
                'function callback() {',
                'if (jsStr && !cb) {',
                'frameElement.callback(jsStr);',
                'cb = true;',
                '}',
                '};',
                'callback();',
                '<\/script>',
                '</body></html>'].join('');
            iframeDoc.open();
            iframeDoc.domain = doc.domain;
            iframeDoc.write(iframeHtm);
            iframeDoc.close();
        };

        if (iframe.attachEvent) {
            var _ifmLoad = function () {
                iframe.detachEvent('onload', _ifmLoad);
                iframeLoad();
            };
            iframe.attachEvent('onload', _ifmLoad);
        } else {
            iframe.onload = function () {
                iframe.onload = null;
                iframeLoad();
            }
        }
        ;

        doc.body.appendChild(iframe);
    }
};

function clearLocal(url) {
    for (var key in win.localStorage) {
        var urlName = url.substring(0, url.indexOf('.'));
        var stoName = key.substring(0, key.indexOf('.'));
        if (urlName == stoName) {
            localStorage.removeItem(key);
            break;
        }
        ;
    }
}

function configSeajs() {
    seajs.config({
        base: basePath,
        alias: {
            //nmc
            '$': 'jquery-1.10.2',
            'util': 'nmc/lib/util',
            'net': 'nmc/lib/net',
            'twofactor': 'nmc/lib/twofactor',
            'event': 'nmc/lib/event',
            'reporter': 'nmc/lib/reporter',
            'nmcConfig': 'nmc/config/config',
            'dataManager': 'nmc/main/datamanager',
            'pageManager': 'nmc/main/pagemanager',
            'model': 'nmc/main/model',
            'router': 'nmc/main/router',
            'entry': 'nmc/main/entry',
            'dialog': 'nmc/widget/dialog',
            'tips': 'nmc/widget/tips',
            'dropdown': 'nmc/widget/dropdown',
            'selector': 'nmc/widget/selector',
            'insight': 'nmc/insight/insight',
            'sdk': 'nmc/sdk/sdk',

            //external
            'daoConfig': 'models/dao_config',
            'manager': 'models/manager',
            'constants': 'config/constants',
            'appUtil': 'lib/appUtil',
            'panel': 'widget/panel/panel',
            'monitorchart': 'widget/monitorchart/monitorchart',
            'datepicker': 'lib/datepicker',
            'Highcharts': 'lib/highcharts',
            'lengthlimiter': 'lib/lengthlimiter',
            'ZeroClipboard': 'lib/ZeroClipboard',
            'Raphael': 'lib/raphael',
            'sidebar': 'widget/menu/sidebar/sidebar',
            'login': 'widget/login/login',
            'regionSelector': 'widget/region/region',
            'projectsSelector': 'widget/projects/projects',
            'pagination': 'widget/pagination/pagination',
            'search': 'widget/search/search',
            'validator': 'widget/validator/validator',
            'contextmenu': 'widget/contextmenu/contextmenu',
            'startup': 'main/startup'
        }
    });
}

var coreJs = ['vendor.js', 'platform.js', 'common.js', 'deprecated.js', 'cvm.js', 'cvm2.js'];


var coreConfigMap = {
    zh: "https://ccache.t-c.com/c/app/cc/config/config_cvm.954947372209436a27dce9e9902e860e.js?obsolate",
    en: "https://ccache.t-c.com/c/app/cc/config/config_cvm.519c6c1d6e483e6961555d8720309d21.js?obsolate",
    jp: "https://ccache.t-c.com/c/app/cc/config/config_cvm.80a7accbd2421e201f1dc8d6d71f2bc1.js?obsolate",
    ko: "https://ccache.t-c.com/c/app/cc/config/config_cvm.d550feb000443bb11e8c63454c72557b.js?obsolate"
};
