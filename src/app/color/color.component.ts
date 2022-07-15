import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color = "#ffffff"

  changeColor(color:string) {
    this.color = color;
    // @ts-ignore
    document.getElementById("abc").style.backgroundColor = this.color
  }

  constructor() { }

  ngOnInit(): void {
  }

}
