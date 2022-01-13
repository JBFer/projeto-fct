const PRODUTOS = [
	{
		title: 'MAIS VISITADOS',
		key: 'visitados',
		data: [
			{
				id: 'visitados',
				list: [
				{
					id: '1',
					img: 'https://cdn.shopify.com/s/files/1/1292/7365/products/111553_1_grande.jpg?v=1568391856',
					name: 'Pack 50 parafusos',
					company: 'YourChoice Screw',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 4.99,
					date: '12/10/2021',
					serial: '2130j',
					views: '200'

				},
				{
					id: '2',
					img: 'https://www.nespresso.com/ecom/medias/sys_master/public/12807617511454/Desktop-PDP-6272x2432.jpg?impolicy=productPdpSafeZone&imwidth=1238',
					name: 'Caixa Café Ristretto',
					company: 'Nespresso',
					description: 'Inspirado no embaixador de todos os cafés italianos, o ristretto, optámos por não imitar, mas torrar a nossa versão. O ristretto é a essência da cultura do café de Itália. Não é um reflexo de uma cidade, mas do próprio país: moda, arte, gastronomia. É a excelência e a elegância de toda a Itália.O Ristretto é um blend de diversos Arábicas e Robustas com uma torra média/escura, um encontro de contrastes de todo o mundo. Juntos, recriam o emblemático sabor italiano. Num gole curto e rápido, este blend apresenta-se em toda a sua intensidade e complexidade de aromas. Trata-se de um café torrado e intenso, acentuado por notas frutadas com um toque de acidez a flutuar. É um perfil digno de um embaixador, um blend que explica a paixão italiana pelo café e por que motivo está tão enraizado no dia a dia deste país.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 3.99,
					date: '12/10/2021',
					serial: '2230j',
					views: '139'

				},
				{
					id: '3',
					img:'https://www.finsa.com/paweb/img/comun/img_finsa/madera_presentacion.jpg',
					name: 'Madeira',
					company: 'Navigator',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 320,
					date: '12/10/2021',
					serial:'2330j',
					views: '1052'
				
				},
				{
					id: '4',
					img: 'https://cdn.shopify.com/s/files/1/1292/7365/products/111553_1_grande.jpg?v=1568391856',
					name: 'Pack 50 parafusos',
					company: 'YourChoice Screw',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 4.99,
					date: '12/10/2021',
					serial: '2130j',
					views: '200'

				},
				{
					id: '5',
					img: 'https://www.nespresso.com/ecom/medias/sys_master/public/12840005632030/media-684x378px.jpg',
					name: 'Caixa Café Ristretto Decaffeinato',
					company: 'Nespresso',
					description: 'Inspirado no embaixador de todos os cafés italianos, o ristretto, optámos por não imitar, mas torrar a nossa versão. O ristretto é a essência da cultura do café de Itália. Não é um reflexo de uma cidade, mas do próprio país: moda, arte, gastronomia. É a excelência e a elegância de toda a Itália. \n  O Ristretto Decaffeinato é um blend de diversos Arábicas e Robustas com uma torra média/escura, uma reunião de contrastes de todo o mundo. Juntos, recriam o emblemático sabor italiano – mesmo na sua versão descafeinada. Num gole curto e rápido, este blend apresenta-se em toda a sua intensidade e complexidade de aromas. Trata-se de um café torrado e intenso, acentuado por notas frutadas com um toque de acidez a flutuar. É um perfil digno de um embaixador, um blend que explica a paixão italiana pelo café e por que motivo está tão enraizado no dia a dia deste país.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 4.19,
					date: '12/10/2021',
					serial: '2230j',
					views: '139'

				},
				{
					id: '6',
					img:'https://www.finsa.com/paweb/img/comun/img_finsa/madera_presentacion.jpg',
					name: 'Madeira',
					company: 'Navigator',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 320,
					date: '12/10/2021',
					serial:'2330j',
					views: '1052'
				
				},
				{
					id: '7',
					img: 'https://cdn.shopify.com/s/files/1/1292/7365/products/111553_1_grande.jpg?v=1568391856',
					name: 'Pack 50 parafusos',
					company: 'YourChoice Screw',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 4.99,
					date: '12/10/2021',
					serial: '2130j',
					views: '200'

				},
				{
					id: '8',
					img: 'https://www.nespresso.com/ecom/medias/sys_master/public/13753037127710/C-0689-Main-PDP-Lungo-Buenos-Aires-OL.jpg?impolicy=productPdpSafeZone&imwidth=1238',
					name: 'Caixa Café Buenos Aires Lungo',
					company: 'Nespresso',
					description: 'A nota doce a pipocas e caráter leve desta combinação de Arábica e Robusta são o complemento delicioso que uma cidade vibrante como Buenos Aires pede. O destino ideal para os amantes de “tapas”, Buenos Aires é o ponto alto da experiência gastronómica Argentina. O doce é o sabor rei e no café não é exceção: doce e de preferência com leite!O World Explorations Buenos Aires Lungo mistura grãos Arábica da Colômbia, ligeiramente torrados, com Robustas do Uganda, resultando num café com notas distintas a cereais e a pipocas doces. Um verdadeiro tango entre esta cidade e o amor por cafés lungos e suaves. Como se estivesse lá: adicione uma gota doce de leite a este café Lungo, para um toque argentino.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 4.19,
					date: '12/10/2021',
					serial: '2230j',
					views: '139'

				},
				{
					id: '9',
					img:'https://www.finsa.com/paweb/img/comun/img_finsa/madera_presentacion.jpg',
					name: 'Madeira',
					company: 'Navigator',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
					category: 'Categoria1a',
					subcatg: 'Subcategoria4a',
					price: 320,
					date: '12/10/2021',
					serial:'2330j',
					views: '1052'
				
				}
				
				
				]
			
			}
		]
	},
	{
		title: 'BASEADO EM PESQUISAS RECENTES',
		key: 'recentes',
		data: [
			{
				id: 'recentes',
				list: [
					{
						id: '10',
						img:'https://www.bhphotovideo.com/images/images2500x2500/Canon_5175B002_EF_24_70mm_f_2_8L_II_843008.jpg',
						name: 'Lente canon 24-70 1.5',
						company: 'Canon Portugal',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 1899.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '11',
						img:'https://www.botnroll.com/4644-large_default/-ecra-tatil-capacitivo-101-rgblvds-lcd-1024x600-.jpg',
						name: 'Tablet',
						company: 'Asus',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 179.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '12',
						img:'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/102078ba05f00ead3aec6f240ab7ebaf_46b686dd-2ac4-4d7b-9ac1-001770a055f5_2048x.jpg?v=1620184068',
						name: 'Cadeira ergonómica',
						company: 'Branch',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria6f',
						subcatg: 'Subcategoria2f',
						price: 329.99,
						date: '29/10/2021',
						serial:'2330j',
						views: '10052'

					},
					{
						id: '13',
						img:'https://m.media-amazon.com/images/I/71Zws1FsRTL._AC_SS450_.jpg',
						name: 'Pack 4 canetas',
						company: 'Bic',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 4.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '14',
						img:'https://www.chip7.pt/325602-thickbox_default/telefone-fixo-maxcom-kxt100-preto-kxt100-black.jpg',
						name: 'Telefone fixo',
						company: 'MAXCOM',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 179.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '15',
						img:'https://moodle.com/wp-content/uploads/2019/07/app.jpg',
						name: 'Software',
						company: 'Big Level',
						description: 'Solução integrada desenvolvida para gerir todo o processo produtivo, que fornece informação completa e em tempo real. Faz toda a parte de gestão do seu inventário e também a faturação do mesmo, só dos melhores para os melhores!',
						category: 'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 220.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '16',
						img:'https://www.bhphotovideo.com/images/images2500x2500/Canon_5175B002_EF_24_70mm_f_2_8L_II_843008.jpg',
						name: 'Lente canon 24-70 1.5',
						company: 'Canon Portugal',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 1899.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '17',
						img:'https://www.botnroll.com/4644-large_default/-ecra-tatil-capacitivo-101-rgblvds-lcd-1024x600-.jpg',
						name: 'Tablet',
						company: 'Asus',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.Solução integrada desenvolvida para gerir todo o processo produtivo, que fornece informação completa e em tempo real. Faz toda a parte de gestão do seu inventário e também a faturação do mesmo, só dos melhores para os melhores!',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 179.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '18',
						img:'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/102078ba05f00ead3aec6f240ab7ebaf_46b686dd-2ac4-4d7b-9ac1-001770a055f5_2048x.jpg?v=1620184068',
						name: 'Cadeira ergonómica',
						company: 'Branch',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria6f',
						subcatg: 'Subcategoria2f',
						price: 329.99,
						date: '29/10/2021',
						serial:'2330j',
						views: '10052'

					},
					{
						id: '19',
						img:'https://m.media-amazon.com/images/I/71Zws1FsRTL._AC_SS450_.jpg',
						name: 'Pack 4 canetas',
						company: 'Bic',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 4.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '20',
						img:'https://www.chip7.pt/325602-thickbox_default/telefone-fixo-maxcom-kxt100-preto-kxt100-black.jpg',
						name: 'Telefone fixo',
						company: 'MAXCOM',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 179.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '21',
						img:'https://moodle.com/wp-content/uploads/2019/07/app.jpg',
						name: 'Software',
						company: 'Big Level',
						description: 'Solução integrada desenvolvida para gerir todo o processo produtivo, que fornece informação completa e em tempo real. Faz toda a parte de gestão do seu inventário e também a faturação do mesmo, só dos melhores para os melhores!',
						category: 'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 220.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '22',
						img:'https://www.bhphotovideo.com/images/images2500x2500/Canon_5175B002_EF_24_70mm_f_2_8L_II_843008.jpg',
						name: 'Lente canon 24-70 1.5',
						company: 'Canon Portugal',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 1899.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '23',
						img:'https://www.botnroll.com/4644-large_default/-ecra-tatil-capacitivo-101-rgblvds-lcd-1024x600-.jpg',
						name: 'Tablet',
						company: 'Asus',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 179.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '24',
						img:'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/102078ba05f00ead3aec6f240ab7ebaf_46b686dd-2ac4-4d7b-9ac1-001770a055f5_2048x.jpg?v=1620184068',
						name: 'Cadeira ergonómica',
						company: 'Branch',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria6f',
						subcatg: 'Subcategoria2f',
						price: 329.99,
						date: '29/10/2021',
						serial:'2330j',
						views: '10052'

					},
					{
						id: '25',
						img:'https://m.media-amazon.com/images/I/71Zws1FsRTL._AC_SS450_.jpg',
						name: 'Pack 4 canetas',
						company: 'Bic',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 4.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '26',
						img:'https://www.chip7.pt/325602-thickbox_default/telefone-fixo-maxcom-kxt100-preto-kxt100-black.jpg',
						name: 'Telefone fixo',
						company: 'MAXCOM',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 179.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '27',
						img:'https://moodle.com/wp-content/uploads/2019/07/app.jpg',
						name: 'Software',
						company: 'Big Level',
						description: 'Solução integrada desenvolvida para gerir todo o processo produtivo, que fornece informação completa e em tempo real. Faz toda a parte de gestão do seu inventário e também a faturação do mesmo, só dos melhores para os melhores!',
						category: 'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 220.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '28',
						img:'https://www.bhphotovideo.com/images/images2500x2500/Canon_5175B002_EF_24_70mm_f_2_8L_II_843008.jpg',
						name: 'Lente canon 24-70 1.5',
						company: 'Canon Portugal',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 1899.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '29',
						img:'https://www.botnroll.com/4644-large_default/-ecra-tatil-capacitivo-101-rgblvds-lcd-1024x600-.jpg',
						name: 'Tablet',
						company: 'Asus',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 179.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '30',
						img:'https://cdn.shopify.com/s/files/1/0124/5662/4187/products/102078ba05f00ead3aec6f240ab7ebaf_46b686dd-2ac4-4d7b-9ac1-001770a055f5_2048x.jpg?v=1620184068',
						name: 'Cadeira ergonómica',
						company: 'Branch',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria6f',
						subcatg: 'Subcategoria2f',
						price: 329.99,
						date: '29/10/2021',
						serial:'2330j',
						views: '10052'

					},
					{
						id: '31',
						img:'https://m.media-amazon.com/images/I/71Zws1FsRTL._AC_SS450_.jpg',
						name: 'Pack 4 canetas',
						company: 'Bic',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 4.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '32',
						img:'https://www.chip7.pt/325602-thickbox_default/telefone-fixo-maxcom-kxt100-preto-kxt100-black.jpg',
						name: 'Telefone fixo',
						company: 'MAXCOM',
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac elit non risus maximus venenatis a sit amet dolor. Vivamus sit amet diam nunc. Vivamus sollicitudin ex ipsum, hendrerit interdum tellus aliquam ac. Nunc sodales consequat augue, imperdiet viverra neque vestibulum non. Praesent congue diam nisi, a placerat felis sodales a. Quisque a odio et urna suscipit tempus. Aliquam erat volutpat.',
						category:'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 179.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					},
					{
						id: '33',
						img:'https://moodle.com/wp-content/uploads/2019/07/app.jpg',
						name: 'Software',
						company: 'Big Level',
						description: 'Solução integrada desenvolvida para gerir todo o processo produtivo, que fornece informação completa e em tempo real. Faz toda a parte de gestão do seu inventário e também a faturação do mesmo, só dos melhores para os melhores!',
						category: 'Categoria1a',
						subcatg: 'Subcategoria4a',
						price: 220.99,
						date: '12/10/2021',
						serial:'2330j',
						views: '1052'

					}
				]
			
			}
		]
	}
];

export default PRODUTOS;