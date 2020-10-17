import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
//import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public formdata;
  constructor(private fb:FormBuilder,private fdata:ServerService) { }

  ngOnInit(){
    this.fdata.getForm().subscribe(data => this.formdata = data);
  }
  reviewForm=this.fb.group({//why is this required
    name:[''],
    email:[''],
    comment:[''],
  })
loadApi(){    
  this.reviewForm.patchValue({
  name: this.formdata.name,
  email:this.formdata.email,
  //feedback:this.formdata.feedback,
  comment:this.formdata.comment
})
}
SubmitData(){}
}
