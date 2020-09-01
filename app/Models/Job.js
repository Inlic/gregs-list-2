export default class Job {
  // Object Destructuring
  constructor({ _id, company, jobTitle, rate, hours, description }) {
    this.id = _id
    this.position = jobTitle
    this.salary = rate
    this.company = company
    this.hours = hours
    this.description = description || "no description"
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <div class="card-body">
              <h4 class="card-title">${this.company} - ${this.position} - Salary: ${this.salary} - Hours: ${this.hours}</h4>
              <p class="card-text" contenteditable="true">${this.description}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.jobsController.removeJob('${this.id}')">Delete</button>
              </div>
          </div>
      </div>
    </div>`
  }
  get formTemplate(){
    return `<div class="row my-3">
    <div class="col">
        <form onsubmit="app.jobsController.createJob()" class="form-inline">
            <div class="form-group p-1">
                <label class="mr-1" for="position">Position</label>
                <input type="text" name="position" id="position" class="form-control" placeholder="Position...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="salary">Salary</label>
                <input type="text" name="salary" id="salary" class="form-control" placeholder="Salary...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="hours">Hours</label>
                <input type="text" name="hours" id="hours" class="form-control" placeholder="Hours...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="company">Company</label>
                <input type="text" name="company" id="company" class="form-control" placeholder="Company...">
            </div>
            <div class="form-group p-1">
                <label class="mr-1" for="jobdescription">Description</label>
                <input type="text" name="jobdescription" id="jobdescription" class="form-control"
                    placeholder="Description...">
            </div>
            <button type="submit" class="btn btn-outline-success">Add Job</button>
        </form>
    </div>
</div>
    `
  }
}