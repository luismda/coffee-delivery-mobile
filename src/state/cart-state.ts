import { atom } from 'jotai'

import { CoffeeItemDTO } from '@/dtos/coffee-dto'

type CartAtom = Map<string, CoffeeItemDTO>

/**
 * State atoms
 */

export const cartAtom = atom<CartAtom>(new Map())

/**
 * State selectors
 */

export const cartItemsAtom = atom((get) => {
  return [...get(cartAtom).values()]
})

export const totalCartItemsAtom = atom((get) => {
  return [...get(cartAtom).values()].length
})

export const totalCartPriceAtom = atom((get) => {
  const items = [...get(cartAtom).values()]

  const totalPrice = items.reduce((acc, item) => {
    return item.amount * item.price + acc
  }, 0)

  return totalPrice
})

/**
 * Action atoms
 */

export const addItemToCartAtom = atom(
  null,
  (_, set, newItem: CoffeeItemDTO) => {
    set(cartAtom, (cartItemsMap) => {
      const key = newItem.id.concat(newItem.size)
      const item = cartItemsMap.get(key)

      cartItemsMap.set(key, {
        ...newItem,
        amount: item ? item.amount + newItem.amount : newItem.amount,
      })

      return new Map(cartItemsMap)
    })
  },
)

export const removeItemFromCartAtom = atom(
  null,
  (_, set, item: CoffeeItemDTO) => {
    set(cartAtom, (cartItemsMap) => {
      const key = item.id.concat(item.size)
      cartItemsMap.delete(key)

      return new Map(cartItemsMap)
    })
  },
)

export const updateItemAmountAtom = atom(
  null,
  (_, set, item: CoffeeItemDTO) => {
    set(cartAtom, (cartItemsMap) => {
      const key = item.id.concat(item.size)
      cartItemsMap.set(key, item)

      return new Map(cartItemsMap)
    })
  },
)

export const clearCartAtom = atom(null, (_, set) => {
  set(cartAtom, (cartItemsMap) => {
    cartItemsMap.clear()
    return new Map(cartItemsMap)
  })
})
