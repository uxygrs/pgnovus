import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Solutions } from "@/components/site/Solutions";
import { Partners } from "@/components/site/Partners";
import { CSR } from "@/components/site/CSR";
import { Footer } from "@/components/site/Footer";
import { QuoteModal } from "@/components/site/QuoteModal";

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onQuoteClick={openQuote} />
      <main>
        <Hero onQuoteClick={openQuote} />
        <About />
        <Solutions />
        <Partners />
        <CSR />
      </main>
      <Footer onQuoteClick={openQuote} />
      <QuoteModal open={quoteOpen} onClose={closeQuote} />
    </div>
  );
};

export default Index;
