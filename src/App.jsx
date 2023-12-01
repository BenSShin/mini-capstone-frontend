import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#ffe488]">
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
