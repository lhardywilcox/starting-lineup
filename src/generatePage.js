



//Write function to render the html card for each employee type.
function renderManagerCard({ name, role, id, email, office_number }) {
    return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
    <p class="card-text">${id}</p>
    <a href="#" class="card-link">${email}</a>
    <a href="#" class="card-link">${office_number}</a>
  </div>
</div>`
}

function renderEngineerCard({ name, role, id, email, github }) {
    return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
    <p class="card-text">${id}</p>
    <a href="#" class="card-link">${email}</a>
    <a href="#" class="card-link">${github}</a>
  </div>
</div>`
}

function renderInternCard({ name, role, id, email, school }) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
      <p class="card-text">${id}</p>
      <a href="#" class="card-link">${email}</a>
      <a href="#" class="card-link">${school}</a>
    </div>
  </div>`
}




//Write function to render the webpage?
function renderWebPage
    //loop through Array of employees
    //if role === manager, renderManagerCard
    //if role === engineer, renderEngineerCard
    //if role === intern, renderInternCard

    // return html document




module.exports = renderWebPage;