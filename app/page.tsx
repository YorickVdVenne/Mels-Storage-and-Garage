import Header from "@/components/organisms/Header/Component";
import Services from "@/components/organisms/Services/Component";
import About from "@/components/organisms/About/Component";
import Contact from "@/components/organisms/Contact/Component";

export default function Home() {
  return (
    <>  
      <main className="bg-navy m-auto">
        <Header />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  )
}
