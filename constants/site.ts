/** Single source of truth for identity, contact details and SEO defaults. */
export const SITE = {
  name: "Chirag Nabhoya",
  title: "Chirag Nabhoya — Data Science & AI",
  role: "Data Science / AI",
  tagline:
    "M.Sc. Computer Science student in Germany working across databases, machine learning and secure systems.",
  location: "Mainz, Germany",
  email: "chiragnabhoya2506@gmail.com",
  phone: "+49 176 30102484",
  /** TODO: replace with the production domain before deploying. */
  url: "https://chiragnabhoya.vercel.app",
  /** TODO: add a 1200x630 og-image.png to /public. */
  ogImage: "/og-image.png",
} as const;
