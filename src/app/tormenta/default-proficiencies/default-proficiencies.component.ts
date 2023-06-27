import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';


@Component({
  selector: 'default-proficiencies',
  templateUrl: './default-proficiencies.component.html',
  styleUrls: ['./default-proficiencies.component.scss']
})
export class DefaultProficienciesComponent {

  @Input('class') char_class = '';

  @Output() proficiencies_output = new EventEmitter<number>();

  @SubjectizeProps(["char_class"])
  propAB$ = new ReplaySubject(1);

  class_element: any;
  proficiencies_list: any;
  proficiencies_string = "";

}
