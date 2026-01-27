// src/data/BooksData.ts

// Remove this import since QubitBookData doesn't exist
// import QubitBookData from './QubitBookData';

// Define the interfaces locally instead of importing
export interface BookButton {
  knowMore: string;
  getBook: string;
  readSummary: string;
  listenAudiobook: string;
}

export interface OtherEdition {
  edition: string;
  isbn: string;
  publisher: string;
  published: string;
  price: string;
  language: string;
  format: string;
  pages?: number;
  duration?: string;
  narrator?: string;
  imageUrl: string;
}

export interface Book {
  id: number;
  title: string;
  originaltitle?: string;
  slug: string;
  author: string;
  collection?: string;
  description: string;
  category: string;
  genre?: string;
  country?: string;
  price: string;
  imageUrl: string;
  rating: number;
  keyPoints: string[];
  tags: string[];
  isbn: string;
  pageCount?: number;
  published: string;
  originalPublished?: string;
  format: string;
  publisher: string;
  language: string;
  genres: string[];
  subjects: string[];
  summary: string;
  buttons: BookButton;
  otherEditions?: OtherEdition[];
  nominations?: string;
}

// Use placeholder images for now
const placeholderImage = 'https://via.placeholder.com/150x200';

const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    slug: "atomic-habits",
    author: "James Clear",
    collection: "Self-Improvement",
    description: "Tiny changes, remarkable results",
    category: "Self-Help",
    genre: "Personal Development",
    country: "USA",
    price: "$14.99",
    imageUrl: "https://i.pinimg.com/736x/e4/b7/fe/e4b7fe666fb5a80e4978aabf087b6084.jpg",
    rating: 4.8,
    keyPoints: ["Habit Formation", "Behavioral Psychology", "Continuous Improvement"],
    tags: ["Productivity", "Psychology", "Success"],
    isbn: "9780735211292",
    pageCount: 320,
    published: "2018",
    originalPublished: "2018",
    format: "Hardcover",
    publisher: "Avery",
    language: "English",
    genres: ["Non-fiction", "Self-help", "Psychology"],
    subjects: ["Habit Formation", "Behavioral Science", "Personal Growth"],
    summary: "A revolutionary guide to building good habits and breaking bad ones with tiny, easy-to-implement changes.",
    buttons: {
      knowMore: "/books/atomic-habits",
      getBook: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
      readSummary: "#",
      listenAudiobook: "#"
    }
  },
  {
    id: 2,
    title: "Deep Work",
    slug: "deep-work",
    author: "Cal Newport",
    collection: "Productivity Series",
    description: "Rules for focused success in a distracted world",
    category: "Productivity",
    genre: "Business & Work",
    country: "USA",
    price: "$16.99",
    imageUrl: "https://i.pinimg.com/1200x/75/3b/99/753b992ccb6ff1bed4ba6beb2ff1a382.jpg",
    rating: 4.7,
    keyPoints: ["Focused Work", "Distraction Management", "Professional Excellence"],
    tags: ["Productivity", "Focus", "Work"],
    isbn: "9781455586691",
    pageCount: 304,
    published: "2016",
    originalPublished: "2016",
    format: "Hardcover",
    publisher: "Grand Central Publishing",
    language: "English",
    genres: ["Non-fiction", "Business", "Self-help"],
    subjects: ["Productivity", "Focus", "Professional Skills"],
    summary: "Deep work is the ability to focus without distraction on a cognitively demanding task.",
    buttons: {
      knowMore: "/books/deep-work",
      getBook: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692",
      readSummary: "#",
      listenAudiobook: "#"
    }
  },
  {
    id: 3,
    title: "The Psychology of Money",
    slug: "psychology-of-money",
    author: "Morgan Housel",
    collection: "Finance & Behavior",
    description: "Timeless lessons on wealth, greed, and happiness",
    category: "Finance",
    genre: "Personal Finance",
    country: "USA",
    price: "$12.99",
    imageUrl: "https://i.pinimg.com/1200x/f1/7a/3d/f17a3d8fec24dd8e14447c4baf662af6.jpg",
    rating: 4.6,
    keyPoints: ["Behavioral Finance", "Wealth Psychology", "Financial Wisdom"],
    tags: ["Finance", "Psychology", "Investing"],
    isbn: "9780857197689",
    pageCount: 256,
    published: "2020",
    originalPublished: "2020",
    format: "Hardcover",
    publisher: "Harriman House",
    language: "English",
    genres: ["Non-fiction", "Finance", "Psychology"],
    subjects: ["Behavioral Economics", "Personal Finance", "Investing"],
    summary: "Exploring how people think about money and how to make better financial decisions.",
    buttons: {
      knowMore: "/books/psychology-of-money",
      getBook: "https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681",
      readSummary: "#",
      listenAudiobook: "#"
    }
  },
  {
    id: 4,
    title: "Thinking, Fast and Slow",
    slug: "thinking-fast-and-slow",
    author: "Daniel Kahneman",
    collection: "Psychology Classics",
    description: "The two systems that drive our thinking",
    category: "Psychology",
    genre: "Cognitive Science",
    country: "USA/Israel",
    price: "$17.99",
    imageUrl: "https://i.pinimg.com/1200x/3b/5a/0f/3b5a0fbce8a9246201471c81e616b6fc.jpg",
    rating: 4.5,
    keyPoints: ["Dual Process Theory", "Cognitive Biases", "Decision Making"],
    tags: ["Psychology", "Behavioral Economics", "Science"],
    isbn: "9780374275631",
    pageCount: 512,
    published: "2011",
    originalPublished: "2011",
    format: "Hardcover",
    publisher: "Farrar, Straus and Giroux",
    language: "English",
    genres: ["Non-fiction", "Psychology", "Science"],
    subjects: ["Cognitive Science", "Behavioral Economics", "Decision Theory"],
    summary: "A tour of the mind and explains the two systems that drive the way we think.",
    buttons: {
      knowMore: "/books/thinking-fast-and-slow",
      getBook: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374275637",
      readSummary: "#",
      listenAudiobook: "#"
    }
  },
  {
    id: 5,
    title: "Why I Am an Atheist",
    slug: "why-i-am-an-atheist",
    author: "Bhagat Singh",
    collection: "",
    description: "A powerful and reasoned essay by Indian revolutionary Bhagat Singh defending his atheism and challenging blind faith.",
    category: "Atheism & Religion",
    genre: "",
    country: "India",
    price: "$9.99",
    imageUrl: "https://i.pinimg.com/736x/fd/c0/44/fdc044b82ccfef966b7d79b974e2dc27.jpg",
    rating: 4.8,
    keyPoints: ["Rationalism", "Revolutionary Thought", "Critique of Religion"],
    tags: ["Atheism", "Indian History", "Revolution"],
    isbn: "9788170288808",
    pageCount: 64,
    published: "1930",
    originalPublished: "1930",
    format: "Paperback",
    publisher: "Government of India Press / Multiple Reprints",
    language: "English",
    genres: ["Autobiography", "Political Philosophy", "Atheism"],
    subjects: [
      "Rationalism",
      "Freedom Struggle",
      "Secularism",
      "Religion & Belief",
      "Indian Revolutionaries",
      "Atheist Philosophy"
    ],
    summary: "Written from the confines of Lahore Central Jail in 1930, *Why I Am an Atheist* is a bold and intellectually rigorous essay by Indian revolutionary Bhagat Singh.",
    buttons: {
      knowMore: `/books/why-i-am-an-atheist`,
      getBook: "https://www.amazon.in/Why-Am-Atheist-Bhagat-Singh/dp/9389847125",
      readSummary: "#",
      listenAudiobook: "https://youtu.be/z4qnQxWrmto"
    }
  },
  {
    id: 6,
    title: "Sapiens: A Brief History of Humankind",
    originaltitle: "קיצור תולדות האנושות",
    slug: "sapiens-a-brief-history-of-humankind",
    author: "Yuval Noah Harari",
    collection: "Harari Collection",
    description: "An epic exploration of the history of humankind, from the emergence of Homo sapiens to the modern age.",
    category: "History & Anthropology",
    country: "Israel",
    nominations: "Goodreads Choice Awards Best Graphic Novels & Comics",
    price: "$18.99",
    imageUrl: "https://i.pinimg.com/736x/69/2b/80/692b807e2837f9645592276778b72bef.jpg",
    rating: 4.9,
    keyPoints: [
      "Cognitive Revolution",
      "Agricultural Revolution",
      "Unification of Humankind",
      "Scientific Revolution"
    ],
    tags: ["History", "Evolution", "Civilization"],
    isbn: "9780062316097",
    pageCount: 498,
    published: "2015",
    originalPublished: "2011",
    format: "Paperback",
    publisher: "Harper",
    language: "English",
    genres: ["Non-fiction", "History", "Anthropology"],
    subjects: [
      "Human Evolution",
      "Cultural Development",
      "Economy & Empires",
      "Science & Technology",
      "Social Structures",
      "Human Imagination"
    ],
    summary: "*Sapiens* by Yuval Noah Harari is a sweeping narrative that charts the journey of Homo sapiens from an insignificant ape to the dominant force shaping the planet.",
    buttons: {
      knowMore: "/books/sapiens-a-brief-history-of-humankind",
      getBook: "#",
      readSummary: "#",
      listenAudiobook: "#"
    }
  }
];

export default books;