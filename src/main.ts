import './scss/styles.scss';

import { API_URL } from './utils/constants';
import { Api } from './components/base/Api';
import { DataTransfer } from './components/base/DataTransfer';
import { ProductsCatalog } from './components/models/ProductsCatalog';
import { Cart } from './components/models/Cart';
import { Customer } from './components/models/Customer';
import { apiProducts } from './utils/data';

const productsCatalog = new ProductsCatalog()
const cart = new Cart()
const customer = new Customer()

productsCatalog.setItems(apiProducts.items)
console.log('Массив товаров из каталога: ', productsCatalog.getItems())

productsCatalog.setSelectedItem(apiProducts.items[1])
console.log('Выбранный товар: ', productsCatalog.getSelectedItem())

console.log('Товар по id: ', productsCatalog.getItemById('b06cde61-912f-4663-9751-09956c0eed67'))


cart.addItem(apiProducts.items[3])
cart.addItem(apiProducts.items[1])
cart.addItem(apiProducts.items[0])

console.log('Список товаров в корзине: ', structuredClone(cart.getItems()))
console.log('Цена всех товаров в корзине: ', cart.getCartPrice())

cart.removeItem(apiProducts.items[1].id)
console.log('Список товаров в корзине после удаления одного: ', cart.getItems())
console.log('Количество товаров в корзине: ', cart.getItemsQuantity())
console.log('Товар 854cef69-976d-4c2a-a18c-2aa45046c390 в наличии: ', cart.hasItem(apiProducts.items[0].id))
console.log('Товар c101ab44-ed99-4a54-990d-47aa2bb4e7d9 в наличии: ', cart.hasItem(apiProducts.items[1].id))
console.log('Товар 412bcf81-7e75-4e70-bdb9-d3c73c9803b7 в наличии: ', cart.hasItem(apiProducts.items[3].id))

cart.clearCart()
console.log('Список товаров в корзине после очистки и их количество: ', cart.getItems(), cart.getItemsQuantity())


customer.setCustomerInfo({
  email: 'practicum@yandex.ru',
  payment: 'card',
  phone: '8(800)555-35-35',
  address: '',
})

console.log('Данные о пользователе: ', customer.getCustomerInfo())
console.log('Незаполненные поля: ', customer.validateCustomerInfo())

customer.clearCustomerInfo()
console.log('Данные о пользователе после очистки: ', customer.getCustomerInfo())


const api = new Api(API_URL)
const dataTransfer = new DataTransfer(api)

try {
  const fetchData = await dataTransfer.getData()
  productsCatalog.setItems(fetchData.items)
  console.log('Массив товаров из каталога повторно: ', productsCatalog.getItems())
} catch (err) {
  console.error('Ошибка при получении данных: ', err)
}

