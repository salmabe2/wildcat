export interface StudyArea {
  contact?: string | null;
  coords?: number[] | null;
	link?: string | null;
	months?: string | null;
	partners: string[]; // Colaboradores
	presence: boolean | null;
	province: string | null; // Provincia
	region: string | null; // Comunidad Autónoma
	year?: string | null;
	leader: string | null;
	name: string | null;
	otherName?: string | null;
	leaderEmail: string | null; // Email de contacto
	photos?: string | null;
}
