import { ProxyState } from "../AppState.js";
import jobsService from "../Services/JobsService.js";
import Job from "../Models/Job.js";

// private
function _drawJobs() {
  let jobs = ProxyState.jobs
  let templates = new Job({ _id: "", company: "", jobTitle: "", rate: "", hours: "", description: "" }).formTemplate
  jobs.forEach(h => templates += h.Template)
  document.getElementById('jobs').innerHTML = templates
}


//Public
export default class JobsController {
  constructor() {
    // NOTE Add all Listeners   
    ProxyState.on('jobs', _drawJobs)

    // NOTE Get all appropriate data
    this.getJobs();
  }

  // NOTE this allows to fetch manually if needed
  getJobs() {
    try {
      jobsService.getJobs();
    } catch (error) {
      console.error(error)
    }
  }


  createJob() {
    event.preventDefault();
    let form = event.target
    //Must be named after the API target or it won't POST to the api
    let rawJob = {
      // @ts-ignore
      company: form.company.value,
      // @ts-ignore
      jobTitle: form.position.value,
      // @ts-ignore
      rate: form.salary.value,
      // @ts-ignore
      hours: form.hours.value,
      // @ts-ignore
      description: form.jobdescription.value
    }
    try {
      jobsService.createJob(rawJob)
    } catch (error) {
      console.error(error)
    }
  }

  removeJob(id) {
    try {
      jobsService.removeJob(id)
    } catch (error) {
      console.error(error)
    }
  }

}