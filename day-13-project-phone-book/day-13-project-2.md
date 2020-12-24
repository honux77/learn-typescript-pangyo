# day 13 실습 프로젝트 2

- 역시 퀴즈 1처럼 타입을 지정하는 예제이다.
- 재밌게 잘 구성되어 있었다.

```js
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

function fetchContacts(): Promise<Contact[]> {
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  contacts:Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData() {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  findContactByName(name:string):Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address:string):Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: keyof PhoneNumberDictionary):Contact[] {
    return this.contacts.filter(
      contact => contact.phones[phoneType].num === phoneNumber
    );
  }

  addContact(contact:Contact):void {
    this.contacts.push(contact);
  }

  displayListByName():string[] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress():string[] {
    return this.contacts.map(contact => contact.address);
  }
}

new AddressBook();
```