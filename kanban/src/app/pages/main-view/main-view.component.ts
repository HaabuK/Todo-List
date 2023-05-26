import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
//import { Board } from 'src/app/models/board.model';
//import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board: board = new board('Test board', [
    new Column('Ideas', ["Suvaline mõte", "Veel üks mõte", "Uus mõte"]),
    new Column('Research', ["katse", "Alge", "Hmm"]),
    new Column('todo', ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new Column('done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'])
  ])


  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}