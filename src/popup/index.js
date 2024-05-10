import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

function get_job_applications() {
  console.log("checking airtable for job apps...");
  let apiCall = new XMLHttpRequest();
  apiCall.open("GET", "https://api.airtable.com/v0/appcBBJz5aJs3zc0I/Applications?maxRecords=3");
  apiCall.send();
  apiCall.onload = () => {
    console.log(JSON.parse(apiCall.response));
  };

}

module.exports = [
    get_job_applications
]
