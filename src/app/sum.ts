export class Sum {

    first: number;
    second: number;  
    
    constructor(operation:string,upper:number,lower:number) {
    
      this.first = Math.round(Math.random()*(Math.pow(10,upper)-1));
      this.second = Math.round(Math.random()*(Math.pow(10,lower)-1));
    
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