function* FibMax(end) {
    let Fib = [];
    let sum = 0;
    Fib[0] = 0;
    Fib[1] = 1;
    for (let i = 2; sum < end; i++) {
        Fib[i] = Fib[i - 1] + Fib[i - 2];
        sum = Fib[i];
    }
    for (var e of Fib) {
        if (e < end) yield e;
    }
}
let FM = FibMax(23);
console.log("***************When the max num is 23");
console.log(FM.next());
console.log(FM.next());
console.log(FM.next());
console.log(FM.next());
console.log(FM.next());
console.log(FM.next());
console.log(FM.next());
console.log(FM.next());
console.log(FM.next());
console.log(FM.next());

function* FibMaxCount(count) {
    let MaxCount = [];
    MaxCount[0] = 0;
    MaxCount[1] = 1;
    for (let i = 2; i < count; i++) {
        MaxCount[i] = MaxCount[i - 1] + MaxCount[i - 2];
    }
    for (let Mx of MaxCount) {
        yield Mx;
    }
}

let FMC = FibMaxCount(5);
console.log("***************When the max count is 5");
console.log(FMC.next());
console.log(FMC.next());
console.log(FMC.next());
console.log(FMC.next());
console.log(FMC.next());
console.log(FMC.next());