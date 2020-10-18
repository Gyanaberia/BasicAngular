import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
//import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from '../server.service';
import { Formdata } from '../formdata';
//import { Formdata } from '../formdata';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public formdata: Formdata;
  successMsg="";
  errorMsg="";

  constructor(private fb:FormBuilder,private sservice:ServerService) {
    this.sservice.getForm().subscribe(data => this.formdata = {
                                                              name:data.name,
                                                              feedback:data.feedback,
                                                              email:data.email,
                                                              comment:data.comment}); 
 }  
  ngOnInit(){
  }

  public reviewForm=this.fb.group({//why is this required
    name:[''],
    email:[''],
    feedback:[''],
    comment:[''],
  })

  loadApi(){    
    this.reviewForm.patchValue({
    name: this.formdata.name,
    email:this.formdata.email,
    feedback:this.formdata.feedback,
    comment:this.formdata.comment})
  }

  SubmitData(){
    this.errorMsg="",
    this.successMsg="",
    this.sservice.submitForm(this.reviewForm.value).subscribe(
      response=>{this.successMsg="Your form has been successfully submitted!",
                  console.log(response)},
      error=>this.errorMsg="From submission Unsucessfull!!"+error.statusText,
    )
    // console.log(this.errorMsg);
    // console.log(this.successMsg);
    if (this.errorMsg==="") {
     this.reviewForm.patchValue({
      name: '',
      email:'',
      feedback:'',
      comment:''
    })}
  }

}
