import { html } from "lit"
import { Post } from "./profile-manager"


export function montarURL() {

}

export function montarBanner(tag: string) {
    return html`<img src="../profiles/@${ tag }/@${ tag } notion-banner.png" />`
}

export function montarIcon(tag: string) {
    return html`<img src="../profiles/@${ tag }/@${ tag } notion-icon.jpg" />`
}

export function montarFeed(tag: string, post: Post) {
    return html`<img src="../profiles/@${ tag }/@${ tag } feed-${ post.sequencial ? post.data + '-' + post.sequencial : post.data }.jpg"/>`
}