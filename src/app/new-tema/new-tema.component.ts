import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-tema',
  templateUrl: './new-tema.component.html',
  styleUrls: ['./new-tema.component.css']
})
export class NewTemaComponent implements OnInit {

  public temaForm: FormGroup;
  public questions: FormArray;

  constructor() {

    this.questions = new FormArray([
      new FormGroup({
        question: new FormControl(''), options: new FormArray([
          new FormControl(''), new FormControl(''),
          new FormControl(''), new FormControl('')])
      }),
      new FormGroup({ question: new FormControl(''), options: new FormArray([new FormControl('')]) }),
    ])



    this.temaForm = new FormGroup({
      name: new FormControl(''),
      limitTime: new FormControl(0),
      questions: this.questions,
      correctOption: new FormControl('')
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.temaForm.value);

  }

  addQuestions() {

    this.questions.push(new FormGroup({ question: new FormControl(''), options: new FormArray([new FormControl('')]) }));

  }

  getCorrectOption(e) {
    console.log(e);
    this.temaForm.patchValue({ correctOption: e })
  }
}
