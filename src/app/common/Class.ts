import { People } from "./People";

export interface Room {
  id: number;
  userList: Array<People>;
  classRoomId: number;
}
