import { Schedule } from './Schedule.model';
import { Role } from '../enum/Role.enum';

export interface Person {
  id: number;
  name: string;
  age: number;
  role: Role;
  lesson: Array<Schedule>;
}
