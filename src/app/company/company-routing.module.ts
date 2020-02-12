import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";

const routes: Routes = [
  {
    path: "company",
    component: CompanyListComponent
  },
  {
    path: "company/:id",
    component: CompanyEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
