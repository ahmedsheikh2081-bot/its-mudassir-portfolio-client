
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import MusicGenres from "./pages/MusicGenres";
import SocialLinks from "./pages/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MusicGenres/>
        <SocialLinks/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
