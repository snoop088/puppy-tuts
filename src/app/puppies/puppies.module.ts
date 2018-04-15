import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuppyListComponent } from './puppy-list/puppy-list.component';
import { SharedModule } from '../shared/shared.module';
import { PuppyComponent } from './puppy/puppy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  declarations: [PuppyListComponent, PuppyComponent],
  exports: [
    PuppyListComponent
  ]
})
export class PuppiesModule { }
