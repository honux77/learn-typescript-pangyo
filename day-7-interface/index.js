var user1 = {
    age: 25,
    name: 'Minsoo'
};
function printUser(user) {
    console.log(user.age);
    console.log(user.name);
}
var addYear = function (user, year) {
    user.age += year;
    return user;
};
var names = ['apple', 'banana', 'carrot'];
var files = {
    node: /\.js$/,
    dotnet: /\.cs$/
};
function study(u) {
    console.log(u.name + " is studying " + u.language + ".");
}
study({ age: 20, name: 'JJ', language: 'ts' });
