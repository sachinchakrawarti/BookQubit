import QubitAuthorImageData from "./QubitAuthorImageData";

export type AuthorButtonAction = "knowMore" | "viewBooks";

export type AuthorButton = {
  id: string;
  label: string;
  action: AuthorButtonAction;
};

export type SocialLinks = {
  wikipedia?: string;
  website?: string;
};

export type Author = {
  id: number;
  slug: string;
  name: string;
  birthYear?: number;
  country: string;
  bio: string;
  bookCount: number;
  mostFamousWork: string;
  genres: string[];
  image: string;
  buttons: AuthorButton[];
  socials?: SocialLinks;
};

const AuthorData: Author[] = [
  {
    id: 1,
    slug: "bhagat-singh",
    name: "Bhagat Singh",
    birthYear: 1907,
    country: "India",
    bio:
      "Indian socialist revolutionary whose acts of dramatic resistance against British rule made him a legendary figure in India's freedom struggle.",
    bookCount: 3,
    mostFamousWork: "Why I Am an Atheist",
    genres: ["Revolutionary", "Political Philosophy"],
    image: QubitAuthorImageData.Bhagat_Singh,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Bhagat_Singh",
    },
    buttons: [
      { id: "know-more-1", label: "Know More", action: "knowMore" },
      { id: "view-books-1", label: "View Books", action: "viewBooks" },
    ],
  },
  {
    id: 2,
    slug: "yuval-noah-harari",
    name: "Yuval Noah Harari",
    birthYear: 1976,
    country: "Israel",
    bio:
      "Historian and philosopher known for transforming complex historical ideas into accessible global narratives.",
    bookCount: 4,
    mostFamousWork: "Sapiens",
    genres: ["History", "Philosophy", "Future Studies"],
    image: QubitAuthorImageData.Yuval_Noah_Harari,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Yuval_Noah_Harari",
      website: "https://www.ynharari.com",
    },
    buttons: [
      { id: "know-more-2", label: "Know More", action: "knowMore" },
      { id: "view-books-2", label: "View Books", action: "viewBooks" },
    ],
  },
  {
    id: 3,
    slug: "george-orwell",
    name: "George Orwell",
    birthYear: 1903,
    country: "United Kingdom",
    bio:
      "English novelist and critic, famous for his sharp critique of totalitarianism and political manipulation.",
    bookCount: 5,
    mostFamousWork: "1984",
    genres: ["Dystopian", "Political Fiction"],
    image: QubitAuthorImageData.George_Orwell,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/George_Orwell",
    },
    buttons: [
      { id: "know-more-3", label: "Know More", action: "knowMore" },
      { id: "view-books-3", label: "View Books", action: "viewBooks" },
    ],
  },
  {
    id: 4,
    slug: "br-ambedkar",
    name: "B. R. Ambedkar",
    birthYear: 1891,
    country: "India",
    bio:
      "Jurist, economist, and social reformer who fought against caste discrimination and drafted the Indian Constitution.",
    bookCount: 7,
    mostFamousWork: "Annihilation of Caste",
    genres: ["Social Justice", "Political Thought"],
    image: QubitAuthorImageData.B_R_Ambedkar,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/B._R._Ambedkar",
    },
    buttons: [
      { id: "know-more-4", label: "Know More", action: "knowMore" },
      { id: "view-books-4", label: "View Books", action: "viewBooks" },
    ],
  },
  {
    id: 5,
    slug: "osho",
    name: "Osho",
    birthYear: 1931,
    country: "India",
    bio:
      "Mystic and spiritual teacher known for his revolutionary approach to meditation, awareness, and individuality.",
    bookCount: 10,
    mostFamousWork: "The Book of Nothing",
    genres: ["Spirituality", "Philosophy"],
    image: QubitAuthorImageData.Osho,
    socials: {
      wikipedia: "https://en.wikipedia.org/wiki/Rajneesh",
    },
    buttons: [
      { id: "know-more-5", label: "Know More", action: "knowMore" },
      { id: "view-books-5", label: "View Books", action: "viewBooks" },
    ],
  },
];

export default AuthorData;
