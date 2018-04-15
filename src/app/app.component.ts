import { Component } from '@angular/core';
import { Puppy } from './puppies/interfaces/puppy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public puppies: Puppy[];
  constructor() {
    this.puppies = [
      { name: 'Dino', age: 1, photo: '...', breed: 'Rottweiler' },
      { name: 'Max', age: 2, photo: '...', breed: 'Beagle' },
      { name: 'Lucy', age: 1, photo: '...', breed: 'Golden Retriever' }
    ];
  }
}
