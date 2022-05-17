class User {
  signIn(name: string, email: string) {}

  signOut() {}

  logOut() {}
}

class Owner extends User {
  constructor() {
    super();
  }
}

class Admin extends Owner {
  constructor() {
    super();
  }
}

class Product {
  private name: string;
  private description: string;
  private price: number;

  constructor(name: string, description: string, price: number) {}

  buy() {}
}
