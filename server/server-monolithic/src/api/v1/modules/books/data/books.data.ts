// frontend/src/data/books.ts

import QubitBookData from './QubitBookData';

interface BookEdition {
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
  imageUrl?: string;
}

interface BookButtons {
  knowMore: string;
  getBook: string;
  readSummary: string;
  listenAudiobook: string;
}

interface Book {
  id: number;
  title: string;
  slug: string;
  author: string;
  collection: string;
  description: string;
  category: string;
  genre?: string;
  country: string;
  nominations?: string;
  price: string;
  imageUrl: string;
  rating: number;
  keyPoints: string[];
  tags: string[];
  isbn: string;
  pageCount: number;
  published: string;
  originalPublished: string;
  format: string;
  publisher: string;
  language: string;
  genres: string[];
  subjects: string[];
  summary: string;
  originaltitle?: string;
  otherEditions?: BookEdition[];
  buttons: BookButtons;
}

const books: Book[] = [
  {
    "id": 1,
    "title": "Why I Am an Atheist",
    "slug": "why-i-am-an-atheist",
    "author": "Bhagat Singh",
    "collection": "",
    "description": "A powerful and reasoned essay by Indian revolutionary Bhagat Singh defending his atheism and challenging blind faith, written while in jail.",
    "category": "Atheism & Religion",
    "genre": "",
    "country": "India",
    "price": "$9.99",
    "imageUrl": QubitBookData.Why_I_Am_an_Atheist,
    "rating": 4.8,
    "keyPoints": ["Rationalism", "Revolutionary Thought", "Critique of Religion"],
    "tags": ["Atheism", "Indian History", "Revolution"],
    "isbn": "9788170288808",
    "pageCount": 64,
    "published": "1930",
    "originalPublished": "1930",
    "format": "Paperback",
    "publisher": "Government of India Press / Multiple Reprints",
    "language": "English",
    "genres": ["Autobiography", "Political Philosophy", "Atheism"],
    "subjects": [
      "Rationalism",
      "Freedom Struggle",
      "Secularism",
      "Religion & Belief",
      "Indian Revolutionaries",
      "Atheist Philosophy"
    ],
    "summary": "Written from the confines of Lahore Central Jail in 1930, *Why I Am an Atheist* is a bold and intellectually rigorous essay by Indian revolutionary Bhagat Singh. Challenging the notion that his disbelief in God was born out of arrogance or immaturity, Singh presents a deeply philosophical defense of atheism rooted in rationalism, humanism, and political consciousness. Bhagat Singh argues that blind faith undermines revolutionary thought, and he questions religious orthodoxy that justifies oppression or diverts energy away from social change. He doesn't simply reject religion; he systematically deconstructs it through logic and lived revolutionary experience, showing how belief in a divine power is incompatible with the struggle for justice, freedom, and reason. Rather than offering nihilism, his atheism is steeped in purpose — demanding action, sacrifice, and self-reliance over divine intervention. The essay remains a striking piece of intellectual rebellion and a milestone in India's freedom and ideological history.",
    "buttons": {
      "knowMore": `/books/why-i-am-an-atheist`,
      "getBook": "https://www.amazon.in/Why-Am-Atheist-Bhagat-Singh/dp/9389847125?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1UBX5OTEI9Y7I",
      "readSummary": "#",
      "listenAudiobook": "https://youtu.be/z4qnQxWrmto?si=ZWqVKRs2Ps_qs0uY"
    }
  },

  {
    "id": 2,
    "title": "Nexus",
    "originaltitle": "",
    "slug": "nexus",
    "author": "Yuval Noah Harari",
    "collection": "Harari Collection",
    "description": "An exploration of the intersection between human consciousness, advanced technology, and the ethical dilemmas of a hyperconnected future.",
    "category": "Futurism & Ethics",
    "country": "Israel",
    "price": "$14.99",
    "imageUrl": QubitBookData.Nexus,
    "rating": 4.7,
    "keyPoints": [
      "Future of Human-Machine Integration",
      "Ethical Use of AI",
      "Global Interconnectivity"
    ],
    "tags": ["AI Ethics", "Futurism", "Philosophy of Technology"],
    "isbn": "9780099590088",
    "pageCount": 320,
    "published": "2025",
    "originalPublished": "2025",
    "format": "Hardcover",
    "publisher": "Jonathan Cape / Penguin",
    "language": "English",
    "genres": ["Non-fiction", "Philosophy", "Technology"],
    "subjects": [
      "Artificial Intelligence",
      "Neurotechnology",
      "Global Ethics",
      "Transhumanism",
      "Digital Consciousness",
      "Future Studies"
    ],
    "summary": "In *Nexus*, acclaimed historian and futurist Yuval Noah Harari delves into the profound ways emerging technologies are reshaping humanity. Harari explores the merging of human consciousness with machine intelligence, warning of both the dazzling promises and dire perils of our rapidly advancing digital age. From AI governance to neural interfaces, he examines the fine line between progress and control. Drawing on historical context and future speculation, *Nexus* challenges readers to think deeply about autonomy, privacy, ethics, and the future of civil liberties in a world where minds and machines intertwine. This visionary work extends Harari's tradition of thought-provoking analysis and urges society to ask — not just what we can do, but what we should do.",
    "buttons": {
      "knowMore": "/books/nexus",
      "getBook": "#",
      "readSummary": "#",
      "listenAudiobook": "#"
    }
  },

  {
    "id": 3,
    "title": "Sapiens: A Brief History of Humankind",
    "originaltitle": "קיצור תולדות האנושות",
    "slug": "sapiens-a-brief-history-of-humankind",
    "author": "Yuval Noah Harari",
    "collection": "Harari Collection",
    "description": "An epic exploration of the history of humankind, from the emergence of Homo sapiens to the modern age, analyzing how biology and history have defined us.",
    "category": "History & Anthropology",
    "country": "Israel",
    "nominations": "Goodreads Choice Awards Best Graphic Novels & Comics",
    "price": "$18.99",
    "imageUrl": QubitBookData.Sapiens_A_Brief_History_of_Humankind,
    "rating": 4.9,
    "keyPoints": [
      "Cognitive Revolution",
      "Agricultural Revolution",
      "Unification of Humankind",
      "Scientific Revolution"
    ],
    "tags": ["History", "Evolution", "Civilization"],
    "isbn": "9780062316097",
    "pageCount": 498,
    "published": "2015",
    "originalPublished": "2011",
    "format": "Paperback",
    "publisher": "Harper",
    "language": "English",
    "genres": ["Non-fiction", "History", "Anthropology"],
    "subjects": [
      "Human Evolution",
      "Cultural Development",
      "Economy & Empires",
      "Science & Technology",
      "Social Structures",
      "Human Imagination"
    ],
    "summary": "*Sapiens* by Yuval Noah Harari is a sweeping narrative that charts the journey of Homo sapiens from an insignificant ape to the dominant force shaping the planet. With clarity and wit, Harari outlines key turning points in human history: the Cognitive Revolution that sparked language and myth, the Agricultural Revolution that built cities and hierarchies, the unification of humanity under empires and religions, and the Scientific Revolution that launched the modern world. More than just a chronicle of events, the book challenges readers to reflect on the constructs of society — from money to religion to happiness — and what it truly means to be human. *Sapiens* is both a historical masterpiece and a philosophical inquiry into our past, present, and possible futures.",
    
    "otherEditions": [
      {
        "edition": "Hardcover",
        "isbn": "9780062316110",
        "publisher": "HarperCollins",
        "published": "2014",
        "price": "$25.99",
        "language": "English",
        "format": "Hardcover",
        "pages": 512,
        "imageUrl": QubitBookData.Sapiens_Hardcover
      },
      {
        "edition": "Graphic Novel (Volume 1: The Birth of Humankind)",
        "isbn": "9780063051331",
        "publisher": "Harper Perennial",
        "published": "2020",
        "price": "$22.99",
        "language": "English",
        "format": "Graphic Novel",
        "pages": 248,
        "imageUrl": QubitBookData.Sapiens_Graphic_Vol1
      },
      {
        "edition": "Audiobook",
        "isbn": "9780062379887",
        "publisher": "HarperAudio",
        "published": "2015",
        "price": "$19.99",
        "language": "English",
        "format": "Audiobook",
        "duration": "15 hrs 18 mins",
        "narrator": "Derek Perkins",
        "imageUrl": QubitBookData.Sapiens_Audiobook
      },
      {
        "edition": "Hebrew Original Edition",
        "isbn": "9789650719736",
        "publisher": "Kinneret Zmora-Bitan Dvir",
        "published": "2011",
        "price": "₪89.00",
        "language": "Hebrew",
        "format": "Paperback",
        "pages": 443,
        "imageUrl": QubitBookData.Sapiens_Hebrew
      },
      {
        "edition": "Illustrated Edition",
        "isbn": "9780063212237",
        "publisher": "Harper",
        "published": "2023",
        "price": "$34.99",
        "language": "English",
        "format": "Hardcover (Illustrated)",
        "pages": 512,
        "imageUrl": QubitBookData.Sapiens_Illustrated
      }
    ],
  
    "buttons": {
      "knowMore": "/books/sapiens-a-brief-history-of-humankind",
      "getBook": "#",
      "readSummary": "#",
      "listenAudiobook": "#"
    }
  },

  {
    "id": 4,
    "title": "Who Were the Shudras?",
    "slug": "who-were-the-shudras",
    "author": "B. R. Ambedkar",
    "collection": "Ambedkar Collection",
    "description": "A groundbreaking historical and sociological study by Dr. B. R. Ambedkar that challenges the traditional caste system and explores the origins of the Shudra community in India.",
    "category": "Caste Studies & Indian History",
    "genre": "India",
    "country": "India",
    "price": "$12.49",
    "imageUrl": QubitBookData.Who_Were_the_Shudras,
    "rating": 4.8,
    "keyPoints": [
      "Origin of Caste System",
      "Historical Deconstruction",
      "Caste and Social Justice"
    ],
    "tags": ["Dalit History", "Caste System", "Indian Society"],
    "isbn": "9788170221676",
    "pageCount": 288,
    "published": "1946",
    "originalPublished": "1946",
    "format": "Paperback",
    "publisher": "Thacker & Co. / Various Reprints",
    "language": "English",
    "genres": ["Non-fiction", "History", "Sociology"],
    "subjects": [
      "Caste in India",
      "Ancient Indian Society",
      "Social Hierarchy",
      "Dalit Studies",
      "Hindu Social Order",
      "Ambedkarite Thought"
    ],
    "summary": "In *Who Were the Shudras?*, Dr. B. R. Ambedkar presents a profound critique of the Hindu caste system by investigating the origins and historical treatment of the Shudra community. Drawing on ancient texts, Vedic scriptures, and historical records, Ambedkar argues that the Shudras were originally a noble warrior class who were systematically downgraded through socio-political processes and religious manipulation. He dismantles the Brahmanical narrative surrounding caste purity and challenges the religious orthodoxy that has justified centuries of discrimination. This scholarly work is not only a critical historical document but also a powerful call for social reform and justice. Ambedkar's rigorous analysis reshapes the discourse on caste and remains essential reading for understanding Indian society.",
    "buttons": {
      "knowMore": `/books/who-were-the-shudras`,
      "getBook": "#",
      "readSummary": "#",
      "listenAudiobook": "#"
    }
  },

  {
    "id": 5,
    "title": "Annihilation of Caste",
    "slug": "annihilation-of-caste",
    "collection": "Ambedkar Collection",
    "author": "B. R. Ambedkar",
    "description": "A radical and powerful critique of the caste system in India by Dr. B. R. Ambedkar, calling for the abolition of caste-based discrimination and offering a vision for social equality.",
    "category": "Caste Studies & Indian Social Reform",
    "genre": "",
    "country": "India",
    "price": "$14.99",
    "imageUrl": QubitBookData.Annihilation_of_Caste,
    "rating": 4.9,
    "keyPoints": [
      "Caste Abolition",
      "Social Justice",
      "Critique of Hinduism",
      "Radical Reformation"
    ],
    "tags": ["Dalit Rights", "Caste System", "Social Justice"],
    "isbn": "9788186814065",
    "pageCount": 272,
    "published": "1948",
    "originalPublished": "1948",
    "format": "Paperback",
    "publisher": "Jaico Publishing House",
    "language": "English",
    "genres": ["Non-fiction", "Social Reform", "Philosophy"],
    "subjects": [
      "Caste in India",
      "Indian Social Reform",
      "Ambedkarite Thought",
      "Human Rights",
      "Religious Criticism",
      "Equality & Justice"
    ],
    "summary": "*Annihilation of Caste* is one of Dr. B. R. Ambedkar's most revolutionary works, in which he condemns the deeply entrenched caste system that has divided Indian society for centuries. In this essay, originally delivered as a speech at the Jat-Pat Todak Mandal in Lahore, Ambedkar critiques the Hindu caste system as a source of inequality, injustice, and social oppression. He argues that caste is not a mere social hierarchy but a rigid structure designed to maintain the power and privileges of the higher castes, while subjugating the lower castes, particularly the Dalits. Ambedkar's call for the annihilation of caste is not only a demand for social reform but also a radical rethinking of Hinduism and its role in perpetuating discrimination. He advocates for the creation of a more just and egalitarian society, built on the principles of liberty, equality, and fraternity. This book remains a cornerstone of social justice literature and a vital text in the fight against caste-based oppression.",
    "buttons": {
      "knowMore": `/books/annihilation-of-caste`,
      "getBook": "#",
      "readSummary": "#",
      "listenAudiobook": "https://youtu.be/M6Z3T2zvzuk"
    }
  },

  {
    "id": 6,
    "title": "Hyperefficient: Optimize Your Brain to Transform the Way You Work",
    "slug": "hyperefficient-optimize-your-brain-to-transform-the-way-you-work",
    "author": "Mithu Storoni",
    "collection": "Productivity Collection",
    "description": "A neuroscience-backed guide to enhancing productivity, decision-making, and cognitive control in the modern work environment.",
    "category": "Productivity & Neuroscience",
    "genre": "",
    "country": "United States of America (USA)",
    "price": "$17.49",
    "imageUrl": QubitBookData.Hyperefficient_Optimize_Your_Brain_to_Transform_the_Way_You_Work,
    "rating": 4.6,
    "keyPoints": [
      "Neuroscience of Productivity",
      "Cognitive Control",
      "Decision-Making Improvement",
      "Workplace Optimization"
    ],
    "tags": ["Productivity", "Neuroscience", "Brain Optimization", "Work Efficiency"],
    "isbn": "9781785043173",
    "pageCount": 320,
    "published": "2020",
    "originalPublished": "2020",
    "format": "Hardcover",
    "publisher": "Penguin Life",
    "language": "English",
    "genres": ["Non-fiction", "Self-Help", "Neuroscience"],
    "subjects": [
      "Brain Science",
      "Workplace Efficiency",
      "Mental Health",
      "Cognitive Development",
      "Productivity Hacks",
      "Decision Making"
    ],
    "summary": "*Hyperefficient* is a transformative guide for professionals looking to optimize their mental capabilities and enhance their efficiency in the workplace. Mithu Storoni, a renowned neuroscientist, draws on the latest brain research to offer practical tips and strategies for improving cognitive control, decision-making, and mental focus. She discusses how understanding the brain's natural processes can lead to better work habits, reduced stress, and more productive outcomes. The book introduces a combination of scientifically proven techniques, including mindfulness, mental training exercises, and lifestyle changes, that can help individuals unlock their brain's full potential. Storoni's evidence-based approach provides actionable insights that anyone can implement, from high-level executives to those seeking to improve their everyday work habits. A must-read for anyone looking to maximize their cognitive performance and efficiency in today's fast-paced work environment.",
    "buttons": {
      "knowMore": `/books/hyperefficient-optimize-your-brain-to-transform-the-way-you-work`,
      "getBook": "#",
      "readSummary": "#",
      "listenAudiobook": "#"
    }
  }
];

export default books;