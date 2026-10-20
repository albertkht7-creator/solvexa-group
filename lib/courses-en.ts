import type { Course } from "@/lib/courses";

/** Polish slug -> English slug. */
export const courseSlugMap: Record<string, string> = {
  "cold-calling": "cold-calling",
  prospecting: "prospecting",
  "pierwsze-spotkanie": "needs-discovery",
  "praca-w-sprzedazy": "sales-career",
  "zmien-swoje-zycie-zawodowe": "career-change",
};

export const coursesEn: Course[] = [
  {
    slug: "cold-calling",
    title: "Cold Calling",
    subtitle: "Stop being afraid and start selling",
    description:
      "Your sales reps will learn to call without fear and with a clear plan. Fewer rejections, more booked meetings - and a measurable impact on your company's revenue.",
    tags: ["Cold Calling", "Scripts", "Objections", "B2B", "Prospecting"],
    modules: [
      {
        title: "Mindset & preparation",
        lessons: [
          "Why cold calling still works",
          "Breaking the barrier of the first call",
          "Researching a prospect before the call",
        ],
      },
      {
        title: "Call structure",
        lessons: [
          "The first 15 seconds - a hook that holds attention",
          "Value pitch without hard-selling",
          "Qualifying through questions",
        ],
      },
      {
        title: "Objections & closing",
        lessons: [
          "Top 10 objections and how to handle them",
          "Booking a meeting as the call goal",
          "Follow-up after a cold call",
        ],
      },
    ],
    forWhom: [
      {
        title: "B2B sales reps",
        description: "You want to make more calls, and make them count.",
      },
      {
        title: "SDRs / BDRs",
        description: "You're building a pipeline from scratch and need a structure.",
      },
      {
        title: "Business owners",
        description: "You sell your own services and want to do it with more confidence.",
      },
    ],
  },
  {
    slug: "prospecting",
    title: "Prospecting",
    subtitle: "How to find the right clients",
    description:
      "Your team will stop wasting time on the wrong leads. They'll learn to find companies that can actually buy, reach the right decision-makers, and build a pipeline that consistently converts.",
    tags: ["LinkedIn", "ICP", "Pipeline", "Outreach", "Qualification"],
    modules: [
      {
        title: "Defining your ICP",
        lessons: [
          "Ideal customer profile - how to build one",
          "Database segmentation",
          "Lead prioritisation",
        ],
      },
      {
        title: "Channels & tools",
        lessons: [
          "LinkedIn Sales Navigator in practice",
          "Cold email that gets replies",
          "Outreach automation tools",
        ],
      },
      {
        title: "Pipeline management",
        lessons: [
          "How to measure prospecting effectiveness",
          "Work rhythm - how many contacts per day",
          "CRM in service of prospecting",
        ],
      },
    ],
    forWhom: [
      {
        title: "Account Executives",
        description: "You own your pipeline.",
      },
      {
        title: "Sales managers",
        description: "You want to standardise how your team finds potential business.",
      },
      {
        title: "Founders",
        description: "You're looking for the first 10 customers for your product.",
      },
    ],
  },
  {
    slug: "needs-discovery",
    title: "Client Needs Assessment",
    subtitle: "How to run a proper needs assessment in practice",
    description:
      "The first meeting decides everything. Learn how to ask the right questions so the client tells you exactly what they want to buy - and why.",
    tags: ["Needs Assessment", "Discovery", "Meeting", "B2B", "Questions"],
    modules: [
      {
        title: "Preparation & mindset",
        lessons: [
          "What NOT to do in a first meeting",
          "How to prepare for a specific client",
          "Building trust in the first few minutes",
        ],
      },
      {
        title: "Needs assessment in practice",
        lessons: [
          "Question framework - from broad to specific",
          "Open, probing and closing questions",
          "Active listening and what to do with it",
          "Uncovering the real problem behind the stated need",
        ],
      },
      {
        title: "Closing the meeting with a next step",
        lessons: [
          "Summarising needs - how to do it right",
          "Agreeing on next steps without pressure",
          "Follow-up that continues the conversation",
        ],
      },
    ],
    forWhom: [
      {
        title: "B2B sales reps",
        description: "You want to stop guessing what the client needs.",
      },
      {
        title: "Account Executives",
        description: "Your demo is good, but your discovery meetings are weak.",
      },
      {
        title: "Founders",
        description: "You run client conversations yourself and want to do it more effectively.",
      },
    ],
  },
  {
    slug: "sales-career",
    title: "Working in Sales",
    subtitle: "How to land your dream sales job",
    description:
      "Learn how to get a job in sales - even without experience. CV, job interview and salary negotiation, step by step.",
    tags: ["CV", "Recruitment", "Negotiations", "Career", "Onboarding"],
    modules: [
      {
        title: "Positioning & CV",
        lessons: [
          "How sales recruiters think",
          "A CV that passes ATS",
          "LinkedIn as a job search tool",
        ],
      },
      {
        title: "The job interview",
        lessons: [
          "Most common questions and model answers",
          "Sales case study - how to solve it",
          "Questions a strong candidate asks",
        ],
      },
      {
        title: "Offer & onboarding",
        lessons: [
          "Salary negotiation without fear",
          "How to evaluate a company before accepting",
          "First 90 days in a new sales role",
        ],
      },
    ],
    forWhom: [
      {
        title: "Juniors entering sales",
        description: "You want to start a career in B2B.",
      },
      {
        title: "Experienced reps looking for a change",
        description: "You get results but want a better employer.",
      },
      {
        title: "People from other industries",
        description: "You're moving into sales and need a roadmap.",
      },
    ],
  },
  {
    slug: "career-change",
    title: "Change Your Professional Life",
    subtitle: "I didn't read about this in a book - I lived it",
    description:
      "I used to be a hairdresser - today I am Sales Leader at Revolut Business. This course is for people who are stuck and don't know they can do something completely different.",
    tags: ["Career Change", "Sales", "Growth", "Mindset", "Starting Over"],
    modules: [
      {
        title: "How to know it's time for a change",
        lessons: [
          "Signs you've been stuck too long",
          "Fear of change - what's really blocking you",
          "My story: hairdresser, vans, real estate - why I left",
        ],
      },
      {
        title: "Finding your path",
        lessons: [
          "How to assess your skills without a CV",
          "Transferable skills - what you have but can't see",
          "Why sales is a path worth considering",
          "What working in B2B sales actually looks like",
        ],
      },
      {
        title: "Getting into sales without experience",
        lessons: [
          "What you need to know before sending your first CV",
          "How to talk to recruiters coming from a different industry",
          "First weeks in a new role - how not to drown",
        ],
      },
      {
        title: "First step without burning bridges",
        lessons: [
          "How to test a new path before quitting your job",
          "90-day action plan",
          "Mistakes people make when changing careers",
        ],
      },
    ],
    forWhom: [
      {
        title: "People who feel stuck",
        description: "You know you want something different, but you don't know where to start.",
      },
      {
        title: "Workers from other industries",
        description: "You work in a manual or service job and are considering a move into sales.",
      },
      {
        title: "Anyone afraid of change",
        description: "You have doubts, but somewhere deep down you feel it's time for a change.",
      },
    ],
  },
];
