export const stockImages = {
  workspaceDesk: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a modern web design workspace with a laptop and desk setup."
  },
  restaurantAtmosphere: {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a polished restaurant interior."
  },
  collaboration: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a small team collaborating around a laptop."
  },
  storefront: {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a modern small-business storefront or retail environment."
  },
  founderPortrait: {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    alt: "Placeholder professional portrait that can later be replaced with the founder's real photo."
  }
} as const;

export type StockImageKey = keyof typeof stockImages;
