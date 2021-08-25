fetch("actors.json")
  .then((res) => res.json())
  .then(gotData);

function gotData(data) {
  data.forEach(showActor);
}
function showActor(actor) {
  console.log(actor.fullname);
  const template = document.querySelector("template").content;
  const myCopy = template.cloneNode(true);
  myCopy.querySelector(".name").textContent = actor.fullname;
  myCopy.querySelector(".movie").textContent = actor.movie;
  const parent = document.querySelector(".actor-list");
  parent.appendChild(myCopy);
}
