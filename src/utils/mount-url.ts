import { html } from "lit"

export function montarBanner(tag: string) {
    return html`<img src="../data/Social%20Media/@${ tag }/@${ tag } notion-banner.png" 
  onerror="this.onerror=null; this.src='../data/Social Media/@default/@default notion.png';"/>`
}

export function montarIcon(tag: string) {
    return html`<img src="../data/Social%20Media/@${ tag }/@${ tag } notion-icon.jpg" 
                onerror="this.onerror=null; this.src='../data/Social Media/@default/@default notion-icon.jpg';"/>`
}