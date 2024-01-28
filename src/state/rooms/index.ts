import { create } from "zustand";
export interface Room {
  title: string;
  imageUrl: string;
  description: string;
}

export type Store = {
  rooms: Room[];
};

export const useRooms = create<Store>()(() => ({
  rooms: [
    {
      title: "Habitación 1",
      imageUrl: "/room.png",
      description: "Descripción de la habitación 1.",
    },
    {
      title: "Habitación 2",
      imageUrl: "/room.png",
      description: "Descripción de la habitación 2.",
    },
    // Agrega más habitaciones según sea necesario
  ],
}));
