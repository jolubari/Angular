import { Component } from '@angular/core';

@Component({
  selector: 'app-not-page-found',
  templateUrl: './not-page-found.component.html',
  styleUrls: [ './not-page-found.component.css' ]
})
export class NotPageFoundComponent {

  public year = new Date().getFullYear();

}
