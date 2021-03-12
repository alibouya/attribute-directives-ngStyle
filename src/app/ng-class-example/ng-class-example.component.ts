import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent implements OnInit {
  isAllume= false;
  constructor() { }

  ngOnInit(): void {
  }
showHide(){
  this.isAllume=! this.isAllume;
}
}
