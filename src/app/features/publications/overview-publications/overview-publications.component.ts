import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
	selector: 'app-overview-publications',
	standalone: true,
	imports: [CommonModule, CardModule, TabMenuModule, ButtonModule],
	templateUrl: './overview-publications.component.html',
	styleUrl: './overview-publications.component.scss'
})
export class OverviewPublicationsComponent {
	tabMenuModel: MenuItem[] = [
		{ label: 'Todos', id: 'all' },
		{ label: 'Proyecto', id: 'project' },
		{ label: 'Científicas', id: 'science' },
		{ label: 'Noticias', id: 'news' }
	];

	// TODO: Move Data to another file (this is test data)
	// TODO: Create type post
	postsData = [
		{
			date: new Date('2023-03-13'),
			title: 'El gato montés, protagonista en abril en Las Lagunas',
			subtitle:
				'El parque natural acogerá los días 22 y 23 de abril unas jornadas técnicas a nivel nacional sobre el estado de conservación del gato montés europeo (Felis silvestris) en España',
			type: 'news',
			src: 'https://www.latribunadeciudadreal.es/noticia/z941a2c7a-9910-8c52-c824caf72a8f9a71/202303/el-gato-montes-protagonista-en-abril-en-las-lagunas',
			img: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/naturaleza/lagunas_ruidera_t0200452.jpg_604889389.jpg'
		},
		{
			date: new Date('2024-02-04'),
			title: 'Y… a vueltas con el gato montes',
			subtitle:
				'La pasada primavera, concretamente los días 22 y 23 de Abril de 2023, se celebraron en el Parque Natural de las Lagunas de Ruidera las primeras jornadas técnicas y monográficas en España sobre el gato montés, que contaron con algo más de 100 participantes (entre asistentes y ponentes).',
			type: 'news',
			src: 'https://harmusch.wordpress.com/2024/02/04/y-a-vueltas-con-el-gato-montes/',
			img: 'https://harmusch.wordpress.com/wp-content/uploads/2024/02/whatsapp-image-2023-05-01-at-09.09.52-2.jpeg'
		},
		{
			date: new Date('2023-04-17'),
			title: 'El gato montés de la península ibérica ¿en peligro de extinción?',
			subtitle:
				'Un grupo de especialistas en felinos evalúa la situación del felino en la Península, con el objetivo de establecer un plan de acción para su protección y conservación. En el norte y el noreste, la especie está aparentemente bien distribuida, mientras en el sur y el centro existe poca densidad, con una fragmentación extrema.',
			type: 'news',
			src: 'https://www.agenciasinc.es/Noticias/El-gato-montes-de-la-peninsula-iberica-en-peligro-de-extincion',
			img: 'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/el-gato-montes-de-la-peninsula-iberica-en-peligro-de-extincion/10782189-2-esl-MX/El-gato-montes-de-la-peninsula-iberica-en-peligro-de-extincion.jpg',
			imgInfo:
				'La población del gato montés sufre una gran fragmentación en España y Portugal. / Pixabay'
		},
		{
			date: new Date('2023-03-18'),
			title: 'I Jornada Técnica Nacional de Gato Montés',
			subtitle:
				'El parque nacional acogerá una jornada técnica nacional sobre el estado de conservación del gato montés.',
			type: 'event',
			src: 'https://www.elclickverde.com/agenda/2023/03/18/i-jornada-tecnica-nacional-de-gato-montes',
			img: 'https://elclickverde.com/sites/default/files/eventos/lista_imagenes/gato_montes_jornadas_pq.jpg'
		},
		{
			date: new Date('2023-04-15'),
			title: 'Las Lagunas de Ruidera acogen en abril jornada técnica nacional sobre gato montés',
			subtitle:
				'El Parque Natural de las Lagunas de Ruidera acogerá unas jornadas técnicas a nivel nacional sobre el estado de conservación del gato montés europeo en España.',
			type: 'news',
			src: 'https://efeverde.com/las-lagunas-de-ruidera-acogen-en-abril-jornada-tecnica-nacional-sobre-gato-montes/',
			img: 'https://efeverde.com/wp-content/uploads/2022/01/gato-montes.jpg',
			imgInfo: 'Ejemplar de gato montés. Archivo EPA-EFE/MARC TIRL'
		},
		{
			date: new Date('2023-09-04'),
			title:
				'La Comunidad de Madrid y la URJC evalúan la recuperación del gato montés en el Parque del Guadarrama',
			subtitle:
				'Las poblaciones de este felino en el Parque pueden estar entre las más importantes y numerosas del centro peninsular, según  los datos preliminares. La especie es cada vez más escasa en muchas regiones de España, sin que se conozcan las causas concretas del descenso de población',
			type: 'news',
			src: 'https://www.telemadrid.es/noticias/madrid/La-Comunidad-de-Madrid-y-la-URJC-evaluan-la-recuperacion-del-gato-montes-en-el-Parque-del-Guadarrama-0-2593540625--20230903082213.html',
			img: 'https://www.telemadrid.es/2023/09/04/medio-ambiente/_2593850683_42602664_1300x731.jpg'
		},
		{
			date: new Date('2021-02-22'),
			title: 'Seguimiento y evaluación del estado de conservación del gato montés en España',
			subtitle:
				'Un estudio evalúa el estado de conservación del gato montés en diferentes regiones de España, con el objetivo de establecer un plan de protección a nivel nacional.',
			type: 'news',
			src: 'https://castellon-en-ruta-cultural.es/seguimiento-y-evaluacion-del-estado-de-conservacion-del-gato-montes-felis-silvestris-en-espana/',
			img: 'https://castellon-en-ruta-cultural.es/wp-content/uploads/2021/02/gato-montes-470x260.jpg'
		},
		{
			date: new Date('2023-05-09'),
			title: 'Determinan la existencia de gato montés en Ordesa',
			subtitle:
				'Un estudio reciente ha confirmado la existencia de gato montés en el Parque Nacional de Ordesa, lo que es un indicativo positivo para la conservación de esta especie en la zona.',
			type: 'news',
			src: 'https://www.diariodelaltoaragon.es/noticias/comarcas/2023/05/09/determinan-la-existencia-de-gato-montes-en-ordesa-1650342-daa.html',
			img: 'https://imagenes.diariodelaltoaragon.es/files/image_990_556/uploads/imagenes/2023/05/08/fotografia-de-un-gato-montes-con-una-camara-de-fototrampeo.jpeg',
			imgInfo: 'Fotografía de un gato montés con una cámara de fototrampeo. S.E.'
		},
		{
			date: new Date('2023-03-14'),
			title: 'Alarmante situación del gato montés en la Península Ibérica',
			subtitle:
				'El gato montés en la Península Ibérica enfrenta serias amenazas debido a la fragmentación de su hábitat y la persecución humana, lo que pone en peligro su supervivencia.',
			type: 'news',
			src: 'https://infomascota.com/alarmante-situacion-del-gato-montes-la-peninsula-iberica/',
			img: 'https://infomascota.com/wp-content/uploads/2023/03/Gato-montes_Felis-silvestris-1089x700.jpeg',
			imgInfo: 'Algunos trabajos previos, que analizan la supervivencia y las causas de mortalidad del gato montés, ya avisan de la “extinción silenciosa” del félido en Europa (Foto: François Mougeot)'
		},
		{
			date: new Date('2019-07-02'),
			title: 'En busca del gato montés: la Asociación Serbal será la encargada de censar a este felino en Almería',
			subtitle:
				'La asociación Serbal se encargará de censar el gato montés en Almería con el fin de obtener datos sobre su distribución y estado de conservación.',
			type: 'news',
			src: 'https://elcomerciodealmeria.opennemas.com/articulo/vida-y-salud/busca-gato-montes-asociacion-serbal-sera-encargada-censar-felino-almeria/20190702154332002880.html',
			img: 'https://elcomerciodealmeria.opennemas.com/asset/thumbnail,992,558,center,center/media/elcomerciodealmeria/images/2019/07/02/2019070213364862038.jpg',
			imgInfo: 'Gato montés/ Foto: Enrique Ruiz Ara'
		},
		{
			date: new Date('2024-03-24'),
			title: 'Conservación del gato montés en Almería',
			subtitle:
				'La asociación Serbal trabaja en proyectos de conservación del gato montés en la provincia de Almería, enfocados en el monitoreo y la protección de su hábitat.',
			type: 'project',
			src: 'https://serbal-almeria.org/que-hacemos/proyectos/gato-montes-almeria',
			img: 'https://serbal-almeria.org/images/paginas/gato-montes/Gato-montes-almeria-1-compressor.jpg',
			imgInfo: 'Gato montés fotografiado por una cámara de fototrampeo en Los Velez. Foto:©SERBAL.'
		},
		// {
		// 	// TODO: mover? Son recursos 
		// 	date: new Date('2023-09-05'),
		// 	title: 'El gato montés en la Sierra de Guadarrama',
		// 	subtitle:
		// 		'Evaluación del estado de conservación del gato montés en el Parque Nacional de la Sierra de Guadarrama y acciones para su recuperación.',
		// 	type: 'report',
		// 	src: 'https://www.parquenacionalsierraguadarrama.es/component/jdownloads/category/5-infos-tecnico?Itemid=4089',
		// 	img: 'https://www.parquenacionalsierraguadarrama.es/images/gato_montes.jpg'
		// },
		{
			date: new Date('2023-04-17'),
			title: 'El gato montés de la Península Ibérica, ¿en peligro de extinción?',
			subtitle:
				'Un grupo de especialistas en el gato montés ha evaluado la situación de esta especie en la Península Ibérica con el objetivo de establecer un plan de acción para su protección y conservación',
			type: 'news',
			src: 'https://www.madrimasd.org/gato-montes-peninsula-iberica-en-peligro-extincion',
			img: 'https://www.madrimasd.org/sites/default/files/Noti_14_17_23.png'
		},
		// {
		// No funciona bien la página
		// 	date: new Date('2024-05-09'),
		// 	title: 'El gato montés, cada vez peor en España',
		// 	subtitle:
		// 		'La situación del gato montés en España continúa empeorando, con un hábitat cada vez más reducido y fragmentado, lo que pone en riesgo su supervivencia a largo plazo.',
		// 	type: 'news',
		// 	src: 'https://www.laverdad.es/nuestra-tierra/naturaleza/gato-montes-peor-20230509012848-nt.html',
		// 	img: 'https://www.laverdad.es/images/gato-montes.jpg'
		// }
	];

	filteredPostsData: any = [];
	/**
	 * Filters posts data by type
	 *
	 * @param {MenuItem} $event - Tab info.
	 */

	filterPostsOnTabChange($event: MenuItem) {
		this.filteredPostsData =
			$event.id === 'all'
				? this.postsData
				: this.postsData.filter((post) => {
						return post?.type === $event.id;
					});
	}
}
