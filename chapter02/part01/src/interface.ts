(function () {
  interface my {
    name: string;
    say(): void;
  }
  class myClass implements my {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    say(): void {
      throw new Error("Method not implemented.");
    }
    
  }
})();