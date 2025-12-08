import { ICustomer } from "../../types/index";

export class Customer {
  protected customerInfo: Partial<ICustomer> = {}

  setCustomerInfo(data: Partial<ICustomer>): void {
    Object.assign(this.customerInfo, data)
  }

  getCustomerInfo(): Partial<ICustomer> {
    return this.customerInfo
  }

  validateCustomerInfo(): Partial<Record<keyof ICustomer, string>> {
    const resultObj = Object.fromEntries(Object.entries(this.customerInfo).filter(elem => elem[1] === ''))
    for (let key in resultObj) {
      resultObj[key] = `отсутствует поле ${key}`
    }
    return resultObj
  }

  clearCustomerInfo(): void {
    this.customerInfo = {}
  }
}

