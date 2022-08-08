import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const App = () => {
  return (
    <div className="portfolio-container">
      <div className="threejs-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 2, 2]} intensity={0.5} />
          <Sphere
            visible
            args={[1, 100, 200]}
            scale={1.5}
            position={[3.5, 0, 0]}
          >
            <MeshDistortMaterial
              color="rgba(59,130,246,0.5)"
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={1}
            />
          </Sphere>
        </Canvas>
      </div>
      <div className="email-side">
        <a href="mailto:mohitgangwarknp@gmail.com">
          <div className="email-side-turned">mohit.gangwar.knp@gmail.com</div>
        </a>
        <div className="email-side-line" />
      </div>
      <Navbar />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
