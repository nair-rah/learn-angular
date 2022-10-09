import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // By adding @Input() to this property, we expose this property to any component that uses app-server-element. 
  // Flow is to pass data from other component into this component.
  // We can also give alias to the input element within the parentheses 
  // eg : @Input("serverElement") element: {type: string, name: string, content:string};
  @Input() element: {type: string, name: string, content:string};

  constructor() { }

  ngOnInit(): void {
  }

}
