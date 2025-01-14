import { setupRouter } from "./components/router";

import './pages/model-page'
import './pages/models-page'

const app: HTMLElement | null = document.querySelector("#app");
if( app != undefined) {
    setupRouter(app);
}


