import { h } from "hyperapp";
import Card from "./Card";

export default () => state => (
  <main id="main">
    <div class="container">
      <ul class="cards">
        {[...state.tips].map(c => (
          <Card {...c} />
        ))}
      </ul>
    </div>
  </main>
);
