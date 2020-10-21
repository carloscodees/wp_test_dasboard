import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-options',
  templateUrl: './new-options.component.html',
  styleUrls: ['./new-options.component.css']
})
export class NewOptionsComponent implements OnInit {

  @Input() options:Array<FormControl>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.options);
    
  }

  addOption(){
    this.options.push(new FormControl(''))
  }

  removeOption(i){
    if(this.options.length >1){
      console.log(i);
      
      this.options = this.options.filter((val,index)=>index!=i);
    }
  }

}
