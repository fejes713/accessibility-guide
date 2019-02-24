import { h } from "hyperapp";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default () => (
  <div class="container">
    <Header />
    <Cards />
    <Footer />
  </div>
);
