import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  @Input() title:String;

  constructor() { }

  ngOnInit(): void {
  }

}
