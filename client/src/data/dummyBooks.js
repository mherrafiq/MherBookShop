export const CATEGORIES = {
  fiction: {
    name: 'Fiction Books',
    tagline: 'Immerse yourself in imaginative worlds, captivating stories, and unforgettable characters.',
    tag: 'Fiction'
  },
  'non-fiction': {
    name: 'Non-Fiction Books',
    tagline: 'Expand your mind with real-world knowledge, biographies, science, and history.',
    tag: 'Non-Fiction'
  },
  children: {
    name: 'Children Books',
    tagline: 'Inspiring tales, vibrant illustrations, and adventures for young readers.',
    tag: 'Children'
  },
  textbooks: {
    name: 'School Textbooks',
    tagline: 'Comprehensive academic books, curriculum guides, and study materials.',
    tag: 'Academic'
  },
  'past-papers': {
    name: 'Past Papers & Solutions',
    tagline: 'Exam preparation past papers, marking schemes, and revision guides.',
    tag: 'Past Papers'
  },
  'test-prep': {
    name: 'Test Preparations',
    tagline: 'Standardized test prep guides, practice tests, and aptitude coaching books.',
    tag: 'Test Prep'
  },
  'writing-tools': {
    name: 'Writing Tools',
    tagline: 'Premium pens, pencils, highlighters, and precision writing instruments.',
    tag: 'Stationery'
  },
  calculators: {
    name: 'Scientific & Graphing Calculators',
    tagline: 'High-performance calculators for students, engineers, and professionals.',
    tag: 'Electronics'
  },
  'school-bags': {
    name: 'School Bags & Backpacks',
    tagline: 'Durable, ergonomic backpacks and book bags for school and college.',
    tag: 'Supplies'
  }
};

export const DUMMY_BOOKS_BY_CATEGORY = {
  fiction: [
    {
      id: 'dummy-fiction-1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      desc: 'A quintessential portrait of the Jazz Age, following the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.',
      price: 14.99,
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Classic Fiction',
      rating: 4.8,
      isDummy: true
    },
    {
      id: 'dummy-fiction-2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      desc: 'The unforgettable novel of childhood in a sleepy Southern town and the crisis of conscience and racial justice that rocked it.',
      price: 18.50,
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Literary Fiction',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-fiction-3',
      title: '1984',
      author: 'George Orwell',
      desc: 'A chilling dystopian masterpiece exploring the terrifying power of totalitarian surveillance, thoughtcrime, and Big Brother.',
      price: 12.99,
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Dystopian Fiction',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-fiction-4',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      desc: 'Between life and death is a library where every book offers a chance to experience the other lives you could have lived.',
      price: 19.99,
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Contemporary Fiction',
      rating: 4.7,
      isDummy: true
    },
    {
      id: 'dummy-fiction-5',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      desc: 'A transformative story of Santiago, an Andalusian shepherd boy who travels from Spain to Egypt in search of his personal legend.',
      price: 15.00,
      cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Philosophical Fiction',
      rating: 4.8,
      isDummy: true
    },
    {
      id: 'dummy-fiction-6',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      desc: 'Bilbo Baggins is swept into an epic adventure to reclaim the lost kingdom of Erebor from the fearsome dragon Smaug.',
      price: 22.50,
      cover: 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Fantasy Fiction',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-fiction-7',
      title: 'Dune',
      author: 'Frank Herbert',
      desc: 'Set on the desert planet Arrakis, Dune tells the story of Paul Atreides as he navigates destiny, ecology, and interstellar politics.',
      price: 24.00,
      cover: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Sci-Fi Fiction',
      rating: 4.8,
      isDummy: true
    },
    {
      id: 'dummy-fiction-8',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      desc: 'The witty and sparkling romantic classic exploring pride, misunderstanding, and love between Elizabeth Bennet and Mr. Darcy.',
      price: 11.99,
      cover: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Romance Fiction',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-fiction-9',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      desc: 'Holden Caulfield narrates his unforgettable journey through New York City, wrestling with phoniness and growing up.',
      price: 14.50,
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Classic Fiction',
      rating: 4.6,
      isDummy: true
    },
    {
      id: 'dummy-fiction-10',
      title: 'Brave New World',
      author: 'Aldous Huxley',
      desc: 'A prophetic masterpiece depicting a future world where technology, conditioning, and consumerism have replaced human freedom.',
      price: 16.00,
      cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
      category: 'fiction',
      tag: 'Sci-Fi Fiction',
      rating: 4.7,
      isDummy: true
    }
  ],

  'non-fiction': [
    {
      id: 'dummy-nonfic-1',
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      desc: 'A bold, groundbreaking narrative exploring how Homo sapiens came to dominate planet Earth.',
      price: 21.00,
      cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80',
      category: 'non-fiction',
      tag: 'History / Science',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-nonfic-2',
      title: 'Atomic Habits',
      author: 'James Clear',
      desc: 'An easy and proven way to build good habits and break bad ones using tiny 1% daily changes.',
      price: 18.00,
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80',
      category: 'non-fiction',
      tag: 'Self-Help',
      rating: 5.0,
      isDummy: true
    },
    {
      id: 'dummy-nonfic-3',
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      desc: 'Nobel laureate Daniel Kahneman reveals the two systems that drive the way we think and make decisions.',
      price: 17.50,
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80',
      category: 'non-fiction',
      tag: 'Psychology',
      rating: 4.8,
      isDummy: true
    }
  ],

  children: [
    {
      id: 'dummy-child-1',
      title: 'The Little Prince',
      author: 'Antoine de Saint-Exupéry',
      desc: 'A poetic tale of a young prince who visits various planets in space, addressing themes of loneliness and love.',
      price: 10.99,
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=80',
      category: 'children',
      tag: 'Children Literature',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-child-2',
      title: 'Matilda',
      author: 'Roald Dahl',
      desc: 'Matilda is a brilliant girl with wondrous powers who stands up to bullies and the wicked Miss Trunchbull.',
      price: 9.99,
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=80',
      category: 'children',
      tag: 'Children Story',
      rating: 4.9,
      isDummy: true
    }
  ],

  textbooks: [
    {
      id: 'dummy-tb-1',
      title: 'Advanced Mathematics (Grade 10 & 11)',
      author: 'Oxford Academic Press',
      desc: 'Complete syllabus coverage with solved equations, trigonometry, algebra proofs, and geometry theorems.',
      price: 28.00,
      cover: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80',
      category: 'textbooks',
      tag: 'Mathematics',
      rating: 4.8,
      isDummy: true
    },
    {
      id: 'dummy-tb-2',
      title: 'Comprehensive Physics: Principles & Problems',
      author: 'Cambridge University Press',
      desc: 'Rigorous exploration of mechanics, electromagnetism, wave optics, and modern nuclear physics.',
      price: 32.50,
      cover: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80',
      category: 'textbooks',
      tag: 'Physics',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-tb-3',
      title: 'Modern Organic & Inorganic Chemistry',
      author: 'Pearson Education',
      desc: 'Detailed textbook covering chemical bonding, periodic trends, reaction mechanisms, and laboratory practicals.',
      price: 30.00,
      cover: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80',
      category: 'textbooks',
      tag: 'Chemistry',
      rating: 4.7,
      isDummy: true
    },
    {
      id: 'dummy-tb-4',
      title: 'General Biology: Concepts & Connections',
      author: 'McGraw-Hill Education',
      desc: 'In-depth guide to cellular biology, genetics, human physiology, ecology, and evolutionary science.',
      price: 29.50,
      cover: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=600&auto=format&fit=crop&q=80',
      category: 'textbooks',
      tag: 'Biology',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-tb-5',
      title: 'Computer Science & Python Programming',
      author: 'MIT Press Academic',
      desc: 'Fundamentals of algorithms, data structures, object-oriented programming, and computational thinking.',
      price: 34.00,
      cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
      category: 'textbooks',
      tag: 'Computer Science',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-tb-6',
      title: 'World History & Global Civilizations',
      author: 'National Geographic Learning',
      desc: 'Chronological exploration of ancient empires, the industrial revolution, and modern geopolitical history.',
      price: 26.00,
      cover: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=600&auto=format&fit=crop&q=80',
      category: 'textbooks',
      tag: 'History',
      rating: 4.6,
      isDummy: true
    },
    {
      id: 'dummy-tb-7',
      title: 'Economics & Financial Accounting (Grade 12)',
      author: 'Oxford Publishing',
      desc: 'Microeconomics, macroeconomic policies, corporate balance sheets, and market equilibrium principles.',
      price: 27.50,
      cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
      category: 'textbooks',
      tag: 'Economics',
      rating: 4.8,
      isDummy: true
    },
    {
      id: 'dummy-tb-8',
      title: 'English Grammar, Composition & Literature',
      author: 'Cambridge Scholars',
      desc: 'Advanced vocabulary, essay writing techniques, linguistic analysis, and classic prose comprehension.',
      price: 22.00,
      cover: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&auto=format&fit=crop&q=80',
      category: 'textbooks',
      tag: 'English',
      rating: 4.7,
      isDummy: true
    }
  ],

  'past-papers': [
    {
      id: 'dummy-pp-1',
      title: 'O & A Levels 10-Year Solved Past Papers (2015-2025)',
      author: 'Cambridge Assessment International',
      desc: 'Complete decade of solved past exam papers with examiner marking schemes and step-by-step model solutions.',
      price: 24.99,
      cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80',
      category: 'past-papers',
      tag: 'O/A Levels',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-pp-2',
      title: 'Matric & Intermediate Board Solved Papers Series',
      author: 'Federal & Provincial Exam Cell',
      desc: '5 years of solved objective & subjective board papers for Physics, Chemistry, Biology and Math.',
      price: 18.50,
      cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80',
      category: 'past-papers',
      tag: 'Board Exams',
      rating: 4.8,
      isDummy: true
    },
    {
      id: 'dummy-pp-3',
      title: 'IGCSE Mathematics Extended Past Papers & Solutions',
      author: 'Edexcel Publications',
      desc: 'Topical and yearly papers for Paper 2 and Paper 4 with detailed graphical solutions and formulas.',
      price: 21.00,
      cover: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80',
      category: 'past-papers',
      tag: 'IGCSE',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-pp-4',
      title: 'MDCAT 15 Years Topical Past Papers & Answers',
      author: 'Medical Entry Test Cell',
      desc: 'High-yield past entrance exam questions categorized by chapter with detailed biological rationale.',
      price: 26.50,
      cover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
      category: 'past-papers',
      tag: 'Medical Entry',
      rating: 5.0,
      isDummy: true
    },
    {
      id: 'dummy-pp-5',
      title: 'ECAT Engineering Entry Test Solved Past Papers',
      author: 'Engineering Exam Council',
      desc: 'Over 3,000 solved MCQs from past engineering university entrance tests with shortcut tricks.',
      price: 25.00,
      cover: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
      category: 'past-papers',
      tag: 'Engineering',
      rating: 4.8,
      isDummy: true
    },
    {
      id: 'dummy-pp-6',
      title: 'SAT Subject Test Real Exam Past Papers & Explanations',
      author: 'College Board Archives',
      desc: 'Official retired exam papers with full answer explanations and scaled score conversion charts.',
      price: 28.00,
      cover: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
      category: 'past-papers',
      tag: 'SAT Archives',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-pp-7',
      title: 'CSS Competitive Exam Solved Papers (2018-2025)',
      author: 'Civil Service Bureau',
      desc: 'Complete analysis of past essay prompts, general knowledge, current affairs, and Islamiat papers.',
      price: 22.50,
      cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',
      category: 'past-papers',
      tag: 'CSS Exams',
      rating: 4.7,
      isDummy: true
    },
    {
      id: 'dummy-pp-8',
      title: 'GCSE Physics & Chemistry Model Question Papers',
      author: 'Oxford Board Exam Series',
      desc: 'Specimen papers, grading criteria, equation sheets, and common exam pitfall analysis.',
      price: 19.99,
      cover: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80',
      category: 'past-papers',
      tag: 'GCSE Science',
      rating: 4.8,
      isDummy: true
    }
  ],

  'test-prep': [
    {
      id: 'dummy-tp-1',
      title: 'SAT Official Comprehensive Study & Practice Guide 2026',
      author: 'The Princeton Review',
      desc: 'Digital SAT mastery: Reading, Writing, Math strategies, 8 full-length simulated diagnostic tests.',
      price: 36.00,
      cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80',
      category: 'test-prep',
      tag: 'SAT Prep',
      rating: 5.0,
      isDummy: true
    },
    {
      id: 'dummy-tp-2',
      title: 'GRE Complete Prep: Quant, Verbal & Analytical Writing',
      author: 'Kaplan Test Prep',
      desc: 'Proven score-raising strategies, 6 practice tests, and 2,000+ high-frequency GRE vocabulary flashcards.',
      price: 38.50,
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&auto=format&fit=crop&q=80',
      category: 'test-prep',
      tag: 'GRE Prep',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-tp-3',
      title: 'IELTS Academic 18: Practice Tests with Audio & Keys',
      author: 'Cambridge University Press',
      desc: 'Authentic exam papers providing authentic examination practice for Band 8+ listening, reading, writing & speaking.',
      price: 29.99,
      cover: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80',
      category: 'test-prep',
      tag: 'IELTS Academic',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-tp-4',
      title: 'TOEFL iBT Premier Prep with Online Resources',
      author: 'ETS Official Guide',
      desc: 'Comprehensive preparation for internet-based TOEFL with 4 real interactive practice tests and scoring criteria.',
      price: 31.00,
      cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=80',
      category: 'test-prep',
      tag: 'TOEFL iBT',
      rating: 4.8,
      isDummy: true
    },
    {
      id: 'dummy-tp-5',
      title: 'GMAT Ultimate Strategy Guide & 10 Mock Tests',
      author: 'Manhattan Prep',
      desc: 'Master integrated reasoning, quantitative problem solving, and data sufficiency for top business schools.',
      price: 42.00,
      cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
      category: 'test-prep',
      tag: 'GMAT Prep',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-tp-6',
      title: 'MDCAT Super Cracker Guide: Biology, Chem & Physics',
      author: 'KIPS Publications',
      desc: 'Quick revision formulas, mind maps, high-yield concept summaries and 5,000+ unit practice MCQs.',
      price: 28.50,
      cover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
      category: 'test-prep',
      tag: 'Medical Test',
      rating: 4.9,
      isDummy: true
    },
    {
      id: 'dummy-tp-7',
      title: 'NTS / NAT General Comprehensive Preparation Book',
      author: 'Dogar Brothers Publishing',
      desc: 'Analytical reasoning, quantitative math, English verbal comprehension, and subject aptitude coaching.',
      price: 19.50,
      cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',
      category: 'test-prep',
      tag: 'NTS / NAT',
      rating: 4.7,
      isDummy: true
    },
    {
      id: 'dummy-tp-8',
      title: 'CSS Complete Compulsory Subjects Preparation Guide',
      author: 'Caravan Book House',
      desc: 'Master Essay Writing, Pakistan Affairs, Current Affairs, General Science & Ability with top scorer notes.',
      price: 35.00,
      cover: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
      category: 'test-prep',
      tag: 'CSS Prep',
      rating: 4.8,
      isDummy: true
    }
  ],

  'writing-tools': [
    {
      id: 'dummy-wt-1',
      title: 'Parker Matte Black Fountain Pen Set',
      author: 'Parker Stationery',
      desc: 'Fine nib writing fountain pen with stainless steel nib and premium refillable ink reservoir.',
      price: 25.00,
      cover: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=80',
      category: 'writing-tools',
      tag: 'Luxury Pen',
      rating: 4.9,
      isDummy: true
    }
  ],

  calculators: [
    {
      id: 'dummy-calc-1',
      title: 'Casio fx-991EX ClassWiz Scientific Calculator',
      author: 'Casio Electronics',
      desc: '552 functions, high-resolution LCD display, solar plus battery powered, ideal for university exams.',
      price: 29.99,
      cover: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&auto=format&fit=crop&q=80',
      category: 'calculators',
      tag: 'Electronics',
      rating: 5.0,
      isDummy: true
    }
  ],

  'school-bags': [
    {
      id: 'dummy-bag-1',
      title: 'Ergonomic Waterproof Student Backpack',
      author: 'TravelGear Co.',
      desc: 'Multi-compartment 25L lightweight backpack with laptop sleeve and padded shoulder straps.',
      price: 34.50,
      cover: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
      category: 'school-bags',
      tag: 'Accessories',
      rating: 4.8,
      isDummy: true
    }
  ]
};

export const ALL_DUMMY_BOOKS = Object.values(DUMMY_BOOKS_BY_CATEGORY).flat();
