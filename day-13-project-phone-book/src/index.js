"use strict";
exports.__esModule = true;
var types_1 = require("./types");
function fetchContacts() {
    var contacts = [
        {
            name: "Tony",
            address: "Malibu",
            phones: {
                home: {
                    num: 11122223333
                },
                office: {
                    num: 44455556666
                }
            }
        },
        {
            name: "Banner",
            address: "New York",
            phones: {
                home: {
                    num: 77788889999
                }
            }
        },
        {
            name: "마동석",
            address: "서울시 강남구",
            phones: {
                home: {
                    num: 213423452
                },
                studio: {
                    num: 314882045
                }
            }
        },
    ];
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(contacts); }, 800);
    });
}
// main
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
        this.fetchData();
    }
    AddressBook.prototype.fetchData = function () {
        var _this = this;
        fetchContacts().then(function (response) {
            _this.contacts = response;
        });
    };
    AddressBook.prototype.findContactByName = function (name) {
        return this.contacts.filter(function (contact) { return contact.name === name; });
    };
    AddressBook.prototype.findContactByAddress = function (address) {
        return this.contacts.filter(function (contact) { return contact.address === address; });
    };
    AddressBook.prototype.findContactByPhone = function (phoneNumber, phoneType) {
        return this.contacts.filter(function (contact) { return contact.phones[phoneType].num === phoneNumber; });
    };
    AddressBook.prototype.addContact = function (contact) {
        this.contacts.push(contact);
    };
    AddressBook.prototype.displayListByName = function () {
        return this.contacts.map(function (contact) { return contact.name; });
    };
    AddressBook.prototype.displayListByAddress = function () {
        return this.contacts.map(function (contact) { return contact.address; });
    };
    return AddressBook;
}());
var book = new AddressBook();
setTimeout(function () {
    var tony = book.findContactByPhone(11122223333, types_1.PhoneType.Home);
    var app = document.querySelector("#app");
    app.innerHTML = JSON.stringify(tony);
}, 1000);
