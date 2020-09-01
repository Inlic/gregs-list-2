export default class Car {
  constructor({ _id, make, model, year, price, imgUrl, description }) {
    this.id = _id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.imgUrl = imgUrl
    this.description = description || "no description"
  }

  get Template() {
    return /**html */ `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.imgUrl}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.make} - ${this.model} - ${this.year}</h4>
              <p class="card-text">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.carsController.removeCar('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.carsController.bid('${this.id}')">+ $100</button>
                  <p>$${this.price.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
  get formTemplate() {
    return /**html*/ `
    <div class="row my-3">
                      <div class="col">
                          <form onsubmit="app.carsController.createCar()" class="form-inline">
                              <div class="form-group p-1">
                                  <label class="mr-1" for="make">Make</label>
                                  <input type="text" name="make" id="make" class="form-control" placeholder="Make...">
                              </div>
                              <div class="form-group p-1">
                                  <label class="mr-1" for="model">Model</label>
                                  <input type="text" name="model" id="model" class="form-control" placeholder="Model...">
                              </div>
                              <div class="form-group p-1">
                                  <label class="mr-1" for="year">Year</label>
                                  <input type="number" name="year" id="year" class="form-control" placeholder="Year..." min="1900"
                                      max="2021">
                              </div>
                              <div class="form-group p-1">
                                  <label class="mr-1" for="carprice">Price</label>
                                  <input type="number" name="carprice" id="carprice" class="form-control" placeholder="Price...">
                              </div>
                              <div class="form-group p-1">
                                  <label class="mr-1" for="cardescription">Description</label>
                                  <input type="text" name="cardescription" id="cardescription" class="form-control"
                                      placeholder="Description...">
                              </div>
                              <div class="form-group p-1">
                                  <label class="mr-1" for="carimg">Image Url</label>
                                  <input type="url" name="carimg" id="carimg" class="form-control" placeholder="Image Url...">
                              </div>
                              <button type="submit" class="btn btn-outline-success">Add Car</button>
                          </form>
                      </div>
                  </div>
    `
  }

}






