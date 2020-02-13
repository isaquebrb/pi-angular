import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  @Input() modalTitle;
  @Input() modalContent; 

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
