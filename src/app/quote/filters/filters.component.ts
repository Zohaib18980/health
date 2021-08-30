import { Component, OnInit } from '@angular/core';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { Options } from 'ng5-slider';

import {
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [NgbAccordionConfig] 
})
export class FiltersComponent implements OnInit {
  value: number = 3357;
  highValue: number = 23438;
  options: Options = {
    floor: 3357,
    ceil: 23438
  };
  suminsured = [
    { id: 1, sum: '3 lakhs - 5 lakhs' },
    { id: 2, sum: '5 lakhs - 8 lakhs' },
    { id: 3, sum: '8 lakhs - 10 lakhs' }
  ];
  filterForm: FormGroup;

  constructor(config: NgbAccordionConfig) { 
    this.filterForm = new FormGroup({
      SumInsured: new FormControl(),
    });
  }

  ngOnInit(): void {
  }
  
}
