import { RECs25 } from "./recs25-type";
import { SocialMedia } from "./social-media-type";

export interface Profile {
    id: string;
    nome: string;
    cidade: string;
    instagram: string;
    tags: string[];
    nudometro: number;

    hidden: boolean;
    socialMedia: SocialMedia[]
    recs25: RECs25[]
}