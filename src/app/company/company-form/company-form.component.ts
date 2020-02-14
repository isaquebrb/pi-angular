import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {

  companyForm: FormGroup;
  submitted: boolean = false;
  id: number;
  formTitle: string = 'New Company';

  constructor(private formBuilder: FormBuilder,
    private service: CompanyService,
    private actRouter: ActivatedRoute,
    private location: Location,
    private router: Router) {
    }

  ngOnInit() {
    this.createForm();

    this.id = this.actRouter.snapshot.params.id;
    if(this.id != null){
      this.formTitle = `Edit Company ${this.id}`
      this.getCompany(this.id);
    }

  }

  createForm(){
    this.companyForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      document: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', Validators.email],
      address: this.formBuilder.group({
        cep: [''],
        street: [''],
        city: [''],
        state: [''],
        number: ['']
      })
    });
  }

  getCompany(id: number){
    this.service.getById(id).subscribe(data =>{
      this.setValueForm(data);
      console.log(data);
    });
  }

  setValueForm(company: Company){
    this.companyForm.patchValue({
      name: company.name,
      document: company.document,
      email: company.email,
      address: company.address,
    });
  }

  submitForm(){
    this.submitted = true;

    if(!this.companyForm.valid){
      return;
    }

    if(this.id == null){
      console.log(this.companyForm.value)
      this.service.save(this.companyForm.value).subscribe(
        () => {
          this.router.navigate(['/companies'])
        }
      )

    }else{

    }
  }

  onReset(){
    this.companyForm.reset;
    this.submitted = false;
  }

  onCancel(){
    this.location.back();
  }

}
