import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import database from '../../../assets/tormenta/database.json';
import magic_database from '../../../assets/tormenta/magics.json';

@Component({
  selector: 'select-magic',
  templateUrl: './select-magic.component.html',
  styleUrls: ['./select-magic.component.scss']
})
export class SelectMagicComponent {

  @Input('level') char_level: any;
  @Input('class') char_class = '';
  @Input('chosen_magic_import') chosen_magic_import: any;
  @Input('chosen_magic_schools_import') chosen_magic_schools_import: any;

  @Output() chosen_magic_output = new EventEmitter<Object>();
  @Output() chosen_magic_school_output = new EventEmitter<Object>();

  @SubjectizeProps(["char_class", "char_level", "chosen_magic_import", "chosen_magic_schools_import"])
  propAB$ = new ReplaySubject(1);

  classes = database["classe"];
  magics = magic_database["magias"];
  magic_schools_1 = magic_database["escolas"].splice(0, 4);
  magic_schools_2 = magic_database["escolas"].splice(-4);
  magic_schools = this.magic_schools_1.concat(this.magic_schools_2);

  number_chosen_magic_schools = 0;
  number_chosen_magics = [0, 0, 0, 0, 0];
  magics_list: any;
  chosen_magic_schools = [""];
  chosen_magics: any;

  magic_type: any;
  class_element: any;
  elements_description: any;
  available_magics = [0, 0, 0, 0, 0];

  all_schools_chosen = true;
  has_magic_school = false;

}
