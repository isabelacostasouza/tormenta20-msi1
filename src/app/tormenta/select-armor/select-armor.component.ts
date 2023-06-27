import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import armors_database from '../../../assets/tormenta/armor.json';

@Component({
  selector: 'select-armor',
  templateUrl: './select-armor.component.html',
  styleUrls: ['./select-armor.component.scss']
})
export class SelectArmorComponent {

  @Input('proeficiencies') char_proeficiencies: any;
  @Input('chosen_armor_import') chosen_armor_import: any;

  @Output() chosen_armor_output = new EventEmitter<Object>();

  @SubjectizeProps(["char_proeficiencies", "chosen_armor_import"])
  propAB$ = new ReplaySubject(1);

  armor_list = armors_database["armaduras"];

  protection:any[] = []; chosen_armor:any[] = [];
  light_armor:any[] = []; heavy_armor:any[] = [];

  constructor() { }

}
