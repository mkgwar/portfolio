import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="portfolio-container">
      <div className="email-side">
        <a href="mailto:mohitgangwarknp@gmail.com">
          <div className="email-side-turned">mohit.gangwar.knp@gmail.com</div>
        </a>
        <div className="email-side-line" />
      </div>
      <Navbar />
      <Main />
      <a id="about" />
      <About />
      <a id="work" />
      <Work />
      <a id="contact" />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
