import { Person } from './Person.model';

export interface Room {
  id: number;
  userList: Array<Person>;
  classRoomId: number;
}
