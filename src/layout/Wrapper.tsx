import Footer from "../footer/Footer";
import Nav from "../header/Nav";

interface Layout {
  children: React.ReactNode;
}

const Wrapper = ({ children }: Layout) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
