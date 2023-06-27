import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SubjectizeProps } from 'subjectize';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'base-attributes',
  templateUrl: './base-attributes.component.html',
  styleUrls: ['./base-attributes.component.scss']
})
export class BaseAttributesComponent {

  @Input('level') char_level: any;
  @Input('class') char_class = '';
  @Input('origin') char_origin = '';
  @Input('race') char_race = '';
  @Input('god') char_god = '';
  @Input('extra_attributes') extra_outputs_import: any;
  @Input('modifiers_import') modifiers_import: any;

  @SubjectizeProps(["char_class", "char_race", "char_level", "extra_outputs_import", "modifiers_import"])
  propAB$ = new ReplaySubject(1);

  @Output() total_expertises_output = new EventEmitter<number>();
  @Output() life_points_output = new EventEmitter<number>();
  @Output() mana_points_output = new EventEmitter<number>();
  @Output() attributes_modifiers_output = new EventEmitter<number[]>();
  @Output() attributes_values_output = new EventEmitter<number[]>();
  @Output() extra_output_indexes = new EventEmitter<number[]>();

  attributes_modifiers = [2, 2, 1, 1, 1, 1];  
  attributes_values = [14, 14, 13, 13, 13, 13];

  class_element: any;
  race_element: any;

  constructor() { }

}