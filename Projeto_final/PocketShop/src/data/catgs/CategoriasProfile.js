const CATEGORIAS = [
	{
		title: 'mInfo',
		key: 'inf',
		data: [
			{
				id: 'info',
				company: 'BigLevel',
				contribuinte: '261964828',
				telefone: '919 369 596',
				email: 'jbfport@gmail.com',
				password: '********',
				moradaFat: 'Stª Maria da Feira',
				moradaEnt: 'Souto',
			}
		]
	},
	{
		title: 'Categorias de interesse',
		key: 'catg',
		data: [
			{
				id: 'catg',
				list: [
					{
						id: '1',
						category: 'Categoria1a',
						icon: 'atom',
					},
					{
						id: '2',
						category: 'Categoria2b',
						icon: 'atom',
					},
					{
						id: '3',
						category: 'Categoria3c',
						icon: 'atom',
					},
					{
						id: '4',
						category: 'Categoria4d',
						icon: 'atom',
					},
					{
						id: '5',
						category: 'Categoria5e',
						icon: 'atom',
					},
					{
						id: '6',
						category: 'Categoria6f',
						icon: 'atom',
					},
					{
						id: '7',
						category: 'Categoria7g',
						icon: 'atom',
					},
					{
						id: '8',
						category: 'Categoria8h',
						icon: 'atom',
					},
					{
						id: '9',
						category: 'Categoria9i',
						icon: 'atom',
					}
				]
			}
		]
	},
	{
		title: 'Encomendas',
		key: 'encomendas',
		data: [
			{
				id: 'encomendas',
				list: [
					{
						id: '1',
						numEnc: 1389,
						precoTt: 19.96,
						data: '12/04/2021',
						cont: '261964828',
						moradaFaturacao: 'Stª Maria da Feira',
						moradaEntrega: 'Rio Meão',
						info: [
							{
								idProd: '1',
								qnt: 2,
								name: 'Pack 50 parafusos',
								price: 4.99
							},
							{
								idProd: '7',
								qnt: 8,
								name: 'Pack 4 canetas',
								price: 4.99
							}
						]
					},
					{
						id: '2',
						numEnc: 2123,
						precoTt: 415.95,
						data: '13/04/2021',
						cont: '261964828',
						moradaFaturacao: 'Stª Maria da Feira',
						moradaEntrega: 'Souto',
						info: [
							{
								idProd: '5',
								qnt: 1,
								name: 'Tablet',
								price: 179.99
							},
							{
								idProd: '7',
								qnt: 3,
								name: 'Pack 4 canetas',
								price: 4.99
							},
							{
								idProd: '9',
								qnt: 1,
								name: 'Software',
								price: 220.99
							}
						]
					},
					{
						id: '3',
						numEnc: 4632,
						precoTt: 3305.94,
						data: '16/04/2021',
						cont: '261964828',
						moradaFaturacao: 'Stª Maria da Feira',
						moradaEntrega: 'Souto',
						info: [
							{
								idProd: '5',
								qnt: 1,
								name: 'Tablet',
								price: 179.99
							},
							{
								idProd: '2',
								qnt: 3,
								name: 'Café',
								price: 5
							},
							{
								idProd: '4',
								qnt: 1,
								name: 'Lente canon 24-70 1.5',
								price: 1899.99
							},
							{
								idProd: '6',
								qnt: 3,
								name: 'Cadeira ergonómica',
								price: 329.99
							},
							{
								idProd: '9',
								qnt: 1,
								name: 'Software',
								price: 220.99
							}
						]
					},
					{
						id: '4',
						numEnc: 4739,
						precoTt: 179.99,
						data: '19/04/2021',
						cont: '261964828',
						moradaFaturacao: 'Stª Maria da Feira',
						moradaEntrega: 'Souto',
						info: [
							{
								idProd: '5',
								qnt: 1,
								name: 'Tablet',
								price: 179.99
							}
						]
					},
					{
						id: '5',
						numEnc: 3899,
						precoTt: 194.96,
						data: '12/04/2021',
						cont: '261964828',
						moradaFaturacao: 'Stª Maria da Feira',
						moradaEntrega: 'Souto',
						info: [
							{
								idProd: '5',
								qnt: 1,
								name: 'Tablet',
								price: 179.99
							},
							{
								idProd: '7',
								qnt: 3,
								name: 'Pack 4 canetas',
								price: 4.99
							}
						]
					}
				]
			}
		]
	}
];

export default CATEGORIAS;