import { Component, OnInit, Input, ViewChild, AfterViewInit, PLATFORM_ID, Inject, Optional } from '@angular/core';
import { Puppy } from '../interfaces/puppy';
import { MatTableDataSource, MatSort, MatTable } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import * as _ from 'lodash';

@Component({
  selector: 'app-puppy-list',
  templateUrl: './puppy-list.component.html',
  styleUrls: ['./puppy-list.component.css']
})
export class PuppyListComponent implements OnInit, AfterViewInit {
  @Input() puppies: Puppy[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<Puppy>;
  dataSource: MatTableDataSource<Puppy>;
  columnsToDisplay = ['select', 'name', 'age', 'photo', 'breed', 'priority'];
  selection: SelectionModel<Puppy>;
  constructor(@Optional() @Inject(PLATFORM_ID) private platformId: {}) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.puppies);
    this.selection = new SelectionModel(true, []);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  delSelected() {
    this.dataSource.data = _.difference(this.dataSource.data, this.selection.selected);
    this.selection.clear();
  }
  changePriority(value, puppy) {
    puppy.priority = value;
  }
  onSubmit() {
    console.log(this.dataSource.data);
  }
}
