export const RESTAURANT = {
  name: "Bol de riz",
  tagline: "Cuisine chinoise authentique au cœur d'Orléans",
  address: "46 Rue Jeanne d'Arc, 45000 Orléans",
  metro: "Arrêt République / Cathédrale",
  phone: "02 38 43 80 44",
  hours: {
    weekdays:
      "Lun : 11h30 - 21h30 · Mar : 11h30 - 21h30 · Mer : 11h30 - 21h30 · Jeu : 11h30 - 21h30 · Ven : 11h30 - 21h30",
    weekend: "Sam : 11h30 - 21h30 · Dim : 11h30 - 21h30",
  },
  founded: "1998",
  rating: 4.6,
  reviews: 130,
};

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  tag?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // Entrées — photos dans /public/menu/
  {
    id: 1,
    name: "Aubergines sautées",
    description: "Aubergines fondantes sautées au wok, sauce soja et aromates.",
    price: "8,50 €",
    category: "Entrées",
    image: "/menu/Aubergines-sautées.webp",
    tag: "Végétarien",
  },
  // Plats
  {
    id: 2,
    name: "Poulet Gong Bao",
    description: "Poulet sauté aux cacahuètes, piments secs et légumes, sauce légèrement sucrée.",
    price: "12,50 €",
    category: "Plats",
    image: "/menu/Gongbao-poulet.webp",
    tag: "Populaire",
  },
  {
    id: 3,
    name: "Filet de porc sauté",
    description: "Filet de porc tendre sauté au wok avec légumes de saison.",
    price: "11,90 €",
    category: "Plats",
    image: "/menu/Filer-de-porc-sautees.webp",
  },
  {
    id: 4,
    name: "Poulet au curry",
    description: "Poulet mijoté dans une sauce curry parfumée, servi avec riz vapeur.",
    price: "11,50 €",
    category: "Plats",
    image: "/menu/Poulet-curry.webp",
  },
  {
    id: 5,
    name: "Bœuf bouilli pimenté",
    description: "Bœuf fondant dans un bouillon relevé aux piments et épices.",
    price: "15,00 € / 18,80 €",
    category: "Plats",
    image: "/menu/Boeuf-bouillie-pimentee.webp",
    tag: "🌶🌶🌶",
  },
  {
    id: 6,
    name: "Mapo tofu",
    description: "Tofu soyeux en sauce au piment du Sichuan, porc haché et poivre de Sichuan.",
    price: "10,00 €",
    category: "Plats",
    image: "/menu/Mapo-dofu.webp",
    tag: "Épicé",
  },
  {
    id: 7,
    name: "Bento bœuf au poivre noir",
    description: "Formule bento : bœuf sauté au poivre noir, riz et accompagnements.",
    price: "13,90 €",
    category: "Plats",
    image: "/menu/Bento-boeuf-poivre-noir.webp",
  },
  {
    id: 8,
    name: "Bento saumon",
    description: "Formule bento : saumon grillé, riz et légumes de saison.",
    price: "14,50 €",
    category: "Plats",
    image: "/menu/Bento-saumon.webp",
    tag: "Signature",
  },
  {
    id: 9,
    name: "Bento poulet au curry",
    description: "Formule bento : poulet au curry, riz et garniture du jour.",
    price: "12,90 €",
    category: "Plats",
    image: "/menu/Bento-poulet-curry.webp",
  },
  // Accompagnements
  {
    id: 10,
    name: "Riz cantonais",
    description: "Riz sauté au wok avec œuf, jambon et petits légumes.",
    price: "9,50 €",
    category: "Accompagnements",
    image: "/menu/Riz-cantonais.webp",
    tag: "Maison",
  },
  {
    id: 11,
    name: "Nouilles sautées aux légumes",
    description: "Nouilles de blé sautées au wok avec légumes croquants.",
    price: "9,90 €",
    category: "Accompagnements",
    image: "/menu/Nouilles-sautees-au-legume.webp",
  },
  // Desserts
  {
    id: 12,
    name: "Litchi au sirop",
    description:
      "Litchis délicats servis dans leur sirop léger, frais et parfumés.",
    price: "3,50 €",
    category: "Desserts",
    image: "/desserts/litchi-au-sirop.jpeg",
  },
  {
    id: 13,
    name: "Perle de coco (2 pièces)",
    description:
      "Billes de riz gluant enrobées de noix de coco râpée, fondantes et sucrées.",
    price: "3,50 €",
    category: "Desserts",
    image: "/desserts/perle-de-coco.jpeg",
  },
  {
    id: 14,
    name: "Mochi glacé noix de coco (2 pièces)",
    description:
      "Mochi moelleux fourré d'une glace crémeuse à la noix de coco.",
    price: "5,50 €",
    category: "Desserts",
    image: "/desserts/mochi-glace-noix-de-coco.jpeg",
  },
  {
    id: 15,
    name: "Mochi glacé mangue (2 pièces)",
    description: "Mochi moelleux fourré d'une glace onctueuse à la mangue.",
    price: "5,50 €",
    category: "Desserts",
    image: "/desserts/mochi-glace-mangue.jpeg",
  },
  // Boissons
  { id: 16, name: "Café", description: "Espresso servi chaud.", price: "2,00 €", category: "Boissons" },
  { id: 17, name: "Evian 50 cl", description: "Eau minérale naturelle.", price: "2,00 €", category: "Boissons" },
  { id: 18, name: "Coca / Coca Zero 33 cl", description: "Coca-Cola ou Coca-Cola Zero sucre.", price: "2,00 €", category: "Boissons" },
  { id: 19, name: "Orangina 33 cl", description: "Boisson gazeuse à l'orange avec pulpe.", price: "2,00 €", category: "Boissons" },
  { id: 20, name: "Fanta 33 cl", description: "Boisson gazeuse à l'orange.", price: "2,00 €", category: "Boissons" },
  { id: 21, name: "Jus de fruit", description: "Mangue, litchis, orange ou pomme — au choix.", price: "3,00 €", category: "Boissons" },
  { id: 22, name: "Wanglaoji", description: "Infusion chinoise traditionnelle aux herbes.", price: "3,50 €", category: "Boissons" },
  { id: 23, name: "Thé", description: "Jasmin, oolong ou vert selon disponibilité.", price: "4,00 €", category: "Boissons" },
  { id: 24, name: "Aloe vera 50 cl", description: "Boisson à base de gel d'aloe vera.", price: "4,00 €", category: "Boissons" },
  { id: 25, name: "Tsingtao 33 cl", description: "Bière blonde chinoise, légère et rafraîchissante.", price: "3,00 €", category: "Boissons" },
  { id: 26, name: "Asahi 33 cl", description: "Bière japonaise premium, sèche et rafraîchissante.", price: "3,50 €", category: "Boissons" },
  {
    id: 27,
    name: "Vin au pichet (rouge ou rosé)",
    description: "Servi au verre ou en pichet 0,5 L.",
    price: "3,00 € (verre) / 6,00 € (0,5 L)",
    category: "Vins",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 28,
    name: "Chinon rouge 75 cl",
    description: "Vin rouge servi en bouteille 75 cl.",
    price: "20,00 €",
    category: "Vins",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 29,
    name: "Chinon rosé 75 cl",
    description: "Vin rosé servi en bouteille 75 cl.",
    price: "20,00 €",
    category: "Vins",
    image: "https://images.unsplash.com/photo-1771583102699-f79a6c6d08c8?auto=format&fit=crop&w=600&q=80",
  },
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "Proposez-vous des options végétariennes ou véganes ?",
    answer:
      "Oui, notre carte propose plusieurs plats végétariens et peut être adaptée sur demande. Nous signalons les plats végétariens par un symbole sur la carte. N'hésitez pas à informer votre serveur de vos préférences alimentaires.",
  },
  {
    id: 2,
    question: "Est-il possible de réserver une table en ligne ?",
    answer:
      "Vous pouvez nous contacter par téléphone au +33 1 42 72 88 15 ou par e-mail à contact@ledragonrouge.fr pour effectuer une réservation. Nous vous recommandons de réserver au minimum 48h à l'avance, surtout pour les week-ends et les soirées.",
  },
  {
    id: 3,
    question: "Proposez-vous des menus pour les groupes ?",
    answer:
      "Oui, nous proposons des menus banquet à partir de 6 personnes avec des formules à partir de 28 € par personne. Pour les événements privés ou groupes de plus de 12 personnes, contactez-nous directement pour une offre personnalisée.",
  },
  {
    id: 4,
    question: "Les plats sont-ils vraiment épicés ?",
    answer:
      "Certains plats d'inspiration sichuanaise sont naturellement épicés, mais nous adaptons toujours le niveau de piment à votre convenance. Nos serveurs peuvent vous guider et vous proposer des alternatives moins relevées si nécessaire.",
  },
  {
    id: 5,
    question: "Acceptez-vous les chiens ou animaux de compagnie ?",
    answer:
      "Les animaux de compagnie ne sont pas admis en salle de restaurant pour des raisons d'hygiène. Cependant, nous disposons d'une terrasse extérieure (disponible en saison) où les animaux tenus en laisse sont les bienvenus.",
  },
  {
    id: 6,
    question: "Comment accéder au restaurant en transports en commun ?",
    answer:
      "Bol de riz est facilement accessible par les lignes de tram et de bus du centre d'Orléans. Nous sommes situés au 46 Rue Jeanne d'Arc, à deux minutes à pied de la place du Martroi et de la cathédrale.",
  },
  {
    id: 7,
    question: "Proposez-vous des plats à emporter ?",
    answer:
      "Oui, la vente à emporter est disponible tous les jours aux heures d'ouverture du déjeuner et du dîner. Vous pouvez passer commande par téléphone au moins 20 minutes à l'avance pour que votre repas soit prêt à votre arrivée.",
  },
  {
    id: 8,
    question: "Y a-t-il un menu enfant ?",
    answer:
      "Nous proposons un menu enfant à 11 €, incluant une entrée, un plat, un dessert et une boisson. Il est disponible pour les enfants jusqu'à 12 ans, avec des portions adaptées et des plats moins épicés.",
  },
];
