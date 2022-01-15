(function () {
  class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    sayHello() {
      console.log("www");
      
    }
  }

  const dog = new Dog("wc", 24);
  console.log(dog);
  dog.sayHello();
})();