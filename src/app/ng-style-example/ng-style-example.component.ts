import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ng-style-example',
  templateUrl: './ng-style-example.component.html',
  styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent implements OnInit {
  @Input() color ='lightblue';
  @Input() bgc= 'green';
  @Input() font ='Verdana'
  constructor() { }

  ngOnInit(): void {
  }

}
