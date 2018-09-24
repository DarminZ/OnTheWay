"use strict";

Promise.resolve().then(function () {
    console.log(1);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(2);
            resolve();
        }, 1000);
        setTimeout(function () {
            console.log(2);
            resolve();
        }, 1000);
    });
}).then(function () {
    console.log(3);
});
