import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import database from '../../../assets/tormenta/database.json';

@Component({
  selector: 'select-power',
  templateUrl: './select-power.component.html',
  styleUrls: ['./select-power.component.scss']
})
export class SelectPowerComponent {

  @Input('level') char_level = 0;
  @Input('class') char_class = '';
  @Input('attributes_modifiers') char_modifiers = [0];
  @Input('chosen_powers_import') chosen_powers_import = [0];

  @Output() chosen_powers_output = new EventEmitter<Object>();

  @SubjectizeProps(["char_level", "char_class", "char_modifiers", "chosen_powers_import"])
  propAB$ = new ReplaySubject(1);

  constructor() { }

  number_chosen_powers = 0;
  has_chosen_powers = false;
  powers_list = [""];
  powers_description = [""];
  chosen_powers = [""];
  chosen_powers_description = [""];

  classes = database["classe"];
  powers = database["poder"];

  class_element: any;
  elements_description: any;
  available_powers: any;

}
