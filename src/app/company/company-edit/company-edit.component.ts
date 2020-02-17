import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormArray, FormBuilder } from "@angular/forms";
import { CompanyService } from "src/app/services/company.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Company } from "src/app/models/company";
import { Location } from "@angular/common";

@Component({
  selector: "app-company-edit",
  templateUrl: "./company-edit.component.html",
  styleUrls: ["./company-edit.component.scss"]
})
export class CompanyEditComponent implements OnInit {
  companyForm: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private service: CompanyService,
    private actRouter: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
    this.id = this.actRouter.snapshot.params.id;
    this.getCompany(this.id);
  }

  createForm() {
    this.companyForm = this.fb.group({
      id: [""],
      name: ["", [Validators.required, Validators.maxLength(50)]],
      document: ["", [Validators.required, Validators.maxLength(15)]],
      email: ["", Validators.email],
      address: this.fb.group({
        cep: [""],
        street: [""],
        city: [""],
        state: [""],
        number: [""]
      }),
      phones: this.fb.array([])
    });
  }

  getCompany(id: number) {
    this.service.getById(id).subscribe(data => {
      console.log("GetCompany")
      console.log(data)
      this.createPhoneControlArray(data);
      this.setValueForm(data);
    });
  }

  createPhoneControlArray(data: Company) {
    let phoneArray = this.getPhones();

    data.phones.forEach(() => {
      phoneArray.push(
        this.fb.group({
          id: [""],
          phone: [""],
          username: [""]
        })
      );
    });
  }

  setValueForm(company: Company) {
    this.companyForm.patchValue({
      id: company.id,
      name: company.name,
      document: company.document,
      email: company.email,
      address: company.address,
      phones: company.phones
    });
  }

  addPhone(): void {
    let phoneArray = this.getPhones();
    phoneArray.push(
      this.fb.group({
        phone: "",
        username: ""
      })
    );
  }

  getPhones(): FormArray {
    return this.companyForm.get("phones") as FormArray;
  }

  submitForm() {
    if (!this.companyForm.valid) {
      return;
    }

    this.service
      .update(this.companyForm.value)
      .subscribe(() => this.router.navigate(["/companies"]));
  }

  //todo move onreset from edit component to new component
  onReset() {
    this.companyForm.reset;
  }

  onCancel() {
    this.location.back();
  }
}
