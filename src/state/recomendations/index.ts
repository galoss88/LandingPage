import { create } from "zustand";
export interface Recomendation {
  title: string;
  imageUrl: string;
  price: string;
}

export type Recomendations = {
  recomendationsLunch: Recomendation[];
  breakfast: Recomendation[];
  desserts: Recomendation[];
  drinks: Recomendation[];
};

export const useRecomendations = create<Recomendations>()(() => ({
  recomendationsLunch: [
    {
      title: "Nombres",
      imageUrl: "/lunch1.png",
      price: "$34",
    },
    {
      title: "Nombres",
      imageUrl: "/lunch2.png",
      price: "$66",
    },
    {
      title: "Nombres",
      imageUrl: "/lunch3.png",
      price: "$25",
    },
    // Agrega más habitaciones según sea necesario
  ],
  breakfast: [
    {
      title: "Nombres1",
      imageUrl: "/breakfast1.png",
      price: "$45",
    },
    {
      title: "Nombres2",
      imageUrl: "/breakfast2.png",
      price: "$15",
    },
    {
      title: "Nombres3",
      imageUrl: "/breakfast3.png",
      price: "$74",
    },
    {
      title: "Nombres4",
      imageUrl: "/breakfast1.png",
      price: "$45",
    },
    {
      title: "Nombres5",
      imageUrl: "/breakfast2.png",
      price: "$15",
    },
    {
      title: "Nombres6",
      imageUrl: "/breakfast3.png",
      price: "$900",
    },
    // Agrega más habitaciones según sea necesario
  ],
  desserts: [
    {
      title: "Nombres",
      imageUrl: "/postre1.png",
      price: "$45",
    },
    {
      title: "Nombres",
      imageUrl: "/postre2.png",
      price: "$15",
    },
    {
      title: "Nombres",
      imageUrl: "/postre3.png",
      price: "$74",
    },
    // Agrega más habitaciones según sea necesario
  ],
  drinks: [
    {
      title: "Nombres",
      imageUrl: "/drinks1.png",
      price: "$45",
    },
    {
      title: "Nombres",
      imageUrl: "/drinks2.png",
      price: "$15",
    },
    {
      title: "Nombres",
      imageUrl: "/drinks3.png",
      price: "$74",
    },
    // Agrega más habitaciones según sea necesario
  ],
}));
