function printSize(items) {
    console.log(items.length);
    return items.length;
}
printSize([1, 2, 3, 4, 5]);
function getProperty(obj, key) {
    return obj[key]; // Inferred type is T[K]
}
