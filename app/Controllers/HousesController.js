import { ProxyState } from "../AppState.js";
import housesService from "../Services/HousesService.js";
import House from "../Models/House.js";

// private
function _drawHouses() {
  let houses = ProxyState.houses
  let templates = new House({ _id: "", imgUrl: "", bedrooms: "", bathrooms: "", levels: "", year: "", price: "", description: "" }).formTemplate
  houses.forEach(h => templates += h.Template)
  document.getElementById('houses').innerHTML = templates
}


//Public
export default class HousesController {
  constructor() {
    // NOTE Add all Listeners   
    ProxyState.on('houses', _drawHouses)

    // NOTE Get all appropriate data
    this.getHouses();
  }

  // NOTE this allows to fetch manually if needed
  getHouses() {
    try {
      housesService.getHouses();
    } catch (error) {
      console.error(error)
    }
  }


  createHouse() {
    event.preventDefault();
    let form = event.target
    //Must be named after the API target or it won't POST to the api
    let rawHouse = {
      // @ts-ignore
      levels: form.levels.value,
      // @ts-ignore
      bedrooms: form.beds.value,
      // @ts-ignore
      bathrooms: form.baths.value,
      // @ts-ignore
      year: form.yearbuilt.value,
      // @ts-ignore
      price: parseInt(form.houseprice.value),
      // @ts-ignore
      description: form.housedescription.value,
      // @ts-ignore
      imgUrl: form.houseimg.value
    }
    try {
      housesService.createHouse(rawHouse)
    } catch (error) {
      console.error(error)
    }
  }

  removeHouse(id) {
    try {
      housesService.removeHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  bid(id) {
    try {
      housesService.bid(id)
    } catch (error) {
      console.error(error)
    }
  }


}