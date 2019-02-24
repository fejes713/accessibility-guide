import { app } from "hyperapp";
import "./css/index.scss";
import "./js/browser";

import state from "./js/state";
import actions from "./js/actions";
import view from "./js/view";

app(state, actions, view, document.body);
