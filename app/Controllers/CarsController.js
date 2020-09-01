import { ProxyState } from "../AppState.js";
import carsService from "../Services/CarsService.js";
import Car from "../Models/Car.js";

// private
function _drawCars() {
  let cars = ProxyState.cars
  let templates = new Car({_id:"",make:"",model:"",year:1,price:1,imgUrl:"",description:""}).formTemplate
  cars.forEach(c => templates += c.Template)
  document.getElementById('cars').innerHTML = templates
}


//Public
export default class CarsController {
  constructor() {
    // NOTE Add all Listeners   
    ProxyState.on('cars', _drawCars)

    // NOTE Get all appropriate data
    this.getCars();
  }

  // NOTE this allows to fetch manually if needed
  getCars() {
    try {
      carsService.getCars();
    } catch (error) {
      console.error(error)
    }
  }


  createCar() {
    event.preventDefault();
    let form = event.target
    let rawCar = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: parseInt(form.carprice.value),
      // @ts-ignore
      description: form.cardescription.value,
      // @ts-ignore
      imgUrl: form.carimg.value
    }
    try {
      carsService.createCar(rawCar)
    } catch (error) {
      console.error(error)
    }
  }

  removeCar(id) {
    try {
      carsService.removeCar(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id) {
    try {
      carsService.bid(id)
    } catch (error) {
      console.error(error)
    }
  }


}
