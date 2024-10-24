import { Injectable } from '@angular/core';
import { Partner } from '@wildcat/interfaces';

@Injectable({
	providedIn: 'root'
})
export class PartnerService {
	partnersData: Partner[] = [
		{
			name: 'Adolfo M. Rodríguez Cuesta',
			blocks: 'Dehesas Larrodrigo-río Gamo (SA-AV)'
		},
		{
			name: 'Agustín Moya Botella',
			blocks: 'Sierra Argueña'
		},
		{
			name: 'Aki Gozálbez',
			blocks: 'Jarafuel'
		},
		{
			name: 'Ángel García Sánchez',
			blocks: 'Dehesas Larrodrigo-río Gamo (SA-AV)'
		},
		{
			name: 'Ana Belén Martínez Parra',
			blocks: 'Sierra Estancias',
			email: 'eleusis38@hotmail.com'
		},
		{
			name: 'Alfred Encuentra Martínez',
			blocks: 'Coll de Bracons (Barcelona)'
		},
		{
			name: 'Antonio García Reyes',
			blocks: 'Sierra Mágina, Sierra de Giribaile-Guadalén (Jaén)',
			email: 'antoncanena@gmail.com'
		},
		{
			name: 'Antonio Torrijo Pardos',
			blocks: 'Sierra Valdellosa (Teruel)',
			email: 'antorrijo@yahoo.es'
		},
		{
			name: 'Bartolo López',
			blocks: 'Calasparra'
		},
		{
			name: 'Blanca Monteis Coromina',
			blocks: 'Coll de Bracons (Barcelona)'
		},
		{
			name: 'Blas González Martínez',
			blocks: 'Sierra Estancias',
			email: 'eleusis38@hotmail.com'
		},
		{
			name: 'Carmen Díez Rivera',
			blocks: 'Galicia (todos)'
		},
		{
			name: 'Carlos Lázaro Romero',
			blocks: 'Lezuza (Albacete)',
			email: 'clromero1993@gmail.com'
		},
		{
			name: 'Carlos Sánchez Marcos',
			blocks: 'Arribes Duero-Águeda (SA)'
		},
		{
			name: 'Cristóbal Jurado Ales',
			blocks: 'Alcarria de Madrid, Nuevo Baztán (Madrid)'
		},
		{
			name: 'Daniel Fernández Alonso',
			blocks: 'Dombellas, Canredondo de la sierra, Santervas de la sierra',
			email: 'danielfernandezalonso@gmail.com'
		},
		{
			name: 'David Cueco Pablo',
			blocks: 'Herrera del Duque'
		},
		{
			name: 'David Villalba Collado',
			blocks: 'Bogarra-Ayna',
			email: 'pajaropicaflores@gmail.com'
		},
		{
			name: 'Eduardo Romero Fernandez',
			blocks: 'Alcarria de Madrid, Nuevo Baztán (Madrid)'
		},
		{
			name: 'Emily Noemí Morandeira Vázquez',
			blocks: 'Cabra (Córdoba)',
			email: 'natureandtranslation@gmail.com'
		},
		{
			name: 'Eric Serratosa Nuño',
			blocks: 'Coll de Bracons (Barcelona)'
		},
		{
			name: 'Ferran Sayol Altarriba',
			blocks: 'Coll de Bracons (Barcelona)'
		},
		{
			name: 'Felipe Peñalosa García',
			blocks: 'Parque Regional del Sureste (Madrid)'
		},
		{
			name: 'Félix Martínez Olivas',
			blocks: 'Parque Regional del Sureste (Madrid)'
		},
		{
			name: 'Francisco Almansa',
			blocks: 'Sierra del Cura'
		},
		{
			name: 'Francisco Cervera (Equipo Seguimiento Fauna VAERSA / Generalitat Valenciana)',
			blocks: 'La Yesa - Alpuente'
		},
		{
			name: 'Francisco García',
			blocks: 'Caudiel'
		},
		{
			name: 'Francisco Herrera García',
			blocks: 'Sierra Mágina, Sierra de Giribaile-Guadalén (Jaén)'
		},
		{
			name: 'Francisco Javier Lloris',
			blocks: 'Caudiel'
		},
		{
			name: 'Francisco Silva',
			blocks: 'Filabres (Almería)'
		},
		{
			name: 'Gustavo Merchan Criado',
			blocks: 'La Serrezuela (SA)-Valle del Corneja (AV)'
		},
		{
			name: 'Ginés Jesús Gómez Sánchez',
			blocks: 'Sierra Estancias',
			email: 'eleusis38@hotmail.com'
		},
		{
			name: 'Helena García Bayón',
			blocks: 'Alcarria de Madrid, Nuevo Baztán (Madrid)'
		},
		{
			name: 'Iván Salgado García',
			blocks: 'Alcarria de Madrid, Nuevo Baztán (Madrid)'
		},
		{
			name: 'Isidre cos',
			blocks: 'Serra de Finestres (Girona)'
		},
		{
			name: 'Ivan Parrillo Hidalgo',
			blocks: 'Cabra (Córdoba)',
			email: 'natureandtranslation@gmail.com'
		},
		{
			name: 'Javier Barona Fernández',
			blocks:
				'Penyagolosa, Ares del Maestrat, Sierra Argueña, Font Roja, Aitana, Sierra Salinas, Beniarrés, Coves de Vinromà, Barx, Herbesset, Caudiel, Soneja, Losa - Chulilla, Jarafuel'
		},
		{
			name: 'Javier Cruz Rubio',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'Javier Gallego Olivan',
			blocks: 'Filabres (Almería)'
		},
		{
			name: 'Javier Gutiérrez Huete',
			blocks: 'Alcarria de Madrid, Nuevo Baztán (Madrid)'
		},
		{
			name: 'Javier Pedraza Ovejero',
			blocks: 'Dehesas Larrodrigo-río Gamo (SA-AV)'
		},
		{
			name: 'Javier Rodriguez Siles',
			blocks:
				'Hornachuelos Norte (Los Chivatos), P.N. Sierra de Segura (Las Acebeas), P.N Despeñaperros, P.N Andujar (Valqueado), Guadalmellato Sur (Villafranca de Cordoba), Guadalmellato Norte (Adamuz), P.N Aracena y Picos de Aroche (Santa Olaya de Cala), Huelva Sureste (embalse del Piedra)',
			email: 'rioyeguas@gmail.com'
		},
		{
			name: 'Jordi Bermejo Cabezas',
			blocks: 'Serra de Finestres (Girona)',
			email: 'bermejonatur@hotmail.com'
		},
		{
			name: 'José García Benavente',
			blocks: 'Sierra Salinas'
		},
		{
			name: 'José Giménez',
			blocks: 'Caudiel, Soneja'
		},
		{
			name: 'José Miguel Pueyo Soler',
			blocks: 'Sierra Valdellosa (Teruel)',
			email: ''
		},
		{
			name: 'José Miguel Rodríguez Belmonte',
			blocks: 'Sierra de Bonastre (Tarragona)',
			email: 'rodrib69@gmail.com'
		},
		{
			name: 'Juan José Benítez Ruiz Moyano',
			blocks: 'Zarza Capilla - Peñalsordo',
			email: 'jjbenitezrm@gmail.com'
		},
		{
			name: 'Juan José Tur',
			blocks: 'Penyagolosa'
		},
		{
			name: 'Juan Manuel Gonzalez Sanchez',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'Juan Ramon Rguez Sanchez',
			blocks:
				'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA), Dehesas Larrodrigo-río Gamo (SA-AV)'
		},
		{
			name: 'Juanjo Torres Barrón',
			blocks: 'Ezcaray (La Rioja)',
			email: 'juanjo.torres@icarus.es'
		},
		{
			name: 'Julián Cendrero Ramos',
			blocks: 'Zarza Capilla - Peñalsordo',
			email: 'julian@sezextremadura.org'
		},
		{
			name: 'Julián Martín Garde',
			blocks: 'Sierra de Francia (Salamanca)',
			email: 'jmgdrosera@gmail.com'
		},
		{
			name: 'Loreto García Román',
			blocks: 'Parque Regional del Sureste (Madrid)',
			email: 'loreto.garcia@ext.madrid.org'
		},
		{
			name: 'Luis Miguel Bautista Sopelana',
			blocks: 'Penyagolosa'
		},
		{
			name: 'Manuel Alvarez Acosta',
			blocks: 'Sierra de Lújar (Granada)',
			email: 'rmd@megared.net'
		},
		{
			name: 'Manuel Fernández Quesada',
			blocks: 'Zarza Capilla - Peñalsordo'
		},
		{
			name: 'María B. Ramos',
			blocks: 'Penyagolosa'
		},
		{
			name: 'María de la Paz de Rosa Guzmán',
			blocks: 'Baza (Granada)',
			email: 'caritasgranada@gmail.com'
		},
		{
			name: 'María del Carmen Barba Morón',
			blocks: 'Sierra de Bonastre (Tarragona)',
			email: 'barbamoron@hotmail.com'
		},
		{
			name: 'María Jesús González Ramos',
			blocks: 'Sierra Mágina, Sierra de Giribaile-Guadalén (Jaén)'
		},
		{
			name: 'María José Maroto',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'María José Sánchez Rodríguez',
			blocks: 'Sierra de Lújar (Granada)',
			email: 'mrhontanillas@gmail.com'
		},
		{
			name: 'María José Sánchez Rodríguez',
			blocks: 'Parque Regional del Sureste (Madrid)',
			email: 'mjsanzrodriguez@me.com'
		},
		{
			name: 'Marta Martínez Valle',
			blocks: 'Dehesas Larrodrigo-río Gamo (SA-AV)',
			email: 'marta@fuenteviva.org'
		},
		{
			name: 'Miguel Ángel Ramos',
			blocks: 'Penyagolosa'
		},
		{
			name: 'Miguel Ángel Ramos',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'Miguel López',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'Moisés Jiménez',
			blocks: 'Sierra Mágina, Sierra de Giribaile-Guadalén (Jaén)'
		},
		{
			name: 'Nuria Martín Cañadas',
			blocks: 'Sierra Estancias',
			email: 'eleusis38@hotmail.com'
		},
		{
			name: 'Pablo Moreno Arriaga',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'Paco García',
			blocks: 'Caudiel'
		},
		{
			name: 'Paco Moreno',
			blocks: 'Sierra de Bonastre (Tarragona)'
		},
		{
			name: 'Paco Pérez',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'Pablo González',
			blocks: 'Sierra Estancias'
		},
		{
			name: 'Pilar González Pérez',
			blocks: 'Sierra Mágina, Sierra de Giribaile-Guadalén (Jaén)',
			email: 'piperniq2006@hotmail.com'
		},
		{
			name: 'Rafael de la Rosa Gallego',
			blocks: 'Penyagolosa'
		},
		{
			name: 'Rafael Garcia Garcera',
			blocks: 'Penyagolosa'
		},
		{
			name: 'Rafael González Martín',
			blocks: 'Sierra Mágina, Sierra de Giribaile-Guadalén (Jaén)',
			email: 'rafaelgonzalezmartin@gmail.com'
		},
		{
			name: 'Rafaela Valle Ruiz',
			blocks: 'Calasparra'
		},
		{
			name: 'Raúl López Lázaro',
			blocks: 'Dehesas Larrodrigo-río Gamo (SA-AV)'
		},
		{
			name: 'Ricardo M. Romero',
			blocks: 'Penyagolosa'
		},
		{
			name: 'Roberto Tena',
			blocks: 'Calasparra'
		},
		{
			name: 'Ruben Martínez López',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'Rubén Ruiz Morales',
			blocks: 'Dehesas Larrodrigo-río Gamo (SA-AV)'
		},
		{
			name: 'Silvia Mas Lluch',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)',
			email: 'silviamaslluch@gmail.com'
		},
		{
			name: 'Sergio Martínez Ruiz',
			blocks: 'Sierra Estancias'
		},
		{
			name: 'Santiago Pérez',
			blocks: 'Coll de Bracons (Barcelona)'
		},
		{
			name: 'Silvia Ruiz',
			blocks: 'Sierra Estancias'
		},
		{
			name: 'Teresa López Hernández',
			blocks: 'Sierra de Bonastre (Tarragona)',
			email: 'teresa_lopez@dsa.malaga.org'
		},
		{
			name: 'Tomas Barroso Fernández',
			blocks: 'Cabra (Córdoba)',
			email: 'tomas@dawson.es'
		},
		{
			name: 'Tomás Martinez Ballesteros',
			blocks: 'Alcornocales de Valdelosa (SA)-Cubo del Vino (ZA)'
		},
		{
			name: 'Violeta González Morilla',
			blocks: 'Cabra (Córdoba)',
			email: 'violeta.gonzalez@ext.madrid.org'
		}
	];
}