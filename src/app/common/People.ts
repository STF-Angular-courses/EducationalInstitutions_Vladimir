import { Schedule } from './Schedule';
import { Role } from './Role';

export interface People {
  id: number;
  name: string;
  age: number;
  role: Role;
  lesson: Array<Schedule>;
}
