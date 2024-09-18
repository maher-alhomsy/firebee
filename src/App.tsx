import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AQSection from "./components/AQSection";
import BoxSection from "./components/BoxSection";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import SignalSection from "./components/SignalSection";
import MoneyBackSection from "./components/MoneyBackSection";

function App() {
  return (
    <>
      <Header />

      <IntroSection />

      <MoneyBackSection />

      <SignalSection />

      <AboutSection />

      <BoxSection />

      <AQSection />

      <Footer />
    </>
  );
}

export default App;
