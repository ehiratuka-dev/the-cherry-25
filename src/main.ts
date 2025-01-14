import { setupRouter } from "./components/router";

import './pages/model-page'
import './pages/models-page'
import { ProfileClass } from "./utils/ProfileClass";




(async () => {
    try {
        await ProfileClass.loadData();

        const app: HTMLElement | null = document.querySelector("#app");
        if( app != undefined) {
            setupRouter(app);
        }
    } catch (e: unknown) {
        console.log(e);
    }
    // `text` is not available here
})();


