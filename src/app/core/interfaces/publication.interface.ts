export interface Publication {
	date: Date;
	title: string;
	subtitle?: string;
	type: PublicationType;
	src: string;
	img?: string;
	imgInfo?: string;
	description?: string;
}

export type PublicationType = 'news' | 'project' | 'science';