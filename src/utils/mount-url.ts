import { html } from "lit"

export function montarBanner(tag: string) {
    return html`<img src="../data/Social%20Media/@${ tag }/@${ tag } notion-banner.png" />`
}

export function montarIcon(tag: string) {
    return html`<img src="../data/Social%20Media/@${ tag }/@${ tag } notion-icon.jpg" />`
}