let obj = {
    name: "Amal",
    age: 25,
    city: "Cairo",
    [Symbol.iterator]() {
        let step = 0;
        let prop = Object.keys(this);
        return {
            next() {
                return {
                    value: `["${prop[step]}" , ${obj[prop[step]]}]`,
                    done: step++ === prop.length
                }
            }
        }

    }
}
for (let props of obj) {
    console.log(props);
}