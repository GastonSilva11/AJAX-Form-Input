fetch(
  "https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json"
)
  .then((datosObtenidos) => datosObtenidos.json())
  .then((personas) => {
    let table = document.querySelector("#tableBody");
    let search = document.querySelector("#inputSearch");
    let info = "";
    for (const persona of personas) {
      //console.log(persona)
      info += `
  <tr > 
  <td > ${persona.id}</td>
  <td > ${persona.firstname}</td>
  <td > ${persona.lastname}</td>
  <td > ${persona.age}</td>
  </tr>
  `;
    }

    table.innerHTML = info;

    search.addEventListener("input", function (e) {
      const busqueda = e.target.value;
      console.log(personas);
      table.innerHTML = "";

      personas.map((persona) => {
        if (busqueda === "") {
          table.innerHTML = info;
        }
        if (
          busqueda !== "" &&
          (persona.firstname.toLowerCase().includes(busqueda.toLowerCase()) ||
            persona.lastname.toLowerCase().includes(busqueda.toLowerCase()))
        ) {
          table.innerHTML += `
 <tr > 
  <td "> ${persona.id}</td>
  <td > ${persona.firstname}</td>
  <td "> ${persona.lastname}</td>
  <td > ${persona.age}</td>
  </tr>
  `;
        }
      });

      /* for(const result of personas){
if (busqueda.includes(result)) {
    alert("hola")
    
}else{

    table.innerHTML = busqueda;
}

} */
    });
  });
