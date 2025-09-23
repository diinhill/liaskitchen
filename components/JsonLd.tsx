import data from "../data.json";

const JsonLd = () => {
  const { jsonLd, seo } = data;
  
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": jsonLd.type,
    "@id": jsonLd.url,
    "name": jsonLd.name,
    "description": seo.description,
    "url": jsonLd.url,
    "telephone": jsonLd.telephone,
    "address": jsonLd.address,
    "geo": jsonLd.geo,
    "sameAs": [seo.canonical],
    "servesCuisine": jsonLd.servesCuisine,
    "priceRange": jsonLd.priceRange,
    "openingHoursSpecification": jsonLd.openingHoursSpecification,
    "menu": jsonLd.menu,
    "acceptsReservations": jsonLd.acceptsReservations,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
    />
  );
};

export default JsonLd;
