// Single source of truth for contact details shown on the legal pages.
export const company = {
  brand: "AniyaNetworks",
  operator: "Aniya Network Solutions Inc.",
  email: "hello@example.com",
  phone: "(437) 777-8844",
  addressLines: ["40 Anglerock Drive, Cambridge, Ontario N1T1L8, Canada"],
  legalEffectiveDate: "September 24, 2026",
};

export const navLinks = [
  { label: "Why Us", href: "#why-us" },
  { label: "What We Build", href: "#what-we-build" },
  { label: "Proof", href: "#proof" },
];

export const challenges = [
  {
    index: "01",
    text: "You win the work, then scramble to build it.",
  },
  {
    index: "02",
    text: "Freelancers are a gamble — they ghost, miss deadlines, or deliver broken automations you debug yourself at midnight.",
  },
  {
    index: "03",
    text: "A real in-house developer costs $6,000–10,000/month — too much for work that comes in waves.",
  },
  {
    index: "04",
    text: "Your team hits a wall on technical builds — API integrations, AI receptionists, custom automations.",
  },
  {
    index: "05",
    text: "No QA means it breaks in front of your client. And it's your name on the work.",
  },
];

export const whyUs = [
  {
    index: "001",
    title: "Real engineering, not click-work",
    description:
      "DevOps background across Azure, AWS, GCP, Kubernetes, and Terraform — AZ-104 and AZ-400 certified.",
  },
  {
    index: "002",
    title: "Top Rated Plus on Upwork",
    description: "100% job success — verifiable, not a manufactured score.",
  },
  {
    index: "003",
    title: "Senior capacity, accessible pricing",
    description:
      "A freelance automation/AI engineer runs $60–120/hr. You get that skill level plus QA and team backup at $25/hr.",
  },
  {
    index: "004",
    title: "White-label by default",
    description: "Your brand, your client relationship. We stay behind the curtain.",
  },
  {
    index: "005",
    title: "5+ years shipping for agencies",
    description: "Across North America, the UK, and the EU.",
  },
];

export const howWeHelp = [
  {
    index: "001",
    title: "Builder",
    description:
      "Architects and ships the build directly inside your accounts — GoHighLevel, Make, n8n, Zapier, websites, AI agents.",
  },
  {
    index: "002",
    title: "QA",
    description:
      "Every build is tested against the brief before it ever reaches your client. No surprises, no midnight fires.",
  },
  {
    index: "003",
    title: "Support & Backup",
    description:
      "You're never stuck waiting on one person. A team stands behind every seat.",
  },
];

export const whatWeBuild = [
  { title: "GoHighLevel builds", icon: "pipeline" },
  { title: "Make.com", icon: "flow" },
  { title: "n8n", icon: "branch" },
  { title: "Zapier", icon: "bolt" },
  { title: "Custom websites", icon: "browser" },
  { title: "AI chatbots", icon: "chat" },
  { title: "AI receptionists & voice agents", icon: "headset" },
  { title: "API integrations & custom builds", icon: "plug" },
] as const;

export const credentials = [
  { label: "Top Rated Plus", sublabel: "Upwork" },
  { label: "AZ-104", sublabel: "Azure Administrator" },
  { label: "AZ-400", sublabel: "DevOps Engineer Expert" },
];
