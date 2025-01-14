import Navigo from "navigo";

const router = new Navigo('/', { hash: true})

export function setupRouter(container: HTMLElement) {
    router.on('/', () => {
        container.innerHTML = "<models-page manager></models-page>"
    }).on('/models', () => {
        container.innerHTML = "<models-page></models-page>"
    }).on("/model/:id", (match) => {
        container.innerHTML = `<model-page id=${ match?.data?.id }></model-page>`
    }).resolve();
}