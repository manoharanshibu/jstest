const generator_fn = function *(){
    let current = 0, next = 1;
    while(true)
    {
       [next, current] = [next+current, next];
       yield current;
    }
  }


let fibanocci = generator_fn();
let fibanocci_arr = [];
let evenSum = 0;;


let fib = (n, sum = 0, i = 0, output = '') => {
    while(i++ < n)
    {
            const fib = fibanocci.next().value;
            sum += fib % 2 === 0 ? fib : 0;
            fibanocci_arr.push(fib);
    }
    output += "Fibanocci Series : " + fibanocci_arr;
    output += "\n\nFirst " + n + " even numbers sum : " + sum;

    evenSum = sum;

    return output;
}

export let getFibanocciArr = (num) => {
    return fibanocci_arr[num]
}

export let getEvenSum = () => {
    return evenSum;
}

export default fib;