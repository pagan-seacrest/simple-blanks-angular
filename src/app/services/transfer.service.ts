import { IBlank } from './../components/blank/blank.component';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TransferService {

  values: Array<IBlank> = [];

  constructor() {
    this.values = [...this.read()];
  }
  
  read(item: string = "blanks"): Array<IBlank> {
    const ls = localStorage.getItem(item);
    if (ls) {
      this.values = [...this.values, ...JSON.parse(ls)]
      return this.values;
    }
    return this.values;
  }

  write(values: IBlank): void {
    const ls = this.read();
    ls.push(values);
    localStorage.setItem("blanks", JSON.stringify(ls));
  }

  clear() {
    localStorage.removeItem("blanks");
  }

  create(values: IBlank): void {
    const newList = [];
    newList.push(values)
    localStorage.setItem("blank", JSON.stringify(newList));
  }

}
