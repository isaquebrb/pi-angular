import { Component, OnInit } from "@angular/core";
import { CompanyService } from "src/app/services/company.service";
import { Company } from "src/app/models/company";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalDeleteComponent } from "src/app/modal-delete/modal-delete.component";
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"]
})
export class CompanyListComponent implements OnInit {
  companies: Company[];

  constructor(
    private service: CompanyService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  deleteCompany(company: Company) {
    const modal = this.modalService.open(ModalDeleteComponent);
    modal.componentInstance.modalTitle = `Delete Company ${company.id}`;
    modal.componentInstance.modalContent = `Are you sure you want to delete '${company.name}'?`;
    modal.result.then(
      () => {
        //on close
        this.service.delete(company.id).subscribe(
          () => {
            this.getAll();
          },
          error => {
            this.modalService.dismissAll
            const errorModal = this.modalService.open(ModalComponent);
            errorModal.componentInstance.modalTitle = `Error`;
            errorModal.componentInstance.modalContent = `An error occurred while deleting company '${company.name}'.`;
          }
        );
      },
      () => {
        //on dismiss do nothing
      }
    );
  }
}
