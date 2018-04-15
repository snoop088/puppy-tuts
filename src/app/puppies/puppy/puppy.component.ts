import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
import { Puppy } from '../interfaces/puppy';

@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.css']
})
export class PuppyComponent implements OnInit {

  @Input() puppy: Puppy;
  @ContentChild(TemplateRef) puppyTemplate: TemplateRef<Puppy>
  constructor() { }

  ngOnInit() {
  }

}
