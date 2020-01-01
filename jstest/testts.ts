const obj = {
    propObj: {
        foo: () => {
            console.log(1)
        }
    }
};

let foo1 = obj?.propObj?.foo;
foo1 && foo1();

obj.propObj.foo = null;
let foo2 = obj?.propObj?.foo ?? (() => {
    console.log(2)
});
foo2();


let num = 0;
let a = num || 1;
console.log(a);

let b = num ?? 1;
console.log(b);
