
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Songs from "./Songs/Songs";


export default function Home() {
  return (
    <main>
          
          <Navbar />
          <h1 id="songs"></h1>
          <Songs />
          <h1 id="about"></h1>
          <About />
          <h1 id="contact"></h1>
          <Contact />
          <Footer />
          
    </main>
  );
  
}
