import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Form App';
  productname='abcd';
  qty=1;
  productprice=300;
  total = 0

  people = ["Jasmeet","Amit","Suresh","Shilpi"]


 calculate = function(productprice, qty){
  this.total = productprice * qty;
}
calculate2 = function(){
  this.total = this.productprice * this.qty;
}

}
