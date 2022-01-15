"use strict";
(function () {
    class Dog {
        constructor(name, age) {
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
