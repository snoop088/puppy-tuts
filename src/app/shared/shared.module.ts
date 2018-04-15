import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityComponent } from './priority/priority.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PriorityComponent],
  exports: [
    PriorityComponent
  ]
})
export class SharedModule { }
