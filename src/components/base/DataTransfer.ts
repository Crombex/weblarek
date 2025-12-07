import { IProduct } from "../../types/index";
import { IApi } from "../../types/index";
import { IPostData } from "../../types/index";

export class DataTransfer {
  protected api: IApi

  constructor(obj: IApi) {
    this.api = obj
  }

  async getData(): Promise<{total: number, items: IProduct[]}> {
    return this.api.get('/product/')
  }

  async postData(obj: IPostData): Promise<object> {
    return this.api.post('/order/', obj)
  }
}
