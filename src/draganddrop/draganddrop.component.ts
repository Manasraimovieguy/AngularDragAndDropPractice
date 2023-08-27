import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-draganddrop',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag, CommonModule],
  templateUrl: './draganddrop.component.html',
  styleUrls: ['./draganddrop.component.css'],
})
export class DraganddropComponent implements OnInit {
  users: string[] = ['1: Manas', '2: Kazuma', '3: Alex', '4: Goro'];

  constructor() {}

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngOnInit() {}
}
