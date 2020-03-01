import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock';

  name ="nitin shamra"

  setName(event){

    this.name = event.target.value;
    
  }
}
