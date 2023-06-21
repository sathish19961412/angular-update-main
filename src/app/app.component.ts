import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  movies:Movie[]=[
    {
      title:"horror",
      direactor:"sathish",
      cast:"Sk Production"
    },
    {
      title:"Comdey",
      direactor:"mathew",
      cast:"ks Production"
    },
    {
      title:"Romance",
      direactor:"sathish",
      cast:"pk Production"
    },
  ]
}


class Movie{
  title!:string;
  direactor!:string;
  cast!:string;
}
