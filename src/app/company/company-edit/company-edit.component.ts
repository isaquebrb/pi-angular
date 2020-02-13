import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  editCompanyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.editCompanyForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      document: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', Validators.email]
    });
  }

  onReset(){

  }

  onCancel(){

  }

}
