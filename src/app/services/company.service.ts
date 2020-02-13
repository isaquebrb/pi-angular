import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Company } from "../models/company";

@Injectable({
  providedIn: "root"
})
export class CompanyService {
  url = "http://localhost:8080/companies";

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  getAll(): Observable<Company[]> {
    return this.httpClient
      .get<Company[]>(this.url)
      .pipe(retry(2), catchError(this.handleError));
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${id}`, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      //Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      //Erro ocorreu no lado do servidor
      errorMessage =
        "Código do erro: ${error.status}, " + "mensagem: ${error.message}";
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
