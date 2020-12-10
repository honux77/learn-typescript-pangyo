function log(value) {
    if (typeof value === "string") {
        console.log("String: " + value);
        return;
    }
    console.log("Number: " + value);
}
log("hello");
log(50);
//log({value: 30}) //error
