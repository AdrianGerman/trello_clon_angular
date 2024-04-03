import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule, Dialog } from '@angular/cdk/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo, Column } from '../../models/todo.model';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, DragDropModule, NavbarComponent, DialogModule],
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  constructor(private dialog: Dialog) {}

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'task 1',
        },
        {
          id: '2',
          title: 'task 2',
        },
        {
          id: '3',
          title: 'task 3',
        },
      ],
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'watch a new job courses',
        },
      ],
    },
    {
      title: 'Done',
      todos: [
        {
          id: '3',
          title: 'watch a new cap ane',
        },
      ],
    },
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn() {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        todo: todo,
      },
    });
    dialogRef.closed.subscribe((output) => {
      console.log(output);
    });
  }
}
