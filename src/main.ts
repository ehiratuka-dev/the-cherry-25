import { setupRouter } from "./components/router";

import './pages/model-page'
import './pages/models-page'
import { ProfileClass } from "./utils/ProfileClass";


const app: HTMLElement | null = document.querySelector("#app");
await ProfileClass.loadData();

if( app != undefined) {
    setupRouter(app);
}