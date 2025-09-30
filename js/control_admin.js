
    let servicios = []; // Array para almacenar usuarios
    const form = document.getElementById("form_servicios");
    const form_editar = document.getElementById("form_editar");
    const tableBody = document.getElementById("tabla_servicios");

    servicios.push({nombre_servicio:"Desarrollo Web", precio:"$200 USD", estado:"Activo"});
    servicios.push({nombre_servicio:"Consultoria Tecnológica", precio:"$200 USD", estado:"Inactivo"});
    servicios.push({nombre_servicio:"Mantenimiento de Sistemas", precio:"$250 USD", estado:"Activo"});
    servicios.push({nombre_servicio:"Migración de Datos", precio:"$400 USD", estado:"Inactivo"});
    servicios.push({nombre_servicio:"Capacitación IT", precio:"$150 USD", estado:"Activo"});
    servicios.push({nombre_servicio:"Integración de APIs", precio:"$350 USD", estado:"Inactivo"});

    //Consultar Servicios
    function mostrar_servicios() {
      tableBody.innerHTML = "";
      const cabecera = `<thead class="table-light">
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          </tbody>`
          tableBody.innerHTML += cabecera
        servicios.forEach((servicio, index) => {
        const row = `<tr>
          <td>${servicio.nombre_servicio}</td>
          <td>${servicio.precio}</td>
          <td>${servicio.estado}</td>
          <td>
            <button type="button" class="btn btn-sm btn-light" onclick="formEditarServicio(${index})"><img src="Imagenes/lapiz_naranja.png" class="float-start">Editar</button>
            <button type="button" class="btn btn-sm btn-light" onclick="eliminarServicio(${index})"><img src="Imagenes/eliminar.png" class="float-start">Eliminar</button>
          </td>
        </tr>`;
        tableBody.innerHTML += row;
      });
    }
    
    mostrar_servicios();


    // Editar Servicio
    function formEditarServicio (index) {
      const servicio = servicios[index];
      tableBody.innerHTML = "";
      const form = `<form id="userForm">
      <thead class="table-light">
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          <tr>
          <input type="hidden" id="userId">
          <td>
          <input type="text" id="nombre" placeholder="${servicio.nombre_servicio}" required></td>
          <td>
    <input type="text" id="precio" placeholder="${servicio.precio}" required></td>
    <td>
    <input type="text" id="estado" placeholder="${servicio.estado}" required></td>
    <td>
    <button type="button" onclick="editarServicio(${index})">Guardar</button>
    <button type="button" onclick="mostrar_servicios()">Cancelar</button>
    </td>
        </tr>
        </tbody>
        </form>`
    tableBody.innerHTML += form;
    }  

    function editarServicio (index){
    servicios[index].nombre_servicio = document.getElementById("nombre").value;
    servicios[index].precio = document.getElementById("precio").value;
    servicios[index].estado = document.getElementById("estado").value;
    alert("Servicio Editado Exitosamente");
    mostrar_servicios();
    }
      
      

    // Eliminar Servicio
    window.eliminarServicio = function(index) {
      servicios.splice(index, 1);
      alert("Servicio Eliminado Exitosamente");
      mostrar_servicios();
    };

    // Adicionar Servicio
    function formAdicionarServicio () {
      tableBody.innerHTML = "";
      const form = `<form id="userForm">
      <thead class="table-light">
      <tbody>
            <tr>
              <td><label for="nombre_servicio">Nombre Servicio:</label>
              <input type="text" id="nombre_servicio" name="nombre_servicio" required></td>
            </tr>
            <tr>
              <td><label for="precio_servicio">Precio Servicio:</label>
              <input type="text" id="precio_servicio" name="precio_servicio" required></td>
            </tr>
            <tr>
              <td><label for="estado_servicio">Estado Servicio:</label>
              <input type="text" id="estado_servicio" name="estado_servicio" required></td>
            </tr>
    <tr>
    <td>
    <button type="button" onclick="adicionarServicio()">Guardar</button>
    <button type="button" onclick="mostrar_servicios()">Cancelar</button>
    </td>
        </tr>
        </tbody>
        </form>`
    tableBody.innerHTML += form;
    }

    function adicionarServicio(){
    if (document.getElementById("nombre_servicio").value != "" && 
        document.getElementById("precio_servicio").value != "" &&
        document.getElementById("estado_servicio").value != ""
      ){
      nombre_nuevo_servicio = document.getElementById("nombre_servicio").value;
      precio_nuevo_servicio = document.getElementById("precio_servicio").value;
      estado_nuevo_servicio = document.getElementById("estado_servicio").value;
    }
    else {
      alert("Campo No puede estar vacio");
      document.getElementById("nombre_servicio").value = "";
      document.getElementById("precio_servicio").value = "";
      document.getElementById("estado_servicio").value = "";
    }

    if (nombre_nuevo_servicio != "" && precio_nuevo_servicio != "" && estado_nuevo_servicio != ""){
    servicios.push({nombre_servicio: nombre_nuevo_servicio,precio: precio_nuevo_servicio,estado: estado_nuevo_servicio})
    alert("Se Crea Nuevo Servicio Exitosamente");  
    }
    mostrar_servicios();
    }