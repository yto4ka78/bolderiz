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
  // Entrées
  {
    id: 1,
    name: "Nems au poulet (4 pièces)",
    description:
      "Rouleaux croustillants au poulet, légumes et vermicelles, frits à la minute.",
    price: "5,00 €",
    category: "Entrées",
    image: "/first/nems-au-poulet.jpeg",
    tag: "Populaire",
  },
  {
    id: 2,
    name: "Raviolis au poulet",
    description:
      "Raviolis farcis au poulet et aux légumes, cuits à la vapeur, servis avec sauce soja.",
    price: "8,00 €",
    category: "Entrées",
    image: "/first/raviolis-au-poulet.jpeg",
    tag: "Maison",
  },
  // Plats
  {
    id: 3,
    name: "Canard laqué",
    description:
      "Canard rôti à la peau caramélisée et dorée, servi avec sa sauce maison.",
    price: "16,80 €",
    category: "Plats",
    image: "/plates/canard-laque.jpeg",
    tag: "Signature",
  },
  {
    id: 4,
    name: "Mapo tofu",
    description:
      "Tofu soyeux en sauce au piment du Sichuan, porc haché et poivre de Sichuan.",
    price: "10,00 €",
    category: "Plats",
    image: "/plates/mapo-tofu.jpeg",
    tag: "Épicé",
  },
  {
    id: 5,
    name: "Bœuf bouilli au piment et poivre",
    description:
      "Tranches de bœuf fondantes dans un bouillon épicé, piment et poivre du Sichuan. Petit : 15 € — Grand : 18,80 €",
    price: "15,00 € / 18,80 €",
    category: "Plats",
    image: "/plates/boeuf-bouilli-au-piment-et-poivre.jpeg",
    tag: "🌶🌶🌶",
  },
  // Accompagnements
  {
    id: 6,
    name: "Bo Bun",
    description:
      "Vermicelles de riz, bœuf sauté, légumes croquants, herbes fraîches, sauce nuoc-mâm.",
    price: "9,90 €",
    category: "Accompagnements",
    image: "/accompaniement/bo-bun.jpeg",
    tag: "Populaire",
  },
  {
    id: 7,
    name: "Brioche au porc à la vapeur (4 pièces)",
    description:
      "Bao moelleux farcis au porc braisé, cuits à la vapeur selon la tradition.",
    price: "6,00 €",
    category: "Accompagnements",
    image: "/accompaniement/brioche-au-porc-a-la-vapeur.jpeg",
  },
  {
    id: 8,
    name: "Raviolis porc & chou (10 pièces)",
    description:
      "Raviolis farcis au porc et chou, cuits à la vapeur, servis avec sauce soja.",
    price: "8,00 €",
    category: "Accompagnements",
    image: "/accompaniement/raviolis-porc-chou.jpeg",
    tag: "Maison",
  },
  // Boissons
  { id: 13, name: "Café", description: "Espresso servi chaud.", price: "2,00 €", category: "Boissons" },
  { id: 14, name: "Evian 50 cl", description: "Eau minérale naturelle.", price: "2,00 €", category: "Boissons" },
  { id: 15, name: "Coca / Coca Zero 33 cl", description: "Coca-Cola ou Coca-Cola Zero sucre.", price: "2,00 €", category: "Boissons" },
  { id: 16, name: "Orangina 33 cl", description: "Boisson gazeuse à l'orange avec pulpe.", price: "2,00 €", category: "Boissons" },
  { id: 17, name: "Fanta 33 cl", description: "Boisson gazeuse à l'orange.", price: "2,00 €", category: "Boissons" },
  { id: 18, name: "Jus de fruit", description: "Mangue, litchis, orange ou pomme — au choix.", price: "3,00 €", category: "Boissons" },
  { id: 19, name: "Wanglaoji", description: "Infusion chinoise traditionnelle aux herbes.", price: "3,50 €", category: "Boissons" },
  { id: 20, name: "Thé", description: "Jasmin, oolong ou vert selon disponibilité.", price: "4,00 €", category: "Boissons" },
  { id: 21, name: "Aloe vera 50 cl", description: "Boisson à base de gel d'aloe vera.", price: "4,00 €", category: "Boissons" },
  { id: 22, name: "Tsingtao 33 cl", description: "Bière blonde chinoise, légère et rafraîchissante.", price: "3,00 €", category: "Boissons" },
  { id: 23, name: "Asahi 33 cl", description: "Bière japonaise premium, sèche et rafraîchissante.", price: "3,50 €", category: "Boissons" },
  {
    id: 24,
    name: "Vin au pichet (rouge ou rosé)",
    description: "Servi au verre ou en pichet 0,5 L.",
    price: "3,00 € (verre) / 6,00 € (0,5 L)",
    category: "Vins",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 25,
    name: "Chinon rouge 75 cl",
    description: "Vin rouge servi en bouteille 75 cl.",
    price: "20,00 €",
    category: "Vins",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 26,
    name: "Chinon rosé 75 cl",
    description: "Vin rosé servi en bouteille 75 cl.",
    price: "20,00 €",
    category: "Vins",
    image: "https://images.unsplash.com/photo-1771583102699-f79a6c6d08c8?auto=format&fit=crop&w=600&q=80",
  },
  // Desserts
  {
    id: 9,
    name: "Litchi au sirop",
    description:
      "Litchis délicats servis dans leur sirop léger, frais et parfumés.",
    price: "3,50 €",
    category: "Desserts",
    image: "/desserts/litchi-au-sirop.jpeg",
  },
  {
    id: 10,
    name: "Perle de coco (2 pièces)",
    description:
      "Billes de riz gluant enrobées de noix de coco râpée, fondantes et sucrées.",
    price: "3,50 €",
    category: "Desserts",
    image: "/desserts/perle-de-coco.jpeg",
  },
  {
    id: 11,
    name: "Mochi glacé noix de coco (2 pièces)",
    description:
      "Mochi moelleux fourré d'une glace crémeuse à la noix de coco.",
    price: "5,50 €",
    category: "Desserts",
    image: "/desserts/mochi-glace-noix-de-coco.jpeg",
  },
  {
    id: 12,
    name: "Mochi glacé mangue (2 pièces)",
    description: "Mochi moelleux fourré d'une glace onctueuse à la mangue.",
    price: "5,50 €",
    category: "Desserts",
    image: "/desserts/mochi-glace-mangue.jpeg",
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
