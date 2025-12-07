import { IProduct } from "../../types/index";

export class Cart {
  protected items: IProduct[] = []

  addItem(item: IProduct): void {
    if (typeof item.price === 'number') {
      this.items.push(item)
    }
  }

  removeItem(itemId: IProduct['id']): void {
    this.items.splice(this.items.findIndex(elem => elem.id === itemId), 1)
  }

  getItemsQuantity(): number {
    return this.items.length
  }

  getItems(): IProduct[] {
    return this.items
  }

  getCartPrice(): number {
    return this.items.reduce((acc, elem) => {
      return acc + (elem.price as number)
    }, 0)
  }

  hasItem(itemId: IProduct['id']): boolean {
    return this.items.some(elem => elem.id === itemId)
  }

  clearCart(): void {
    this.items = []
  }
}