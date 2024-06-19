import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { fabric } from 'fabric';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit, AfterViewInit {

  @ViewChild('editor') editor!: ElementRef; //Non-null assertion;

  ngOnInit() {
    console.log('EditorComponent initialized');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(event);
    console.log('Window resized');
  }


  ngAfterViewInit() {
    console.log(this.editor.nativeElement.width = window.innerWidth);
    console.log(this.editor.nativeElement.height = window.innerHeight);
    const canvas = new fabric.Canvas('editor');
    canvas.backgroundColor = '#f0f0f0';
    canvas.add(new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    }));

    //create gates using groups
    const g = new fabric.Group([

      new fabric.Rect({
        width: 100,
        height: 85,
        fill: "#ffefd5",
        originX: "center",
        originY: "center",
      }),

      new fabric.Text("sdf", {
        fontSize: 30,
        originX: "center",
        originY: "center",
      }) 

    ], {
      left: 200,
      top: 100,
      angle: 30,
      lockRotation: true,
    }).setControlsVisibility({mtr: false})

    canvas.add(g);
    
  }


}
