import Nav from "~/components/nav";
import Footer from "~/components/footer";
import Splash from "~/components/splash";

export default function Index() {

  return (
    <>
      <Nav />
      <main
        id="main"
        className="relative top-[70px] min-h-[300vh] bg-neutral-100 scroll-smooth"
      >
        <section
          id="home"
          className="sticky top-[70px] bottom-0 w-full h-[100vh] flex items-center justify-center z-0"
        >
          <Splash />
        </section>
        <section 
          id="about"
          className="relative w-full h-[100vh] flex items-center justify-center bg-neutral-400 z-10">
          
        </section>
        <section 
          id="contact"
          className="relative w-full h-[100vh] flex items-center justify-center bg-neutral-800 z-10">
          
        </section>
        <footer className="fixed bottom-0 h-[50px] w-full z-20">
          <Footer />
        </footer>
      </main>
    </>
  );
}
