import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  constructor() {}

  setValue(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  getValue(key: string) {
    return window.localStorage.getItem(key);
  }
}
