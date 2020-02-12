import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CompanyRoutingModule } from "./company-routing.module";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";

@NgModule({
  declarations: [CompanyListComponent, CompanyEditComponent],
  imports: [CommonModule, CompanyRoutingModule]
})
export class CompanyModule {}
