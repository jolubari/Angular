import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css']
})
export class ProgressComponent {
  public progressOne: number = 25;
  public progressTwo: number = 55;

  get getProgressOne() {
    return `${this.progressOne}%`
  }

  get getProgressTwo() {
    return `${this.progressTwo}%`
  }

  public changedValue(value: number) {
    this.progressOne = value;
  }

}
