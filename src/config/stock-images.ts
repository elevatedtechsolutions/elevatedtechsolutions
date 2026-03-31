export const stockImages = {
  workspaceDesk: {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a modern web design workspace with a laptop and desk setup."
  },
  generalCodeScreen: {
    src: "/images/general/pexels-bibekghosh-14553707.jpg",
    alt: "Placeholder stock image of a code screen and workspace setup."
  },
  restaurantAtmosphere: {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a polished restaurant interior."
  },
  restaurantCuisine: {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a plated restaurant dish presented in a modern dining setting."
  },
  restaurantCafeTable: {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a restaurant or cafe table setup with menus and tableware."
  },
  collaboration: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a small team collaborating around a laptop."
  },
  generalCollaboration: {
    src: "/images/general/pexels-edmond-dantes-4345107.jpg",
    alt: "Placeholder stock image of a small team collaborating around a laptop."
  },
  nonprofitWorkshop: {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a nonprofit or community team in a workshop or planning session."
  },
  nonprofitCommunity: {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a community-oriented group gathered together outdoors."
  },
  storefront: {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a modern small-business storefront or retail environment."
  },
  serviceWorkspace: {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a polished service-business workspace or office interior."
  },
  serviceConsultation: {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder stock image of a professional client consultation around a desk."
  },
  founderPortrait: {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
    alt: "Placeholder professional portrait that can later be replaced with the founder's real photo."
  }
} as const;

export type StockImageKey = keyof typeof stockImages;
