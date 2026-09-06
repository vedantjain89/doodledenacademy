export const PILLARS = [
  {
    id: 'creativity',
    name: 'Creativity & Arts',
    tagline: 'Paint, Sculpt & Craft Tomorrow',
    color: 'coral',
    bgLight: 'bg-rose-50',
    border: 'border-rose-200',
    accent: 'bg-[#FF6B6B]',
    text: 'text-[#FF6B6B]',
    shadow: 'shadow-bubbly-coral',
    description: 'Nurturing limitless imagination with hands-on crafts, clay modeling, canvas painting, and DIY sensory explorations.',
    icon: 'Palette'
  },
  {
    id: 'movement',
    name: 'Movement & Sports',
    tagline: 'Agility, Balance & Active Joy',
    color: 'yellow',
    bgLight: 'bg-amber-50',
    border: 'border-amber-200',
    accent: 'bg-[#FFCA28]',
    text: 'text-[#D97706]',
    shadow: 'shadow-bubbly-yellow',
    description: 'Building strength, posture, and coordination through gymnastics basics, obstacle courses, kids yoga, and team games.',
    icon: 'Activity'
  },
  {
    id: 'future-skills',
    name: 'Future Skills',
    tagline: 'Robotics, AI Basics & STEM Fun',
    color: 'teal',
    bgLight: 'bg-teal-50',
    border: 'border-teal-200',
    accent: 'bg-[#14B8A6]',
    text: 'text-[#0D9488]',
    shadow: 'shadow-bubbly-teal',
    description: 'Demystifying technology with screen-smart robotics, tactile logic puzzles, beginner AI models, and tinkering labs.',
    icon: 'Cpu'
  },
  {
    id: 'performing-arts',
    name: 'Performing Arts',
    tagline: 'Theater, Music & Expressive Dance',
    color: 'purple',
    bgLight: 'bg-purple-50',
    border: 'border-purple-200',
    accent: 'bg-[#8B5CF6]',
    text: 'text-[#7C3AED]',
    shadow: 'shadow-bubbly-purple',
    description: 'Unleashing stage confidence, rhythm, speech, and emotional expression through drama, vocal play, and movement.',
    icon: 'Sparkles'
  }
];

export const PROGRAMS = [
  // CREATIVITY
  {
    id: 'art-craft-diy',
    title: 'Master Crafters & DIY Studio',
    pillarId: 'creativity',
    ageGroup: 'all',
    ageRange: 'Ages 4–11 yrs',
    badge: 'Most Popular',
    summary: 'From pottery wheel experiments and recycled art to 3D paper crafts and acrylic masterpieces.',
    highlights: [
      'Clay modeling & pottery basics',
      'Canvas & mixed media painting',
      'Upcycled DIY invention projects',
      'Origami & 3D paper crafts'
    ],
    skillsLearned: ['Fine Motor Precision', 'Visual Spatial Awareness', 'Patience & Focus'],
    timing: 'Tue & Thu • 4:00 PM – 5:30 PM',
    mentorRatio: '1:6 mentor ratio'
  },
  {
    id: 'sensory-toddler-art',
    title: 'Toddler Sensory & Messy Art',
    pillarId: 'creativity',
    ageGroup: 'toddlers',
    ageRange: 'Ages 2–4 yrs',
    badge: 'Toddler Special',
    summary: 'Non-toxic finger paints, edible playdough, sand textures, and sensory tactile exploration for tiny artists.',
    highlights: [
      '100% safe, food-grade materials',
      'Tactile stimulus & color recognition',
      'Gentle parent-child bonding slots',
      'Mess-free cleanup guarantee'
    ],
    skillsLearned: ['Sensory Processing', 'Hand-Eye Coordination', 'Emotional Calm'],
    timing: 'Mon & Wed • 10:30 AM – 11:45 AM',
    mentorRatio: '1:4 mentor ratio'
  },

  // MOVEMENT
  {
    id: 'gymnastics-agility',
    title: 'Junior Gymnastics & Obstacle Arena',
    pillarId: 'movement',
    ageGroup: 'explorers',
    ageRange: 'Ages 4–8 yrs',
    badge: 'High Energy',
    summary: 'Soft-mat tumbling, balance beams, ninja obstacle courses, and vaulting drills to build athletic confidence.',
    highlights: [
      'Padded shock-absorbing floors',
      'Balance beam & cartwheel progressions',
      'Fun ninja agility obstacle trails',
      'Strength, flexibility & posture building'
    ],
    skillsLearned: ['Body Balance', 'Core Strength', 'Spatial Confidence'],
    timing: 'Mon, Wed & Fri • 4:30 PM – 5:45 PM',
    mentorRatio: '1:7 mentor ratio'
  },
  {
    id: 'kids-yoga-mindfulness',
    title: 'Playful Yoga & Animal Movement',
    pillarId: 'movement',
    ageGroup: 'all',
    ageRange: 'Ages 3–11 yrs',
    badge: 'Calm & Balance',
    summary: 'Breathing games, playful animal postures (Lion roar, Tree stance), and mindfulness calming techniques.',
    highlights: [
      'Story-based yoga adventures',
      'Breath control & emotional grounding',
      'Posture correction for school kids',
      'Interactive movement games'
    ],
    skillsLearned: ['Emotional Regulation', 'Flexibility', 'Spinal Health'],
    timing: 'Sat & Sun • 9:00 AM – 10:15 AM',
    mentorRatio: '1:8 mentor ratio'
  },

  // FUTURE SKILLS
  {
    id: 'ai-robotics-explorers',
    title: 'Young Coders & Robotics Lab',
    pillarId: 'future-skills',
    ageGroup: 'creators',
    ageRange: 'Ages 6–11 yrs',
    badge: 'Future Ready',
    summary: 'Hands-on modular bot building, mechanical gear assemblies, intuitive visual coding, and introductory AI concepts.',
    highlights: [
      'Build walking & sensor-guided robots',
      'Visual drag-and-drop block coding',
      'How AI identifies shapes & sounds',
      'Hands-on problem solving missions'
    ],
    skillsLearned: ['Algorithmic Thinking', 'Engineering Intuition', 'Curiosity for Tech'],
    timing: 'Fri & Sat • 5:00 PM – 6:30 PM',
    mentorRatio: '1:5 mentor ratio'
  },
  {
    id: 'stem-tinker-lab',
    title: 'Little Inventors & STEM Sparks',
    pillarId: 'future-skills',
    ageGroup: 'explorers',
    ageRange: 'Ages 4–7 yrs',
    badge: 'Hands-On STEM',
    summary: 'Magnets, simple electrical circuits with playdough, water density magic, and mini catapult building.',
    highlights: [
      'Zero boring lectures — 100% experimentation',
      'Kid-safe snap circuits & magnets',
      'Rocket launchers & marble rollercoasters',
      'Fosters natural scientific curiosity'
    ],
    skillsLearned: ['Cause & Effect Thinking', 'Scientific Observation', 'Teamwork'],
    timing: 'Tue & Thu • 5:30 PM – 6:45 PM',
    mentorRatio: '1:6 mentor ratio'
  },

  // PERFORMING ARTS
  {
    id: 'kids-theater-storytelling',
    title: 'Drama, Puppetry & Public Speaking',
    pillarId: 'performing-arts',
    ageGroup: 'all',
    ageRange: 'Ages 4–11 yrs',
    badge: 'Confidence Booster',
    summary: 'Overcome stage shyness! Voice modulation, costume roleplay, puppet theater, and spontaneous storytelling.',
    highlights: [
      'Overcoming stage freight & introversion',
      'Speech clarity & dynamic voice projection',
      'Puppet crafting & character improvisation',
      'Quarterly mini-stage productions'
    ],
    skillsLearned: ['Public Speaking', 'Social Empathy', 'Vocal Articulation'],
    timing: 'Wed & Fri • 5:00 PM – 6:30 PM',
    mentorRatio: '1:7 mentor ratio'
  },
  {
    id: 'rhythm-music-dance',
    title: 'Rhythm Beats & Creative Movement',
    pillarId: 'performing-arts',
    ageGroup: 'all',
    ageRange: 'Ages 3–10 yrs',
    badge: 'Joyful Expression',
    summary: 'Djembe hand-drumming, xylophone patterns, freestyle movement, and contemporary folk fusion for kids.',
    highlights: [
      'Percussion instruments & beat synchronization',
      'Freestyle dance & posture alignment',
      'Musical ear training through games',
      'Fun, energetic choreography'
    ],
    skillsLearned: ['Auditory Processing', 'Rhythmic Sense', 'Physical Expression'],
    timing: 'Sat & Sun • 11:00 AM – 12:30 PM',
    mentorRatio: '1:8 mentor ratio'
  }
];

export const SCHEDULE_DAYS = [
  {
    day: 'Weekdays (Mon – Fri)',
    slots: [
      { time: '10:00 AM – 11:30 AM', title: 'Toddler Playgroup & Sensory Art', age: 'Ages 2–4', pillar: 'Creativity' },
      { time: '03:30 PM – 04:45 PM', title: 'Junior Gymnastics & Obstacle Drills', age: 'Ages 4–8', pillar: 'Movement' },
      { time: '04:30 PM – 05:45 PM', title: 'Master Crafts, Pottery & DIY Studio', age: 'Ages 5–11', pillar: 'Creativity' },
      { time: '05:30 PM – 06:45 PM', title: 'Robotics & STEM Tinker Labs', age: 'Ages 6–11', pillar: 'Future Skills' },
      { time: '06:00 PM – 07:15 PM', title: 'Theater, Speech & Drama Studio', age: 'Ages 5–11', pillar: 'Performing Arts' }
    ]
  },
  {
    day: 'Weekends (Saturday & Sunday)',
    slots: [
      { time: '09:00 AM – 10:15 AM', title: 'Morning Yoga, Agility & Games', age: 'Ages 3–11', pillar: 'Movement' },
      { time: '10:30 AM – 12:00 PM', title: 'AI & Robotics Champions Bootcamp', age: 'Ages 6–11', pillar: 'Future Skills' },
      { time: '11:00 AM – 12:30 PM', title: 'Rhythm, Beats & Expressive Dance', age: 'Ages 3–10', pillar: 'Performing Arts' },
      { time: '03:30 PM – 05:00 PM', title: 'Open Canvas Painting & 3D Clay Lab', age: 'Ages 4–11', pillar: 'Creativity' },
      { time: '05:00 PM – 06:30 PM', title: 'Weekend Showcase & Story Circle', age: 'All Ages', pillar: 'Performing Arts' }
    ]
  }
];

export const STATS = [
  { value: '4 Pillars', label: 'Under One Safe Roof', sublabel: 'Arts, Sports, AI, Drama' },
  { value: '20+', label: 'Engaging Activities', sublabel: 'Zero screen fatigue' },
  { value: '1:6', label: 'Mentor to Child Ratio', sublabel: 'Individual caring focus' },
  { value: '100%', label: 'Hands-on Learning', sublabel: 'Learn through joyful play' }
];

export const TESTIMONIALS = [
  {
    name: 'Priyanka Sen',
    location: 'Morabadi, Ranchi',
    child: 'Mother of Aarav (6 yrs)',
    quote: 'Before Doodle Den, my evenings were spent driving between art class in Lalpur and gymnastics across town. Having robotics, theater, and sports in one vibrant place is a lifesaver. Aarav has blossomed!',
    rating: 5,
    tag: 'All-in-One Convenience'
  },
  {
    name: 'Dr. Rohit Verma',
    location: 'Kanke Road, Ranchi',
    child: 'Father of Ananya (8 yrs)',
    quote: 'Ananya was terrified of speaking on stage. After 3 months in the Drama & Storytelling den, she confidently hosted her school assembly. The mentors here understand child psychology deeply.',
    rating: 5,
    tag: 'Confidence Transformation'
  },
  {
    name: 'Neha Agrawal',
    location: 'Ashok Nagar, Ranchi',
    child: 'Mother of Kabir (3.5 yrs)',
    quote: 'The toddler sensory and movement classes are exceptional. Clean, padded floors, non-toxic colors, and super patient teachers. It is truly the best kids center in Ranchi!',
    rating: 5,
    tag: 'Toddler Friendly'
  }
];

export const FAQS = [
  {
    question: 'What makes Doodle Den Academy different from regular tuition or single-activity classes?',
    answer: 'Traditional hobby classes isolate skills (just art or just dance), requiring parents to travel across Ranchi. Doodle Den provides an integrated, holistic ecosystem where children explore Creativity, Physical Movement, Future AI/Robotics, and Performing Arts under one secure roof. This prevents burnout and exposes kids to diverse talents.'
  },
  {
    question: 'What age groups are welcome at Doodle Den?',
    answer: 'We cater to children from ages 2 to 11 years! Programs are segmented into age-appropriate developmental groups: Toddlers (2–4 yrs), Junior Explorers (5–7 yrs), and Senior Creators (8–11 yrs).'
  },
  {
    question: 'How do I book a Free Trial Class?',
    answer: 'Simply click the "Book a Free Trial" button on this page, choose your preferred pillar and date, or message us directly on WhatsApp. Our counselor will schedule a 45-minute orientation trial session for your child.'
  },
  {
    question: 'What is the teacher-to-child ratio?',
    answer: 'We maintain a strict maximum ratio of 1 mentor for every 6 to 8 children (and 1:4 for toddlers). This guarantees that every child receives individualized attention, encouragement, and safety guidance.'
  },
  {
    question: 'Can we customize our child’s weekly program combination?',
    answer: 'Yes! We offer flexible Multi-Pillar Passes (e.g. 2 days of Robotics & STEM + 2 days of Gymnastics & Art) so parents can tailor the schedule to their child’s natural curiosity and school routine.'
  },
  {
    question: 'Where in Ranchi is Doodle Den Academy located?',
    answer: 'Doodle Den Academy is located at Dwarka Path, near Jain Dharamshala, Opp. Gaushala, Harmu Road, Ranchi. Reach out to our team via WhatsApp or phone for exact landmark directions and campus tour slots!'
  }
];

export const GALLERY_ITEMS = [
  {
    title: 'Clay Sculpting & Wheel Wonders',
    pillar: 'Creativity',
    category: 'creativity',
    color: 'bg-rose-100 text-rose-800',
    description: 'Kids shaping animal figures and functional bowls with eco-clay.'
  },
  {
    title: 'Obstacle Course & Balance Beam',
    pillar: 'Movement',
    category: 'movement',
    color: 'bg-amber-100 text-amber-800',
    description: 'Developing agility, balance, and quick reflexes on soft mats.'
  },
  {
    title: 'Robo-Maze Sensor Trials',
    pillar: 'Future Skills',
    category: 'future-skills',
    color: 'bg-teal-100 text-teal-800',
    description: 'Junior engineers programming bots to navigate obstacle mazes.'
  },
  {
    title: 'Puppet Drama & Character Play',
    pillar: 'Performing Arts',
    category: 'performing-arts',
    color: 'bg-purple-100 text-purple-800',
    description: 'Bringing whimsical storybook characters to life on our mini stage.'
  },
  {
    title: 'Giant Canvas Splatter & Acrylics',
    pillar: 'Creativity',
    category: 'creativity',
    color: 'bg-rose-100 text-rose-800',
    description: 'Collaborative group murals that encourage joyful artistic expression.'
  },
  {
    title: 'Djembe Beats & Percussion Circle',
    pillar: 'Performing Arts',
    category: 'performing-arts',
    color: 'bg-purple-100 text-purple-800',
    description: 'Feeling the rhythm, counting tempos, and harmonizing with peers.'
  }
];

export const SAFETY_POINTS = [
  {
    title: 'Certified & Background-Verified Mentors',
    desc: 'Passionate educators trained in positive child reinforcement and early childhood safety.'
  },
  {
    title: 'Child-Safe, Non-Toxic Materials',
    desc: 'All paints, glues, clays, and STEM kits are 100% lead-free, non-toxic, and safety-certified.'
  },
  {
    title: '24/7 CCTV & Secure Access Campus',
    desc: 'Every activity room is monitored with restricted entry and strict pickup verification.'
  },
  {
    title: 'Padded Shock-Absorbing Flooring',
    desc: 'High-density EVA foam and gymnastic mats in our movement zones prevent bruises and slips.'
  }
];
