const obj = {
    propObj: {
        foo: () => {
            console.log(1)
        }
    }
};

let foo1 = obj?.propObj?.foo?.();

obj.propObj.foo = null;
let foo2 = obj?.propObj?.foo ?? (() => {
    console.log(2)
});
foo2();


let num = 0;
let num2 = 0;
let a = num || 1;
console.log(a);

let b = num ?? num2 ?? 1;
console.log(b);

let arr = [{a:{b:1}}];
let arr1a = arr?.[0]?.a?.b;
console.log('q', arr1a);
