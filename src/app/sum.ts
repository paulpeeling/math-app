export class Sum {
    first: number;
    second: number;  
    constructor(operation:string) {
      this.first = Math.round(Math.random()*999);
      this.second = Math.round(Math.random()*999);
      if (this.first < this.second)
      {
          if (operation == "-")
          {
              var tmp = this.first;
              this.first = this.second;
              this.second = tmp;
          }
      }
    }
  }