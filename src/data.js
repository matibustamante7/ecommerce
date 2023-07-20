const prendasNike = [
    {
      id: 1,
      nombre: 'Camiseta Nike Barcelona',
      categoria: 'Camiseta',
      talle: 'M',
      stock: 10,
      imagen: 'https://assets-es.imgfoot.com/media/cache/800x800/fcb-home-2023-2024.jpg',
      precio: 50.99,
    },
    {
      id: 2,
      nombre: 'Medias Nike Classic',
      categoria: 'Medias',
      talle: 'Único',
      stock: 20,
      imagen: 'https://essential.vtexassets.com/arquivos/ids/866343-500-auto?v=1775174009&width=500&height=auto&aspect=true',
      precio: 12.50,
    },
    {
      id: 3,
      nombre: 'Shorts Nike Strike',
      categoria: 'Shorts',
      talle: 'L',
      stock: 15,
      imagen: 'https://www.ekinsport.com/media/catalog/product/cache/173ef9ab000c6667578594f63bf9da15/d/h/dh9363-010_short-nike-dri-fit-strike-22-noir-pour-homme-dh9363-010_01.jpg',
      precio: 30.75,
    },
    // Agregar más productos de Nike
    // ...
  ];
  
  const prendasAdidas = [
    {
      id: 1,
      nombre: 'Campera Adidas Squadra',
      categoria: 'Campera',
      talle: 'XL',
      stock: 5,
      imagen: 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/campera-de-futbol-adidas-squadra-21-roja-100020gp6464001-1.jpg',
      precio: 70.25,
    },
    {
      id: 2,
      nombre: 'Botines Adidas Predator',
      categoria: 'Botines',
      talle: 'US 10',
      stock: 8,
      imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/15b273fb6c5e4c298d68ae9b00ff343f_9366/Botines_Predator_Edge.1_Low_Terreno_Firme_Naranja_GW1024_22_model.jpg',
      precio: 95.00,
    },
    // Agregar más productos de Adidas
    // ...
  ];
  
  const prendasPuma = [
    {
      id: 1,
      nombre: 'Shorts Puma Liga',
      categoria: 'Shorts',
      talle: 'M',
      stock: 12,
      imagen: 'https://d2lhrgc5rek5ye.cloudfront.net/pub/media/catalog/product/cache/85a77bdaaa2c784352166a9ec6d7717d/7/0/703432_blue_front_womens_g10_4.jpg',
      precio: 27.99,
    },
    {
      id: 2,
      nombre: 'Camiseta Puma Milan',
      categoria: 'Camiseta',
      talle: 'L',
      stock: 7,
      imagen: 'https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-milan-puma-oficial-replica-negra-640020757277001-1.jpg',
      precio: 55.50,
    },
    // Agregar más productos de Puma
    // ...
  ];
  
  // Unir los arrays de cada marca en un solo array
  export const todasLasPrendas = [...prendasNike, ...prendasAdidas, ...prendasPuma];
  