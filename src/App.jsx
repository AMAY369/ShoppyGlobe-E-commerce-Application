import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/general/Footer";

function App() {
  return (
    <section className="min-h-screen container mx-auto flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}
export default App;