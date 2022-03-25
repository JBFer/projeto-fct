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