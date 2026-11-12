export type Project = {
  no: number;
  name: string;
  description: string;
  category: string;
  url?: string;
};

/** Icon per category (edit freely) */
export const CATEGORY_ICON: Record<string, string> = {
  "Government & AI": "🏛️",
  Enterprise: "🏢",
  "Dating & Social": "💞",
  "E-commerce": "🛒",
  Transport: "🚕",
  "Food & Delivery": "🍔",
  Education: "🎓",
  Healthcare: "💊",
  "Business & Manufacturing": "🏭",
  Marketplace: "🏬",
  Directories: "📇",
  Communication: "🎧",
  "Apps & Software": "📱",
};

// [name, description, category, url?]  — source: Client_Project_Portfolio.xlsx (Sr. No. 15 is missing in the sheet)
// Links come from the supplied portfolio.html example. Categories are my grouping — change if needed.
const raw: [string, string, string, string?][] = [
  ["NITI Aayog", "AI Lab & Innovation", "Government & AI"],
  ["MP Government", "AI Lab & Innovation", "Government & AI"],
  ["SKY Solutions LLC", "Offshore Development Center (ODC)", "Enterprise"],
  ["Bounced", "Dating Platform", "Dating & Social", "https://bounced.co.uk/"],
  ["Yourtiles", "E-commerce Website", "E-commerce", "https://yourtiles.com/"],
  ["Anything4Home", "E-commerce Website", "E-commerce", "https://www.anything4home.co.uk/"],
  ["Findtaxicab", "Taxi Booking Platform", "Transport", "http://findtaxicab.com/"],
  ["Singlehitched", "Dating Platform", "Dating & Social", "https://www.singleshitched.com/"],
  ["Match4Muslim", "Muslim Dating Platform", "Dating & Social", "https://play.google.com/store/apps/details?id=com.muslimmatchnew&hl=en&gl=US"],
  ["Victoria Car Parts", "Car Parts Website", "E-commerce"],
  ["Deliver 2 Minute", "Food Ordering Application", "Food & Delivery"],
  ["Miiaan", "E-commerce Platform", "E-commerce"],
  ["Smart Driving Intensive Course", "Driving Learning Platform", "Education"],
  ["ODD", "Food Delivery Driver App", "Food & Delivery"],
  ["Rollinson", "Taxi Admin, Customer & Driver Solutions", "Transport"],
  ["Intheselfie", "E-commerce Platform", "E-commerce"],
  ["Rhino", "E-commerce Platform", "E-commerce"],
  ["Furniture City", "E-commerce & Delivery Extension", "E-commerce"],
  ["Kids Avenue", "E-commerce Website", "E-commerce"],
  ["Ask Doctor", "Doctor / Healthcare Platform", "Healthcare"],
  ["Bandstrendz", "E-commerce Website", "E-commerce"],
  ["Cool Bitz", "E-commerce Website", "E-commerce"],
  ["Pharmacy Click", "Online Pharmacy Platform", "Healthcare"],
  ["SAAZ", "Admin & Mobile Application", "Apps & Software"],
  ["PCB4U", "PCB Website / Platform", "Business & Manufacturing"],
  ["Roland Taxi", "Taxi Admin & Booking Platform", "Transport"],
  ["Iamstylish", "E-commerce Website", "E-commerce"],
  ["YouTube", "Video Editing Software", "Apps & Software"],
  ["Facebook", "Plugin Development", "Apps & Software"],
  ["Girl Walk", "Mobile Application", "Apps & Software"],
  ["eBay Marketplace", "Marketplace Platform", "Marketplace"],
  ["Groupon Marketplace", "Marketplace Platform", "Marketplace"],
  ["Advance Tech", "Magento Customisation", "E-commerce"],
  ["Whitzapp Directory", "Business Directory Platform", "Directories"],
  ["YouTube Bot", "Automation Tool", "Apps & Software"],
  ["Audiochat", "Audio Chat Application", "Communication"],
  ["Audiochat Web", "Audio Chat Platform", "Communication"],
];

export const projects: Project[] = raw.map(([name, description, category, url], i) => ({
  no: i + 1,
  name,
  description,
  category,
  url,
}));

export const categories = Array.from(new Set(projects.map((p) => p.category)))
  .map((name) => ({
    name,
    icon: CATEGORY_ICON[name] ?? "✨",
    count: projects.filter((p) => p.category === name).length,
  }))
  .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

export const copy = {
  kicker: "Technology · Digital products · Innovation",
  lead: "A curated overview of client engagements and digital projects across AI innovation, enterprise services, e-commerce, mobile applications and custom platforms.",
  overviewTitle: "Portfolio overview",
  overview:
    "Explore a varied body of digital work, including public-sector AI initiatives, enterprise delivery models, online marketplaces, commerce experiences, mobile applications and custom software. Use the project directory to find a specific engagement.",
  sideTitle: "BUILT ACROSS INDUSTRIES",
  side: "From early-stage concepts to multi-platform products, this portfolio brings client projects together in one clear showcase.",
  dirTitle: "Project showcase",
  dirSub: "Browse the client list or filter by project category.",
  empty: "No projects found. Try another search or category.",
  footer: "Client & Project Portfolio · Project names and descriptions are based on the supplied list.",
};