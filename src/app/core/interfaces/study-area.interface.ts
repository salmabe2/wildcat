export interface StudyArea {
  contact?: string;
  coords?: number[];
	link?: string;
	months?: string;
	partners: string[]; // Colaboradores
	presence: boolean;
	province: string; // Provincia
	region: string; // Comunidad Autónoma
	year?: string;
	leader: string;
	name: string;
	otherName?: string;
	leaderEmail: string; // Email de contacto
	photos?: string;
}
