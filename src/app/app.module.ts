import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CompanyModule } from "./company/company.module";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@NgModule({
  declarations: [AppComponent, ModalDeleteComponent],
  imports: [
    BrowserModule,
    CompanyModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [ModalDeleteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
