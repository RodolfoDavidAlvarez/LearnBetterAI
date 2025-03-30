import React from "react";
import Hero from "./Hero";
import WhatYoullLearn from "./WhatYoullLearn";
import WhoItsFor from "./WhoItsFor";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main>
        <Hero />
        <WhatYoullLearn />
        <WhoItsFor />
      </main>
    </div>
  );
};

export default Home;
