import { AfterViewInit, Component, OnInit } from '@angular/core';

import { fabric } from 'fabric';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit, AfterViewInit {

  ngOnInit() {
    console.log('EditorComponent initialized');
  }

  ngAfterViewInit() {
    const canvas = new fabric.Canvas('editor');
    canvas.add(new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    }));
  }


}
