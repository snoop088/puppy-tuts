import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.css']
})
export class PriorityComponent implements OnInit {

  @Input() max = 10;
  @Input() min = 1;
  @Input() value = 1;
  @Output() changeValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public increment(e) {
    e.stopPropagation();
    if (this.value < this.max) {
      this.value++;
      this.changeValue.emit(this.value);
    }
  }
  public decrement(e) {
    e.stopPropagation();
    if (this.value > this.min) {
      this.value--;
      this.changeValue.emit(this.value);
    }
  }
}
