const DetailsSection = () => {
  const tools = [
    { name: "React", icon: "/images/icons/react.png" },
    { name: "Next.js", icon: "/images/icons/nextjs.png" },
    { name: "Node.js", icon: "/images/icons/nodejs.png" },
    { name: "Tailwind CSS", icon: "/images/icons/tailwind.png" },
    { name: "Figma", icon: "/images/icons/figma.png" },
  ];

  return (
    <section className="py-20 px-8 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">
          Tools & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-gray-300">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
