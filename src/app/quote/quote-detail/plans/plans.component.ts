import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  currDiv;
  showMyContainer;
  @ViewChild('tabset') tabset: TabsetComponent;
  constructor(private modalService: NgbModal,config: NgbModalConfig) { }

  ngOnInit(): void {
  }
  

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

  openModallg(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true}).result.then((result) => {

    }, (reason) => {});
  }

  showMyContainerpop() {
    this.showMyContainer= !this.showMyContainer
  }
}
