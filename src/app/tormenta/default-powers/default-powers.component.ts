import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';


@Component({
  selector: 'default-powers',
  templateUrl: './default-powers.component.html',
  styleUrls: ['./default-powers.component.scss']
})
export class DefaultPowersComponent {

  @Input('level') char_level = 0;
  @Input('race') char_race = 0;
  @Input('class') char_class = '';
  @Input('god') char_god = '';
  @Input('origin') char_origin = '';

  @Output() default_powers = new EventEmitter<number>();

  @SubjectizeProps(["char_level", "char_race", "char_class", "char_god", "char_origin"])
  propAB$ = new ReplaySubject(1);

  given_powers: any;
  elements_description: any;

}
