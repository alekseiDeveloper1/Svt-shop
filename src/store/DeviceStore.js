import { makeAutoObservable } from 'mobx'
import src1 from '../assets/img/1.jpg'
import src2 from '../assets/img/2.jpg'
import src3 from '../assets/img/3.jpg'


export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Stone jewelry'},
      {id: 2, name: 'Handmade decorations'},
      {id: 3, name: 'Books'},
      {id: 4, name: 'For kids'},
    ]
    this._brands = [
      {id: 1, name: 'Hits'},
      {id: 2, name: 'Novelties'},
      {id: 3, name: 'About us'},
      {id: 4, name: 'Reviews'},
    ]
    this._devices = [
      {id: 1, name: 'Amethyst', price: 2500, rating: 5, img: src1},
      {id: 2, name: 'Brazilian agate', price: 3000, rating: 4, img: src2},
      {id: 3, name: 'Red jasper', price: 2700, rating: 5, img: src3},
      {id: 1, name: 'Amethyst', price: 2500, rating: 5, img: src1},
      {id: 2, name: 'Brazilian agate', price: 3000, rating: 4, img: src2},
      {id: 3, name: 'Red jasper', price: 2700, rating: 5, img: src3},
    ]
    this._selectedType = {}
    this._selectedBrand = {}

    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }
  get selectedBrand() {
    return this._selectedBrand
  }
}