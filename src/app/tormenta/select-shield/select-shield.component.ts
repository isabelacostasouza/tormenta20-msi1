import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import armors_database from '../../../assets/tormenta/armor.json';

@Component({
  selector: 'select-shield',
  templateUrl: './select-shield.component.html',
  styleUrls: ['./select-shield.component.scss']
})
export class SelectShieldComponent {

  @Input('chosen_shield_import') chosen_shield_import: any;

  @Output() chosen_shield_output = new EventEmitter<Object>();

  @SubjectizeProps(["chosen_shield_import"])
  propAB$ = new ReplaySubject(1);

  shield_list = armors_database["escudos"];

  chosen_shield:any[] = [];

}
