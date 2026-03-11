import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductExperience from "@/components/ProductExperience";
import Features from "@/components/Features";
import About from "@/components/About";
import Privacy from "@/components/Privacy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductExperience />
      <Features />
      <About />
      <Privacy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
