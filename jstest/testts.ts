(function () {
  const obj = {
    propObj: {
      foo: () => {
        console.log(1);
      },
    },
  };

  let foo1 = obj?.propObj?.foo?.();

  obj.propObj.foo = null;
  let foo2 =
    obj?.propObj?.foo ??
    (() => {
      console.log(2);
    });
  foo2();

  let num = 0;
  let num2 = 0;
  let a = num || 1;
  console.log(a);

  let b = num ?? num2 ?? 1;
  console.log(b);

  let arr = [{ a: { b: 1 } }];
  let arr1a = arr?.[0]?.a?.b;

  console.log("q", arr1a);

  enum NumberEnum {
    aa,
    bb,
    cc,
  }

  enum TestEnum {
    aaa = "aaa1",
    bbb = "bbb2",
    ccc = "ccc3",
  }

  const test = (test: TestEnum) => {
    return test;
  };

  test(TestEnum.aaa);

  const enum TestEnumC {
    aaa = "aaa1",
    bbb = "bbb2",
    ccc = "ccc3",
  }

  const testC = (test: TestEnumC) => {
    return test;
  };

  testC(TestEnumC.aaa);
  interface TestEnums {
    aaa: string;
    bbb: string;
    ccc: string;
  }

  const test2 = (test: keyof TestEnums) => {
    return test + "";
  };
  test2("aaa");

  interface Human {
    sex: "male" | "female" | "unkown";
    age: number;
    name: string;
    phone: number;
    alias: string;
  }

  type TypeKeys<O extends object, Type> = {
    [K in keyof O]: O[K] extends Type ? K : never;
  }[keyof O];

  type ObjectFilterTypeProps<O extends object, Type> = {
    [P in TypeKeys<O, Type>]: O[P];
  };

  type SelectStringProps = Pick<Human, TypeKeys<Human, string>>;
  type SelectStringProps2 = ObjectFilterTypeProps<Human, string>;
})();
