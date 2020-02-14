import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyFormComponent } from "./company-form/company-form.component";

const routes: Routes = [
  {
    path: "companies",
    children: [
      {
        path: "",
        component: CompanyListComponent
      },
      {
        path: "edit/:id",
        component: CompanyFormComponent
      },
      {
        path: "new",
        component: CompanyFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}
