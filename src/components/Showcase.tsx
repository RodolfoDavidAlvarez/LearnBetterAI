import { Link } from "react-router-dom";

const Showcase = () => {
  const websites = [
    {
      id: 1,
      title: "Fun Things Apparel Boutique",
      description: "A modern e-commerce website for a boutique clothing store",
      image: "/images/Fun Things Apparel Boutique Website.jpeg",
      link: "/showcase/fun-things",
    },
    {
      id: 2,
      title: "Nurturing Nature",
      description: "A beautiful website for a nature conservation organization",
      image: "/images/Nurturing Nature Website.jpeg",
      link: "/showcase/nurturing-nature",
    },
    {
      id: 3,
      title: "Zone 9 Solar",
      description: "A professional website for a solar energy company",
      image: "/images/Zone 9 Solar Website.jpeg",
      link: "/showcase/zone9-solar",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Website Showcase</h2>
          <p className="mt-4 text-lg text-gray-500">See what's possible with AI-powered website building</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {websites.map((website) => (
            <div key={website.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img src={website.image} alt={website.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{website.title}</h3>
                <p className="mt-2 text-gray-600">{website.description}</p>
                <Link to={website.link} className="mt-4 inline-block text-blue-600 hover:text-blue-800">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
