import Produto from '../../models/Produtos';

const PRODUTOS = [
	{
		title: 'MAIS VISITADOS',
		horizontal: true,
		data: [
			new Produto(
				'1',
				'https://cdn.shopify.com/s/files/1/1292/7365/products/111553_1_grande.jpg?v=1568391856',
				'Pack 50 parafusos',
				'YourChoice Screw',
				'Categoria1a',
				'Subcategoria4a',
				4.99,
				'12/10/2021',
				'2130j',
				'200'

			  ),
			new Produto(
				'2',
				'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
				'Café',
				'Nespresso',
				'Categoria1a',
				'Subcategoria4a',
				5,
				'12/10/2021',
				'2230j',
				'139'

			  ),
			new Produto(
				'3',
				'https://www.finsa.com/paweb/img/comun/img_finsa/madera_presentacion.jpg',
				'Madeira',
				'Navigator',
				'Categoria1a',
				'Subcategoria4a',
				320,
				'12/10/2021',
				'2330j',
				'1052'

			  ),
		]
	},
	{
		title: 'BASEADO EM PESQUISAS RECENTES',
		data: [
			new Produto(
				'4',
				'https://www.bhphotovideo.com/images/images2500x2500/Canon_5175B002_EF_24_70mm_f_2_8L_II_843008.jpg',
				'Lente canon 24-70 1.5',
				'Canon Portugal',
				'Categoria1a',
				'Subcategoria4a',
				1899.99,
				'12/10/2021',
				'2330j',
				'1052'

			  ),
			new Produto(
				'5',
				'https://www.botnroll.com/4644-large_default/-ecra-tatil-capacitivo-101-rgblvds-lcd-1024x600-.jpg',
				'Tablet',
				'Asus',
				'Categoria1a',
				'Subcategoria4a',
				179.99,
				'12/10/2021',
				'2330j',
				'1052'

			  ),
			new Produto(
				'6',
				'https://moodle.com/wp-content/uploads/2019/07/app.jpg',
				'Software',
				'Big Level',
				'Categoria1a',
				'Subcategoria4a',
				220.99,
				'12/10/2021',
				'2330j',
				'1052'

			  )
		]
	}
];

export default PRODUTOS;