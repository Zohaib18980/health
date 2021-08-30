import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  FilterName: any;
  isShown: boolean = true ;
  tagShow=-1;
  constructor() { }

  ngOnInit(): void {
    this.FilterName = [
      { id: 1, filtername: "Base Plan" },
      { id: 2, filtername: "OPD" },
      { id: 3, filtername: "Reinstatement Benefit"} ]
  }
  tagsReset() {
    this.isShown = false; 
  }
  tagClose(id) {
    this.tagShow = id;
  }
}
