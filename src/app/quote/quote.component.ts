import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private modalService: NgbModal,config: NgbModalConfig) { }

  ngOnInit(): void {
  }
  openModal(content) { 
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true}).result.then((result) => {

      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {});
  }

  openModallg(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true}).result.then((result) => {

    }, (reason) => {});
  }
}
