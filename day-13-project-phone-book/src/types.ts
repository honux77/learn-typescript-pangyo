 interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
  }
  
  enum PhoneType {
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
  }
  
  interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
  }

  export {PhoneType, Contact}