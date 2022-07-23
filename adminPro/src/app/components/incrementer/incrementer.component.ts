import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit{

  @Input() progress = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output() changeValue: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  public changeValueProgress( value: number ): number {
    if ( this.progress >= 100 && value >= 0 ) {
      this.changeValue.emit(100);
      return this.progress = 100;
    }

    if ( this.progress <= 0 && value < 0 ) {
      this.changeValue.emit(0);
      return this.progress = 0;
    }
    this.changeValue.emit(this.progress + value);
    return this.progress = this.progress + value;
  }

  public onChangeInputValue(value: number) {
    if ( value >= 100 ) {
      this.progress = 100;
    } else if(value <= 0) {
      this.progress = 0;
    } else {
      this.progress = value;
    }
    this.changeValue.emit( this.progress );
  }

}
