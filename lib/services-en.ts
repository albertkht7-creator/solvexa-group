import type { ServicePageData } from "@/lib/services";

const consultFaq = {
  q: "Is the first consultation really free?",
  a: "Yes. 30 minutes, no cost, no obligation. Together we assess whether and how I can help. If I'm not the right fit, I'll tell you straight.",
};

export const recruitmentPageEn: ServicePageData = {
  path: "/en/sales-recruitment",
  metaTitle: "Sales Recruitment: Screening, Simulations, Onboarding",
  metaDescription:
    "B2B sales recruitment built on 500+ interviews: candidate profile, screening, sales simulations and onboarding. Hire salespeople who deliver results.",
  kicker: "Service",
  h1: "Sales Recruitment",
  lead: "I help companies hire salespeople who genuinely sell, not just interview well. I have conducted more than 500 recruitment interviews and I know who delivers results and who just makes a good impression.",
  ctaLabel: "Book a free consultation",
  ctaTopic: "Sales recruitment",
  serviceType: "Sales recruitment",
  schemaDescription:
    "B2B sales recruitment: preparing the candidate profile, CV selection and screening, job interviews, sales simulations, recommendation and onboarding.",
  forWhomHeading: "Who this service is for",
  forWhom: [
    {
      title: "Companies hiring their first salesperson",
      description:
        "You don't have a process or a candidate profile yet. We build them before you publish the job advert.",
    },
    {
      title: "Growing sales teams",
      description:
        "You're adding to the team and want your decisions based on facts, not on the impression a candidate makes in an interview.",
    },
    {
      title: "Managers and business owners",
      description:
        "Every other sales hire feels like a lottery. That's a sign you're assessing the wrong things.",
    },
  ],
  scopeHeading: "What the service includes",
  scope: [
    "Preparing the candidate profile",
    "CV selection and screening",
    "Job interviews",
    "Assessing a candidate's potential sales skills, including sales simulations",
    "Recommendation and onboarding",
  ],
  whyHeading: "Why this recruitment works differently",
  why: [
    {
      title: "I ask about numbers, not stories",
      text: "A salesperson who has really sold knows their target, their attainment and their conversion rate. Anyone who doesn't know their metrics can't tell you why they win or why they lose.",
    },
    {
      title: "I check how they talk about lost deals",
      text: "A good salesperson takes responsibility and draws a lesson. A weak one blames the customer, the price and the competition.",
    },
    {
      title: "A simulation instead of an interview alone",
      text: "The candidate performs a realistic sales task and I assess their behaviour. Only then can you see the difference between talking about selling and actually selling.",
    },
  ],
  postsHeading: "How I recruit salespeople: guides",
  posts: [
    {
      title: "Sales Recruitment: How to Spot a Good Salesperson",
      href: "/en/blog/how-to-spot-a-good-salesperson",
    },
    {
      title: "B2B Salesperson Profile: How to Build One Before You Recruit",
      href: "/en/blog/b2b-salesperson-profile",
    },
    {
      title: "Salesperson Interview Questions: 25 Questions and How to Assess the Answers",
      href: "/en/blog/salesperson-interview-questions",
    },
    {
      title: "Sales Rep Job Interview: A Step-by-Step Guide",
      href: "/en/blog/sales-rep-job-interview-step-by-step",
    },
    {
      title: "Sales Simulation in Recruitment: Scenario and Scorecard",
      href: "/en/blog/sales-simulation-in-recruitment",
    },
    {
      title: "How to Recruit Salespeople: The Process from Job Ad to the First 90 Days",
      href: "/en/blog/how-to-recruit-salespeople",
    },
  ],
  faq: [
    consultFaq,
    {
      q: "What does a sales simulation involve?",
      a: "The candidate is given a realistic situation, for example a cold call to a decision-maker at a mid-sized company, and has a dozen or so minutes for the conversation. I introduce typical objections and assess their behaviour against a scorecard: the opening, listening, handling objections and driving towards the next step.",
    },
    {
      q: "Do you also help after the hire?",
      a: "Yes. The recommendation and onboarding are part of the service, because a good hiring decision is only the beginning. The first few months decide whether the new salesperson delivers results.",
    },
    {
      q: "How are the scope and cost agreed?",
      a: "We agree the scope, timetable and terms after the free consultation, tailored to the role you want to fill and to your sales process.",
    },
  ],
  related: [
    { label: "B2B sales training", href: "/en/sales-training-b2b" },
    { label: "Sales mentoring", href: "/en/sales-mentoring" },
    { label: "Online courses", href: "/en#kursy" },
    { label: "All services", href: "/en#uslugi" },
  ],
};

export const trainingPageEn: ServicePageData = {
  path: "/en/sales-training-b2b",
  metaTitle: "B2B Sales Training for Teams and Salespeople",
  metaDescription:
    "Practical B2B sales training from 15 years of experience: cold calling, prospecting, objections, closing. Online or on site, for teams and salespeople.",
  kicker: "Service",
  h1: "B2B Sales Training",
  lead: "Practical training for salespeople and sales teams, focused on what genuinely affects results, from the first contact to closing the deal. No textbook theory, only methods that have proven themselves over 15 years in B2B sales.",
  ctaLabel: "Book a free consultation",
  ctaTopic: "Sales training",
  serviceType: "B2B sales training",
  schemaDescription:
    "Practical B2B sales training for salespeople and teams: process diagnosis, call scripts, objection handling, cold calling, prospecting and closing techniques.",
  forWhomHeading: "Who the training is for",
  forWhom: [
    {
      title: "B2B salespeople and SDRs/BDRs",
      description:
        "You want to make more calls and make them count, build your pipeline and run customer conversations with more confidence.",
    },
    {
      title: "Managers and sales teams",
      description:
        "You want to standardise how the team works, introduce shared scripts and improve the results of the whole group.",
    },
    {
      title: "Entrepreneurs and founders",
      description:
        "You sell your own services and want to do it more effectively, and to understand what it takes to grow your sales.",
    },
  ],
  scopeHeading: "What the training covers",
  scope: [
    "Diagnosis of your current sales processes",
    "Call scripts and conversation scenarios",
    "Handling customer objections",
    "Cold calling and prospecting",
    "Closing techniques",
  ],
  topicsHeading: "Training topics",
  topics: [
    {
      title: "Cold calling and prospecting",
      text: "How to call without fear, with a plan and a clear goal, and how to find companies that can actually buy.",
      href: "/en/sales-training-b2b/cold-calling",
    },
    {
      title: "AI in sales",
      text: "How to use AI not as a toy but as a tool that cuts working time and improves salespeople's results.",
      href: "/en/sales-training-b2b/ai-in-sales",
    },
    {
      title: "Training for startup founders",
      text: "How to talk to investors, win your first customers and avoid ruining the conversations that matter most.",
      href: "/en/sales-training-b2b/for-founders",
    },
  ],
  whyHeading: "Why I teach differently",
  why: [
    {
      title: "Only methods proven in practice",
      text: "Every technique I teach was first tested in my own sales work. If it doesn't work, it doesn't make it into the programme.",
    },
    {
      title: "Scripts, not generalities",
      text: "Instead of general advice you get scripts, conversation frameworks and processes that a team can put into practice in a week, not a quarter.",
    },
    {
      title: "I teach what I do every day",
      text: "I manage a sales team, so I talk about cold calling, objections and process from my own experience.",
    },
  ],
  postsHeading: "Sales guides",
  posts: [
    {
      title: "How to Choose a Sales Training Company: 6 Questions to Ask Before You Sign",
      href: "/en/blog/how-to-choose-a-sales-training-company",
    },
    {
      title: "5 Cold Calling Mistakes That Kill Your Results",
      href: "/en/blog/cold-calling-mistakes",
    },
    {
      title: "Whoever Asks the Questions Leads the Conversation",
      href: "/en/blog/whoever-asks-the-questions-leads",
    },
    {
      title: "You Lose the Sale in the First Two Minutes - and You Don't Even Notice",
      href: "/en/blog/you-lose-the-sale-in-the-first-two-minutes",
    },
    {
      title: "The Demo You Run Too Early Costs You the Deal",
      href: "/en/blog/the-demo-youre-doing-too-early",
    },
    {
      title: "How to Build a Pipeline That Actually Converts",
      href: "/en/blog/build-a-pipeline-that-converts",
    },
  ],
  faq: [
    {
      q: "Who is this training for?",
      a: "B2B salespeople, SDRs/BDRs, sales managers and entrepreneurs who sell their own services and want to do it more effectively.",
    },
    {
      q: "Is the training online or in person?",
      a: "Closed in-house training for companies can be held in person or remotely, agreed individually. Online courses are also available, which you work through at your own pace.",
    },
    {
      q: "Do you offer training for a whole sales team?",
      a: "Yes. I run workshops and training programmes designed for sales teams. Get in touch and we can discuss the scope, format and timetable.",
    },
    {
      q: "How quickly will I see the first results?",
      a: "The first changes in your approach and in your sales conversations show after just a few weeks of consistent work. Results in your pipeline follow after 1-2 months.",
    },
    consultFaq,
  ],
  related: [
    { label: "Sales recruitment", href: "/en/sales-recruitment" },
    { label: "Sales mentoring", href: "/en/sales-mentoring" },
    { label: "Online courses", href: "/en#kursy" },
    { label: "All services", href: "/en#uslugi" },
  ],
};

const trainingParent = { name: "B2B sales training", path: "/en/sales-training-b2b" };
const trainingRelated = (self: string) =>
  [
    { label: "B2B sales training", href: "/en/sales-training-b2b" },
    { label: "Cold calling", href: "/en/sales-training-b2b/cold-calling" },
    { label: "AI in sales", href: "/en/sales-training-b2b/ai-in-sales" },
    { label: "For founders", href: "/en/sales-training-b2b/for-founders" },
    { label: "Sales recruitment", href: "/en/sales-recruitment" },
  ].filter((r) => r.href !== self);

const trainingFaq = [
  {
    q: "Is the training online or in person?",
    a: "Closed in-house training for companies can be held in person or remotely, agreed individually.",
  },
  {
    q: "Do you offer training for a whole sales team?",
    a: "Yes. I run workshops and training programmes designed for sales teams. Get in touch and we can discuss the scope, format and timetable.",
  },
  {
    q: "How quickly will I see the first results?",
    a: "The first changes in your approach and in your sales conversations show after just a few weeks of consistent work. Results in your pipeline follow after 1-2 months.",
  },
  consultFaq,
];

export const trainingSubpagesEn: Record<string, ServicePageData> = {
  "cold-calling": {
    path: "/en/sales-training-b2b/cold-calling",
    parent: trainingParent,
    metaTitle: "Cold Calling Training for B2B Teams and Salespeople",
    metaDescription:
      "Cold calling training for B2B salespeople: the first 15 seconds, qualifying with questions, objections and booking meetings. 15 years of sales practice.",
    kicker: "Training",
    h1: "Cold Calling Training",
    lead: "Your salespeople will learn to call without fear, with a plan and a clear goal. Fewer rejections, more meetings booked and a measurable impact on your company's revenue.",
    ctaLabel: "Book a free consultation",
    ctaTopic: "Training: cold calling",
    serviceType: "Cold calling training",
    schemaDescription:
      "Cold calling training for B2B salespeople and sales teams: call structure, qualifying with questions, objection handling and booking meetings.",
    forWhomHeading: "Who this training is for",
    forWhom: [
      { title: "B2B salespeople", description: "You want to make more calls and make them count." },
      { title: "SDRs / BDRs", description: "You're building a pipeline from scratch and need a structure." },
      {
        title: "Entrepreneurs",
        description: "You sell your own services and want to do it with more confidence.",
      },
    ],
    scopeHeading: "What the training covers",
    scope: [
      "Why cold calling still works",
      "Breaking through the first-call barrier",
      "Researching the customer before the call",
      "The first 15 seconds: a hook that stops them",
      "Pitching value without selling",
      "Qualifying through questions",
      "The top 10 objections and how to overcome them",
      "Booking a meeting as the goal of the call",
      "Follow-up after a cold call",
    ],
    whyHeading: "What the training looks like",
    why: [
      {
        title: "Mindset and preparation",
        text: "We start with what holds most salespeople back: the barrier of the first call and poor preparation for the conversation.",
      },
      {
        title: "Call structure",
        text: "I teach a concrete structure: how to open, how to show value and how to qualify the customer with questions instead of talking about the product.",
      },
      {
        title: "Objections and closing",
        text: "The goal of a cold call is not to sell but to agree the next step. We practise the most common objections and closing the meeting.",
      },
    ],
    postsHeading: "Guides on cold calling and sales conversations",
    posts: [
      {
        title: "5 Cold Calling Mistakes That Kill Your Results",
        href: "/en/blog/cold-calling-mistakes",
      },
      {
        title: "Whoever Asks the Questions Leads the Conversation",
        href: "/en/blog/whoever-asks-the-questions-leads",
      },
      {
        title: "You Lose the Sale in the First Two Minutes - and You Don't Even Notice",
        href: "/en/blog/you-lose-the-sale-in-the-first-two-minutes",
      },
      {
        title: "'Too Expensive' Almost Never Means Too Expensive",
        href: "/en/blog/too-expensive-rarely-means-too-expensive",
      },
      {
        title: "How to Build a Pipeline That Actually Converts",
        href: "/en/blog/build-a-pipeline-that-converts",
      },
    ],
    faq: [
      {
        q: "How does the training differ from the online cold calling course?",
        a: "The online course is recorded material that you work through at your own pace. I deliver closed in-house training for a company live, in a format agreed individually, for the whole team.",
      },
      ...trainingFaq,
    ],
    related: [
      ...trainingRelated("/en/sales-training-b2b/cold-calling"),
      { label: "Online course: Cold Calling", href: "/en/courses/cold-calling" },
    ],
  },
  "ai-in-sales": {
    path: "/en/sales-training-b2b/ai-in-sales",
    parent: trainingParent,
    metaTitle: "AI in Sales Training for B2B Salespeople and Teams",
    metaDescription:
      "AI in sales training: prospecting, personalised outreach, call scripts, call recording analysis and task automation. Tools you can use straight away.",
    kicker: "Training",
    h1: "AI in Sales Training",
    lead: "Training for B2B salespeople and teams who want to use AI not as a toy but as a tool that genuinely cuts working time and improves results.",
    ctaLabel: "Book a free consultation",
    ctaTopic: "Training: AI in sales",
    serviceType: "Training in using AI in sales",
    schemaDescription:
      "Training in using AI in B2B sales: prospecting, personalised outreach, call scripts, call recording analysis and automation of repetitive tasks.",
    forWhomHeading: "Who this training is for",
    forWhom: [
      {
        title: "B2B salespeople",
        description: "You want to spend less time on tasks that don't sell and more on conversations with customers.",
      },
      {
        title: "Sales teams",
        description: "You want to roll out AI tools in your daily work together, rather than each person testing them alone.",
      },
      {
        title: "Sales managers",
        description: "You want your team to use AI in a way that improves results, not one that merely looks modern.",
      },
    ],
    scopeHeading: "What the training covers",
    scope: [
      "AI in prospecting and personalising outreach",
      "Generating and optimising call scripts with the help of AI",
      "Analysing call recordings and automating follow-ups",
      "Automating repetitive sales tasks",
      "Practical AI tools you can use straight away",
    ],
    postsHeading: "Related guides",
    posts: [
      {
        title: "How to Build a Pipeline That Actually Converts",
        href: "/en/blog/build-a-pipeline-that-converts",
      },
      {
        title: "5 Cold Calling Mistakes That Kill Your Results",
        href: "/en/blog/cold-calling-mistakes",
      },
      {
        title: "What I Learned Listening to Hundreds of My Salespeople's Calls",
        href: "/en/blog/what-i-learned-listening-to-hundreds-of-sales-calls",
      },
    ],
    faq: trainingFaq,
    related: trainingRelated("/en/sales-training-b2b/ai-in-sales"),
  },
  "for-founders": {
    path: "/en/sales-training-b2b/for-founders",
    parent: trainingParent,
    metaTitle: "Startup Founder Training: Pitch and First Customers",
    metaDescription:
      "Training for founders and co-founders: investor pitch, VC conversations, term sheet basics and selling to first customers without a sales team.",
    kicker: "Training",
    h1: "Training for Startup Founders",
    lead: "Training for co-founders and startup builders: how to talk to investors, win your first customers and avoid ruining the key conversations that decide the future of the project.",
    ctaLabel: "Book a free consultation",
    ctaTopic: "Training: startup founders",
    serviceType: "Sales training for startup founders",
    schemaDescription:
      "Training for startup founders: investor pitch, conversations with VCs and angels, term sheet negotiation basics and selling to first customers without a sales team.",
    forWhomHeading: "Who this training is for",
    forWhom: [
      {
        title: "Founders and co-founders",
        description: "You're looking for first customers for your product and don't have a sales team yet.",
      },
      {
        title: "Teams ahead of a funding round",
        description: "You're preparing for conversations with investors and want to build credibility and traction.",
      },
    ],
    scopeHeading: "What the training covers",
    scope: [
      "How to prepare and deliver an investor pitch",
      "Conversations with VCs and angels: what to say, what to avoid",
      "Term sheet negotiation: the basics without a lawyer",
      "How to sell to first customers without a sales team",
      "Building credibility and traction before a round",
    ],
    postsHeading: "Related guides",
    posts: [
      {
        title: "Whoever Asks the Questions Leads the Conversation",
        href: "/en/blog/whoever-asks-the-questions-leads",
      },
      {
        title: "The Demo You Run Too Early Costs You the Deal",
        href: "/en/blog/the-demo-youre-doing-too-early",
      },
      {
        title: "'Too Expensive' Almost Never Means Too Expensive",
        href: "/en/blog/too-expensive-rarely-means-too-expensive",
      },
    ],
    faq: trainingFaq,
    related: trainingRelated("/en/sales-training-b2b/for-founders"),
  },
};

export const mentoringPageEn: ServicePageData = {
  path: "/en/sales-mentoring",
  metaTitle: "Sales Mentoring and Consulting for Sales Leaders",
  metaDescription:
    "One-to-one sales mentoring for CEOs, sales managers and sales directors: process audit, Sales Playbook, live pipeline work, KPIs and team development.",
  kicker: "Service",
  h1: "Sales Mentoring and Consulting",
  lead: "Regular support for CEOs, sales managers and sales directors: diagnosis, an action plan, process improvement and team development, with clear accountability for results.",
  ctaLabel: "Book a free consultation",
  ctaTopic: "Consulting & Mentoring",
  serviceType: "Sales mentoring and consulting",
  schemaDescription:
    "One-to-one sales mentoring and consulting for CEOs, sales managers and sales directors: sales process audit, Sales Playbook, 1:1 sessions, work on a live pipeline and KPIs.",
  forWhomHeading: "Who this service is for",
  forWhom: [
    {
      title: "CEOs and business owners",
      description: "Sales in your company depend on you, and you want to build a process that works without you.",
    },
    {
      title: "Sales managers",
      description: "You lead a team and need a partner to analyse the pipeline, results and the development of your people.",
    },
    {
      title: "Sales directors",
      description: "You're scaling sales and want to improve the process, the KPIs and the way your team works.",
    },
  ],
  scopeHeading: "What the mentoring includes",
  scope: [
    "Sales process audit",
    "Building a Sales Playbook",
    "1:1 sessions weekly or monthly",
    "Work on a live pipeline",
    "KPIs and measuring results",
  ],
  whyHeading: "How mentoring differs from training",
  why: [
    {
      title: "We work on your data",
      text: "We analyse your specific situations, pipeline and results in real time, not generic examples.",
    },
    {
      title: "Regular meetings, not a one-off event",
      text: "1:1 sessions take place at a fixed rhythm, weekly or monthly, so the changes stick.",
    },
    {
      title: "Clear accountability for results",
      text: "We start with a diagnosis and an action plan, and we measure results against KPIs that we set together.",
    },
  ],
  postsHeading: "Related guides",
  posts: [
    {
      title: "How to Build a Pipeline That Actually Converts",
      href: "/en/blog/build-a-pipeline-that-converts",
    },
    {
      title: "What I Learned Listening to Hundreds of My Salespeople's Calls",
      href: "/en/blog/what-i-learned-listening-to-hundreds-of-sales-calls",
    },
    {
      title: "How to Choose a Sales Training Company: 6 Questions to Ask Before You Sign",
      href: "/en/blog/how-to-choose-a-sales-training-company",
    },
  ],
  faq: [
    {
      q: "How does mentoring differ from an online course?",
      a: "A course is recorded material that you work through at your own pace. Mentoring is 1:1 work: we analyse your specific situations, pipeline and results in real time.",
    },
    {
      q: "How often do the sessions take place?",
      a: "1:1 sessions can take place weekly or monthly. We agree the rhythm after the free consultation, tailored to your situation.",
    },
    consultFaq,
  ],
  related: [
    { label: "B2B sales training", href: "/en/sales-training-b2b" },
    { label: "Sales recruitment", href: "/en/sales-recruitment" },
    { label: "All services", href: "/en#uslugi" },
  ],
};
