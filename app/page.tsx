import Portfolio from "@/components/portfolio/Portfolio";
import { profile, site } from "@/data/portfolio";

export default function Home() {
  const person = {
    "@context": "https://schema.org", "@type": "Person",
    name: profile.name, jobTitle: profile.title, description: profile.summary,
    url: site.url, image: `${site.url}${profile.photo}`, email: profile.email,
    address: { "@type": "PostalAddress", addressLocality: "Biliran, Biliran", addressCountry: "PH" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Naval State University" },
    knowsAbout: ["Web development", "RESTful APIs", "Graphic design", "WordPress", "JavaScript", "C#", "PHP"],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(person).replace(/</g, "\\u003c")}} /><Portfolio /></>;
}
