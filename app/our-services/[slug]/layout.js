import Footer from "@/app/_components/Footer";

function layout({ children }) {
  return (
    <div className="">
      {children}
      <Footer />
    </div>
  );
}

export default layout;
