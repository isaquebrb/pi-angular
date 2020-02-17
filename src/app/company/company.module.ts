import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CompanyRoutingModule } from "./company-routing.module";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompanyListComponent, CompanyEditComponent],
  imports: [CommonModule, CompanyRoutingModule, ReactiveFormsModule]
})
export class CompanyModule {}
