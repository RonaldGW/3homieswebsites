import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';
  route="";
  chengeLink(route:string){
    if(route=="Home"){

    }
    else if(route="pricing"){

    }
  }
}
