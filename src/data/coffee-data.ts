import type { CoffeeDTO, CoffeeData } from '@/dtos/coffee-dto'

export const COFFEE_DATA: CoffeeData[] = [
  {
    title: 'Tradicionais',
    data: [
      {
        id: '01',
        price: 9.9,
        category: 'Tradicional',
        name: 'Expresso Tradicional',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/expresso.png'),
        description: `O tradicional café feito com água quente e grãos moídos`,
      },
      {
        id: '02',
        price: 9.9,
        category: 'Tradicional',
        name: 'Expresso Americano',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/americano.png'),
        description: `Expresso diluído, menos intenso que o tradicional`,
      },
      {
        id: '03',
        price: 9.9,
        category: 'Tradicional',
        name: 'Expresso Cremoso',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/cremoso.png'),
        description: `Café expresso tradicional com espuma cremosa`,
      },
      {
        id: '04',
        price: 9.9,
        category: 'Tradicional',
        name: 'Latte',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/latte.png'),
        description: `Café expresso com o dobro de leite e espuma cremosa`,
      },
      {
        id: '05',
        price: 9.9,
        category: 'Tradicional',
        name: 'Expresso Gelado',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/gelado.png'),
        description: `Bebida preparada com café expresso e cubos de gelo`,
      },
    ],
  },
  {
    title: 'Doces',
    data: [
      {
        id: '06',
        price: 9.9,
        category: 'Doce',
        name: 'Capuccino',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/capuccino.png'),
        description: `Bebida com canela feita de doses de café, leite e espuma`,
      },
      {
        id: '07',
        price: 9.9,
        category: 'Doce',
        name: 'Mocaccino',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/mochaccino.png'),
        description: `Café expresso com calda de chocolate, pouco leite e espuma`,
      },
      {
        id: '08',
        price: 9.9,
        category: 'Doce',
        name: 'Chocolate Quente',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/chocolate.png'),
        description: `Bebida feita com chocolate dissolvido no leite quente e café`,
      },
    ],
  },
  {
    title: 'Especiais',
    data: [
      {
        id: '09',
        price: 9.9,
        category: 'Especial',
        name: 'Cubano',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/cubano.png'),
        description: `Drink gelado de café expresso com rum, creme de leite e hortelã`,
      },
      {
        id: '10',
        price: 9.9,
        category: 'Especial',
        name: 'Havaiano',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/havaiano.png'),
        description: `Bebida adocicada preparada com café e leite de coco`,
      },
      {
        id: '11',
        price: 9.9,
        category: 'Especial',
        name: 'Árabe',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/arabe.png'),
        description: `Bebida preparada com grãos de café árabe e especiarias`,
      },
      {
        id: '12',
        price: 9.9,
        category: 'Especial',
        name: 'Irlandês',
        sizes: ['114ml', '140ml', '227ml'],
        image: require('@/assets/coffee/irlandes.png'),
        description: `Bebida a base de café, uísque irlandês, açúcar e chantilly`,
      },
    ],
  },
]

export const COFFEE_LIST = COFFEE_DATA.map(({ data }) => data).flat()

export const HIGHLIGHT_COFFEE_DATA: CoffeeDTO[] = [
  COFFEE_LIST[3],
  COFFEE_LIST[6],
  COFFEE_LIST[11],
]

export const CATEGORIES_DATA = [
  ...new Set(COFFEE_LIST.map(({ category }) => category)),
]
