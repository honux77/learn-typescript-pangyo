function log<T>(v: T): T {
    console.log(v);
    return v;
}

const v2 = log<string>("hello");
console.log(v2);
