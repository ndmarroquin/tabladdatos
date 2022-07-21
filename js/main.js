import { user } from "./user.js";

let root = document.querySelector("#root");

//titulo
let titulo = '<h1>'+'Ejercicio Tabla'+'</h1>'+  
              '<br>'

//CREACIÓN DE LA TABLA
let table = '<table border="1" >'+
      '<tr>'+'<th HEIGHT="40" WIDTH="50">'+'ID'+'</th>'+'<th WIDTH="80">'+'Nombre'+ '</th>' +'<th>'+'Correo'+ '</th>' +'</th>'+
      '<tr>'+'<td HEIGHT="50" ALIGN="CENTER">'+user[0].id +'</td>'+'<td>'+user[0].name + '</td>' +'<td>'+user[0].email + '</td>' +'</tr>'+
      '<tr>'+'<td HEIGHT="50" ALIGN="CENTER">'+user[1].id +'</td>'+'<td>'+user[1].name + '</td>' +'<td>'+user[1].email + '</td>' +'</tr>'+
      '<tr>'+'<td HEIGHT="50" ALIGN="CENTER">'+user[2].id +'</td>'+'<td>'+user[2].name + '</td>' +'<td>'+user[2].email + '</td>' +'</tr>'+
      '<tr>'+'<td HEIGHT="50" ALIGN="CENTER">'+user[3].id +'</td>'+'<td>'+user[3].name + '</td>' +'<td>'+user[3].email + '</td>' +'</tr>'+
      '<tr>'+'<td HEIGHT="50" ALIGN="CENTER">'+user[4].id +'</td>'+'<td>'+user[4].name + '</td>' +'<td>'+user[4].email + '</td>' +'</tr>'+
      '<tr>'+'<td HEIGHT="50" ALIGN="CENTER">'+user[5].id +'</td>'+'<td>'+user[5].name + '</td>' +'<td>'+user[5].email + '</td>' +'</tr>'+
      '<tr>'+'<td HEIGHT="50" ALIGN="CENTER">'+user[6].id +'</td>'+'<td>'+user[6].name + '</td>' +'<td>'+user[6].email + '</td>' +'</tr>'+
    '</table';

// Se agrega a la etiqueta root el DOM la variable listado
root.innerHTML = titulo + table