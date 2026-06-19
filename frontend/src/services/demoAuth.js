export const DEMO_EMAIL = "demo@tindah.local";
export const DEMO_PASSWORD = "password123";
export const DEMO_TOKEN = "demo-token";

export const demoUser = {
  id: "demo-user",
  _id: "demo-user",
  name: "Demo User",
  email: DEMO_EMAIL,
  age: 29,
  gender: "other",
  interestedIn: ["woman", "man", "nonbinary", "other"],
  bio: "Using the demo account to explore the app.",
  interests: ["Coffee", "Travel", "Music"],
  jobTitle: "Product Designer",
  school: "Tindah Labs",
  photos: [],
  location: {
    type: "Point",
    coordinates: [0, 0],
  },
  preferences: {
    maxDistanceKm: 50,
    ageRange: {
      min: 18,
      max: 60,
    },
  },
  isVerified: true,
  lastActive: new Date().toISOString(),
};

export const demoProfiles = [
  {
    _id: "demo-profile-1",
    id: "demo-profile-1",
    name: "Maya",
    age: 27,
    bio: "Weekend markets, live music, and strong coffee.",
    interests: ["Live music", "Markets", "Coffee"],
    jobTitle: "Architect",
    school: "Design Academy",
    matchScore: 96,
    photos: [
      {
        url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
        isPrimary: true,
      },
    ],
  },
  {
    _id: "demo-profile-2",
    id: "demo-profile-2",
    name: "Jordan",
    age: 31,
    bio: "Trying every noodle shop in the city, one bowl at a time.",
    interests: ["Food", "Cycling", "Photography"],
    jobTitle: "Engineer",
    school: "City University",
    matchScore: 91,
    photos: [
      {
        url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
        isPrimary: true,
      },
    ],
  },
  {
    _id: "demo-profile-3",
    id: "demo-profile-3",
    name: "Anika",
    age: 25,
    bio: "Bookshops, gallery nights, and short trips with no agenda.",
    interests: ["Books", "Art", "Travel"],
    jobTitle: "Curator",
    school: "Arts Institute",
    matchScore: 88,
    photos: [
      {
        url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
        isPrimary: true,
      },
    ],
  },
];

export const demoMatches = [
  {
    _id: "demo-match-1",
    users: [
      demoUser,
      {
        ...demoProfiles[0],
        _id: "demo-profile-1",
      },
    ],
    lastMessage: {
      text: "Coffee this weekend?",
    },
  },
];

export const demoMessages = [
  {
    _id: "demo-message-1",
    match: "demo-match-1",
    sender: "demo-profile-1",
    text: "Coffee this weekend?",
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
  },
  {
    _id: "demo-message-2",
    match: "demo-match-1",
    sender: "demo-user",
    text: "Yes. Saturday afternoon works.",
    createdAt: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
  },
];

export function isDemoCredentials(email, password) {
  return email?.toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD;
}

export function isDemoToken(token) {
  return token === DEMO_TOKEN;
}
