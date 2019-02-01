import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fib(index: number): number {
    console.log('Index is : ' + index);

    if (index <= 1) {
      return index;
    }

    var a = 0, b = 1, c = 1;

    while(index > 0) {
      c = a + b;
      a = b;
      b = c;
      index--;
    }
    console.log("Result is : " + c)
    return c;
  }

  rec(index: number): void{
    console.log("Index is : " + index);
    console.log("Result is : " + this.recFib(index));
  }

  recFib(index: number): number {
    if (index <= 1) return 1;
    
    return(this.recFib(index-1) + this.recFib(index-2));
  }

}
