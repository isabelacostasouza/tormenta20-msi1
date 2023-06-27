import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SubjectizeProps } from 'subjectize';
import { ReplaySubject } from 'rxjs';

import pericias from '../../../assets/tormenta/pericias.json';
import database from '../../../assets/tormenta/database.json';

@Component({
  selector: 'expertise-table',
  templateUrl: './expertise-table.component.html',
  styleUrls: ['./expertise-table.component.scss']
})
export class ExpertiseTableComponent implements OnInit {

  @Input('level') char_level = 0;
  @Input('half_level') half_level = 0;
  @Input('total_expertises') total_expertises = 0;
  @Input('class') char_class = '';
  @Input('origin') char_origin = '';
  @Input('modifiers') modifiers = [0];
  @Input('expertises_import') expertises_import: any;

  @Output() expertises_table_output = new EventEmitter<Object>();

  @SubjectizeProps(["char_class", "char_origin", "expertises_import"])
  propAB$ = new ReplaySubject(1);

  used_expertises = 0;

  expertises = pericias["pericias"];
  classes = database["classe"];
  origins = database["origem"];

  train = Array.from({length: 30}, (_) => 0);
  others = Array.from({length: 30}, (_) => 0);
  expertises_indexes = Array.from({length: 30}, (_, i) => i);

  class_element: any;
  origin_element: any;

  constructor() { }

  ngOnInit(): void {
    if(screen.width < 1200) {
      document.getElementsByTagName("table")[0].classList.add("larger-table");
    }

    setTimeout(() => {
      this.set_elements();
    }, 5);
  }

  set_elements() {
    this.class_element = this.classes.reduce((next: any, element: any) => {
      if (element["nome"] == this.char_class)
        return element;
      return next;
    });
  
    this.origin_element = this.origins.reduce((next: any, element: any) => {
      if (element["nome"] == this.char_origin)
        return element;
      return next;
    });
  }

}