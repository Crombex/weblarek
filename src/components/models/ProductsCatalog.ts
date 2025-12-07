import {IProduct} from '../../types/index'

export class ProductsCatalog {
  protected items: IProduct[] = []
  protected selectedItem: IProduct | null = null

  getItems(): IProduct[] {
    return this.items
  }

  setSelectedItem(item: IProduct): void {
    this.selectedItem = item
  }

  getSelectedItem(): IProduct | null   {
    return this.selectedItem ?? null
  }

  setItems(items: IProduct[]): void {
    this.items = items
  }

  getItemById(itemId: IProduct['id']): IProduct | null {
    const item = this.items.find(elem => elem.id === itemId)
    return item ?? null
  }
}