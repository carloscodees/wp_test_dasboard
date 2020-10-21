import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  @Input() controlsArray: FormArray;
  @Output() getCorrectOption = new EventEmitter;

  constructor() { }

  ngOnInit(): void {

    console.log(this.controlsArray);

  }

  changeOpt(opt) {
    this.getCorrectOption.emit(opt)

  }


}
