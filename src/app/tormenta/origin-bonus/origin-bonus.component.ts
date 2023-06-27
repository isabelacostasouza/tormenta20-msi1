import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

@Component({
  selector: 'origin-bonus',
  templateUrl: './origin-bonus.component.html',
  styleUrls: ['./origin-bonus.component.scss']
})
export class OriginBonusComponent {

  @Input('origin') char_origin = '';

  @Output() origin_bonus = new EventEmitter<number>();

  @SubjectizeProps(["char_origin"])
  propAB$ = new ReplaySubject(1);

  origin_items: any;

  constructor() { }
}
