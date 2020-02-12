import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CompanyModule } from "./company/company.module";
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CompanyModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
