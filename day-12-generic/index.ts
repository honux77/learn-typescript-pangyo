interface LengthType {
    length: number;
}

function printSize<T extends LengthType> (items: T): number {
    console.log(items.length);
    return items.length;
}

printSize<number[]>([1, 2, 3, 4, 5]);

interface Human {
    name: string;
    age: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]; // Inferred type is T[K]
}
