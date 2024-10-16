import "./App.css";
import Choose from "./components/landing-page/Choose";
import Feature from "./components/landing-page/Feature";
import Hero from "./components/landing-page/Hero";
import California from "./components/landing-page/California";
import OurFirm from "./components/landing-page/OurFirm";
import Stories from "./components/landing-page/Stories";
import Lawyers from "./components/landing-page/Lawyers";
import Victim from "./components/landing-page/Victim";
import Settlement from "./components/landing-page/Settlement";

function App() {
  return (
    <>
      <Hero />
      <Feature />
      <Choose />
      <Settlement />
      <Victim />
      <Lawyers />
      <Stories />
      <OurFirm />
      <California />
    </>
  );
}

export default App;
