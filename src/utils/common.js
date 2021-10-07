export const generateRoomList = (rooms = [], uid = "") => {
  const myRooms = [];
  const otherRooms = [];

  rooms.forEach((room) => {
    if (room.members.includes(uid)) myRooms.push(room);
    else otherRooms.push(room);
  });

  return { myRooms, otherRooms };
};
