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

    const cHeight = canvas.height ?? 0;
    const cWidth = canvas.width ?? 0;

    // for(let i = 0; i < cHeight; i += 2) {
    //   for(let j = 0; j < cWidth; j += 2) {
    //     canvas.add(new fabric.Rect({
    //       left: j,
    //       top: i,
    //       fill: 'black',
    //       width: 2,
    //       height: 2
    //     }))
    //   }
    // }
    

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


    const gateHeight = 100
    const gateWidth = 60        
    const gateArc = 40

    const andGate = new fabric.Group([
      new fabric.Path(`M 0 0 L 0 ${gateHeight} L ${gateWidth} ${gateHeight} A ${gateArc} ${gateArc} 0 0 0 ${gateWidth} 0 Z `, {
      stroke: '#000000',
      strokeWidth: 5,
      fill: '',
      originX: 'left',
      originY: 'top'
      }),
      new fabric.Rect({
        width: 10,
        height: 10,
        left: -10,
        top: 20,
        fill: "red",
        originX: "left",
        originY: "top",
      }),
      new fabric.Rect({
        width: 10,
        height: 10,
        left: -10,
        top: 70,
        fill: "red",
        originX: "left",
        originY: "top",
      }),
      new fabric.Circle({
        radius: 5,
        left: gateWidth + gateArc + 5,
        top: 45,
        fill: "red",
        originX: "left",
        originY: "top",
      })
    ],
    {
      left: 300,
      top: 300,
      flipX: false,
      centeredRotation: true,
      lockScalingX: true,
      lockScalingY: true,
    }
    ).setControlsVisibility({mtr: false, mt: false, mb: false, ml: false, mr: false, bl: false, br: false, tl: false, tr: false})


    const notGate = new fabric.Group([
      new fabric.Triangle({
        width: 40,
        height: 60,
        fill: '',
        stroke: 'black',
        strokeWidth: 5,
        originX: 'left',
        originY: 'top',
        angle: 90
      }),
      new fabric.Rect({
        width: 10,
        height: 10,
        left: -70,
        top: 20,
        fill: "red",
        originX: "left",
        originY: "top",
      }),
      new fabric.Circle({
        radius: 5,
        left: 0,
        top: 15,
        strokeWidth: 5,
        fill: "",
        stroke: "black",
        originX: "left",
        originY: "top",})
    ], {
      top: 50, 
      left: 50,
    }
    )
    

    canvas.add(andGate);
    canvas.add(notGate);
    canvas.add(g);
    
  }


}
