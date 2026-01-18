// frontend/src/pages/Home.jsx

import { Suspense } from "react";
import HeroSection from "./components/HeroSection";

function Home() {
  return (
    <Suspense fallback={<div>Loading Home...</div>}>
      <HeroSection />
    </Suspense>
  );
}

export default Home;
