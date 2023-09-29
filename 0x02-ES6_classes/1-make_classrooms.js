import {ClassRoom} from './0-classroom.js';

function initializeRooms() {
    room1 = new ClassRoom(19);
    room2 = new ClassRoom(20);
    room3 = new ClassRoom(34)

    return [room1, room2, room3];
}