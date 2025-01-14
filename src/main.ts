import Navigo from "navigo";

import './pages/model-page'
import './pages/models-page'

const app: HTMLElement | null = document.querySelector("#app");
if( app != undefined) {
    const router = new Navigo('/', { hash: true})
   
    router.on('/', () => {
        app.innerHTML = "<models-page manager></models-page>"
    }).on('/models', () => {
        app.innerHTML = "<models-page></models-page>"
    }).on("/model/:id", (match) => {
        app.innerHTML = `<model-page id=${ match?.data?.id }></model-page>`
    }).resolve();
}


