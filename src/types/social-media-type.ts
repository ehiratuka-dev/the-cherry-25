import { AssetType } from "./asset-type";

export interface SocialMedia extends AssetType {
	data: string;
	sequencial: string | undefined;
}