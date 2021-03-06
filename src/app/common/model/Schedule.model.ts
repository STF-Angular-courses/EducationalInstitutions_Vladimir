import { TypeLesson } from '../enum/TypeLesson.enum';
import { Time } from '@angular/common';

export interface Schedule {
  id: number;
  dayOfWeek: string;
  lessonName: number;
  time: Time;
  TypeLesson: TypeLesson;
}
