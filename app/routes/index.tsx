import Nav from "~/components/nav";
import Footer from "~/components/footer";

export default function Index() {

  return (
    <>
      <Nav />
      <main id="main" className="relative top-[70px] min-h-[800vh]">
        <footer className="fixed bottom-0 h-[50px] w-full">
          <Footer />
        </footer>
      </main>
    </>
  );
}
