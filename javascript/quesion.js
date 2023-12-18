{
  const a = 1;
  var b = 1;

  function fn() {
    let c = 1;
    return () => {
      console.log("Exercise #1 = ", a + b + c);
      b = b + 1;
    };
  }

  const subFn = fn();
  subFn();
  subFn();

  /***
   * What is printed on console?
   * Indicate where the closure is created and where it is executed.
   *
   * Solution
   * Exercise #1 =  ?
   * Exercise #1 =  ?
   *
   */
}

/*####################################################################################################################*/
{
  const a = false && "";
  const b = "" && 0;
  const c = 0 && undefined;
  const d = 0 && 0.0;
  const e = 0.0 && null;
  const f = 0.0 == "0";

  console.log("Exercise #2 ", { a, b, c, d, e, f });
  /*
   * Which one of these values is truty?
   *
   * Solution
   * Exercise #2 =   {
   *  a: ?,
   *  b: ?,
   *  c: ?,
   *  d: ?,
   *  e: ?,
   *  f: ?
   * }
   * */
}

/*####################################################################################################################*/
{
  class SampleClass {
    constructor() {
      this.value = 5 + a;
    }

    static getInstance() {
      if (!SampleClass.instance) {
        SampleClass.instance = new SampleClass();
      }
      return SampleClass.instance;
    }
  }

  let a = 5;
  const result1 = SampleClass.getInstance().value;
  a = 10;
  const result2 = SampleClass.getInstance().value;
  console.log("Exercise #3 ", { result1, result2 });
  /*
   * Is result 1 the same as result 2?
   * SampleClass is the implementation of a pattern, which one?
   *
   * Solution
   * Exercise #3  {
   *  result1: ?,
   *  result2: ?
   * }
   *
   */
}
/*####################################################################################################################*/
{
  const array = [0, 1, 2, 3, 4];
  const sum = (...arguments) => {
    let z = 0;
    for (let i in arguments) {
      z = z + arguments[i];
    }
    return z;
  };
  const result1 = array.reduce((a1, b1) => a1 + b1);
  const result2 = array.filter((a2, b1, c2) => a2 % 2 === 0);
  const result3 = array.find((a3, b2, c3) => a3 % 2 === 0);
  const result4 = array.map((a4, b3, c4) => a4 + sum(...c4));
  const result5 = array.forEach((a5, b5, c5) => a5 + sum(...c5));

  console.log("Exercise #4 ", { result1, result2, result3, result4, result5 });

  /*
   * What are the parameters a1,a2.....c5?
   * What are the results?
   * How would you write the sum function in ECMA6?
   *
   * Solution
   * Exercise #4  {
   *    result1: ?,
   *    result2: ?,
   *    result3: ?,
   *    result4: ?,
   *    result5: ?
   * }
   */
}
{
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function ex6() {
    const a = 10;
    sleep(10);
    const b = 10;
  }
  ex6.then();

  /*
   * Will the constant b be equal to 10 before or after sleep?
   *
   * Solution
   * Exercise #4  {
   *    result1: ?,
   *    result2: ?,
   *    result3: ?,
   *    result4: ?,
   *    result5: ?
   * }
   */
}
