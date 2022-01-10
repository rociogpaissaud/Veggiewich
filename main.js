/* Mi objtivo final:
Armar el sitio con bootstrap y css. 
Cargar datos en las cards.
Armar una función para poder sumar las selecciones.
Una vez cargado lo seleccionado, mostrar la compra
Confirmar la compra.
Ir al formulario para cargar los datos.
Enviar información y guardar en el session o local.*/

//MIN 27 AFTERCLASS 9
//Cargar Información

class productosSandwich {
    constructor (id, nombre, imagen, precio, descripción){
        this.id = id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.descripción = descripción;
    }
}

const productosVeggiewich = [
        {id:1, 
        nombre:"Veggiewich de Garbanzos y Lechuga", 
        imagen: "../media/garbanzos y lechuga.jpg", 
        precio: 490, 
        descripción:"Sandwich con medallón de Garbanzos con lechuga, salsa de tomate, tomates desecados y pan de Salvado. Acompañado de batatas." },

        {id:2, 
        nombre: "Veggiewich de Falafe con Tomate y Morrón",
        imagen:"../media/humus tomte morron y falafel.jpg", 
        precio: 550, 
        descripción: "Sandwich con croquetas de falafel, pan de centeno, tomate, morrón, cebolla caramelizada y humus. Acompañado de Zanahorias."},


        {id:3, 
        nombre:"Veggiewich de Calabaza, Rúcula y Cebolla caramelizada",
        imagen:"../media/rucula  cebolla y calabaza.jpg", 
        precio: 560, 
        descripción: "Sandwich con medallón de calabaza, queso vegano, pan de salvado, rúcula, cebolla caramelizada y barbacoa. Acompañada con papas."},

        {id:4, 
            nombre:"Agua sin gas",
            imagen:"../media/agua sin gas.jpg", 
            precio: 90, 
            descripción: "Agua Villavicencio sin gas."},
    
        {id:5, 
            nombre:"Agua con gas",
            imagen:"../media/agua con gas.jpg", 
            precio: 90, 
            descripción: "Agua Villavicencio con gas."},

        {id:6, 
            nombre:"Jugo Natural Berries",
            imagen:"../media/jugo berries.jpg", 
            precio: 110, 
            descripción: "Jugo natural de Arándanos, Frutilla y Naranja."},

        {id:7, 
            nombre:"Jugo Natural Mojito Sunrise",
            imagen:"../media/jugo berries.jpg", 
            precio: 110, 
            descripción: "Jugo natural de Lima, Limón, Menta y Azucar Orgánica."},

        {id:8, 
            nombre:"Jugo Natural Happy Carrtos",
            imagen:"../media/jugo naranja.png", 
            precio: 110, 
            descripción: "Jugo natural de Zanahoría, Ananá, Manzana Roja y Jengibre"},

        {id:9, 
            nombre:"Mi postre",
            imagen:"../media/ensalada de frutas.jpgg", 
            precio: 110, 
            descripción: "Ensalada de Frutilla, Manzana, Banana, Kiwi, Berries, Mango, Uvas y Naranja."}
    ];


var contenido = "";


for (let productos of productosVeggiewich){ 
    contenido += "<div class= 'col-4' id='columna__producto'>";
    contenido += "<div class='card' style='width: 18rem;'>";
    contenido += "<img src= " + productos.imagen + "' class='card-img-top' alt='" + productos.nombre + "'>";
    contenido += "<div class='card-body'>";
    contenido += "<h5 class='card-title'>" + productos.nombre + "</h5>";
    contenido += "<p class='card-text'> <strong> $" + productos.precio + " </strong> </p>";
    contenido += "<p class='card-text'>" + productos.descripción + "</p>";
    contenido += "<button class='btn btn-primary' id='btn" + productos.id +"'>" + 'Seleccionar' + "</button>";
    contenido += "</div>";
    contenido += "</div>";
    contenido += "</div>";

}

var contenedorProductos = document.getElementById("contenedor_productos");
contenedorProductos.innerHTML = contenido;

productosVeggiewich.forEach((producto) => {
    let boton = document.getElementById("btn" + producto.id);
    boton.addEventListener("click", respuestaSeleccion);
    console.log ("Selección de producto");
  });

  
let guardarSeleccion = [];

function respuestaSeleccion(e) {
    let seleccionado =  productosVeggiewich.find(element => `btn${element.id}` == e.target.id); 
    console.log(seleccionado);
}



//Formulario 


//Cargar los barrios desde JS
var barrios = ["Seleccionar", "Agronomía", "Almagro", "Balvanera", "Barracas", "Belgrano", "Boedo", "Caballito", "Chacarita", "Coghlan", "Colegiales", "Constitución", "Flores", "Floresta", "La Boca", "La Paternal", "Liniers", "Mataderos", "Monte Castro", "Montserrat", "Nueva Pompeya", "Nuñez", "Palermo", "Parque Avellaneda", "Parque Chacabuco", "Parque Chas", "Parque Patricios", "Puerto Madero", "Recoleta", "Retiro", "Saavedra", "San Cristóbal", "San Nicolás", "San Telmo", "Versalles", "Villa Crespo", "Villa Devoto", "Villa General Mitre", "Villa Lugano", "Villa Luro", "Villa Ortúzar", "Villa Pueyrredón", "Villa Real", "Villa Riachuelo", "Villa Santa Rita", "Villa Soldati", "Villa Urquiza", "Villa del Parque", "Vélez Sarsfield"];

function cargarBarrios (barrios) {
    var select_barrios = $("#barrio");

    for (let barrio of barrios){
        select_barrios.append("<option value='" + barrio + "'>" + barrio + "</option>");
    }

}

//Validación de campos cuando completan o no
function validacionCampos (nombre1, nombre2, estado) {
    var nombre1 = $("#" + nombre1);
    var nombre2 = $("#" + nombre2);

    if (estado == "correcto") {
        nombre1.removeClass("bordesError");
        nombre1.addClass("bordesOk");
        nombre2.removeClass("texto_error");
        nombre2.addClass("texto_ok");
    } else {
        nombre1.removeClass("bordesOk");
        nombre1.addClass("bordesError");
        nombre2.removeClass("texo_ok");
        nombre2.addClass("texto_error");
    }

}



//Validar el formulario
function validarFormulario() {
    var nombre = $("#nombre");
    var textoNombre = $("#textoNombre");

    if (nombre.val() == "") {
        textoNombre.html("Por favor ingresá tu nombre");
        validacionCampos("nombre", "textoNombre", "error");
        nombre.focus();
        return false;
    } else {
        textoNombre.html("✓");
        validacionCampos("nombre", "textoNombre", "correcto");

    }

    var apellido = $("#apellido");
    var textoApellido = $("#textoApellido");

    if (apellido.val() == "") {
        textoApellido.html("Por favor ingresá tu apellido");
        validacionCampos("apellido", "textoApellido", "error");
        apellido.focus();
        return false;
    } else {
        textoApellido.html("✓");
        validacionCampos("apellido", "textoApellido", "correcto");
    }

    var email = $("#email");
    var textoMail = $("#textoMail");

    if (email.val() == "") {
        textoMail.html("Por favor ingresá tu email");
        validacionCampos("email", "textoMail", "error");
        email.focus();
        return false;
    } else {
        textoMail.html("✓");
        validacionCampos("email", "textoMail", "correcto");
    }

    var telefono = $("#telefono");
    var textoTelefono = $("#textoTelefono");

    if (telefono.val() == "") {
        textoTelefono.html("Por favor ingresá tu teléfono");
        validacionCampos("telefono", "textoTelefono", "error");
        telefono.focus();
        return false;
    } else {
        textoTelefono.html("✓");
        validacionCampos("telefono", "textoTelefono", "correcto");
    }

    var barrio = $("#barrio");
    var textoBarrio = $("#textoBarrio");

    if (barrio.val() == "Seleccionar") {
        textoBarrio.html("Por favor selecciones su barrio");
        validacionCampos("barrio", "textoBarrio", "error");
        telefono.focus();
        return false;
    } else {
        textoBarrio.html("✓");
        validacionCampos("barrio", "textoBarrio", "correcto");
    }

    var domicilio = $("#domicilio");
    var textoDomicilio = $("#textoDomicilio");

    if (domicilio.val() == "") {
        textoDomicilio.html("Por favor ingresá tu domicilio");
        validacionCampos("domicilio", "textoDomicilio", "error");
        domicilio.focus();
        return false;
    } else {
        textoDomicilio.html("✓");
        validacionCampos("domicilio", "textoDomicilio", "correcto");
    }

    var codigoPostal = $("#codigoPostal");
    var textoCodigo = $("#textoCodigo");

    if (codigoPostal.val() == "") {
        textoCodigo.html("Por favor ingresá tu codigo postal");
        validacionCampos("codigoPostal", "textoCodigo", "error");
        codigoPostal.focus();
        return false;
    } else {
        textoCodigo.html("✓");
        validacionCampos("codigoPostal", "textoCodigo", "correcto");
    }

    var terminosCondiciones = $("#terminosCondiciones");
    var textoTerminosCondiciones = $("#textoTerminosCondiciones");

    if (!terminosCondiciones.is(':checked')) {
        textoTerminosCondiciones.html("Por favor aceptá los Términos y Condiciones");
        validacionCampos("terminosCondiciones", "textoTerminosCondiciones", "error");
        terminosCondiciones.focus();
        return false;
    } else {
        textoTerminosCondiciones.html("✓");
        validacionCampos("terminosCondiciones", "textoTerminosCondiciones", "correcto");
    }

    $("#enviarFormulario").submit();
    console.log("Formulario enviado");
}



cargarBarrios(barrios);

$("#enviarFormulario").click(function() {
    validarFormulario();
})


//El focusout evento se produce cuando un elemento  deja de estar seleccionado. 
$("#nombre").focusout(function() {
    validarFormulario();
})

$("#apellido").focusout(function() {
    validarFormulario();
})

$("#email").focusout(function() {
    validarFormulario();
})

$("#telefono").focusout(function() {
    validarFormulario();
})

$("#barrio").focusout(function() {
    validarFormulario();
})

$("#domicilio").focusout(function() {
    validarFormulario();
})

$("#codigoPostal").focusout(function() {
    validarFormulario();
})

$("#terminosCondiciones").focusout(function() {
    validarFormulario();
})



//NEWSLETTER
$("footer").prepend(`<div id="resultadoNewsletter" style="display:none">
                    <form id="newsletter" method="POST">
                        <label for="formGroupExampleInput" class="form-label">¿Querés recibir el Newsletter?</label>
                        <input id='nombreApellido' type="text" class="form-control" placeholder="Escribí tu nombre y apellido">
                        <input id='mail' type="mail" class="form-control" placeholder="Escribí tu email">
                        <input id='enviarNewsletter' type="button" class="form-control" value='Quiero recibir el Newletter'>
                        <input id='noNewsletter' type="button" class="form-control" value='No, gracias'>
                    </form> 
                    </div>`);
                    

$("#resultadoNewsletter").fadeIn(500);


$("#enviarNewsletter").click ( () =>{
    $.ajax( {
        methodo: "POST",
        url: "newletter.json",
        success: function(respuestaAjax) {
            console.log($("#nombreApellido"). val());
            console.log($("#mail"). val());
            alert(respuestaAjax);
        },
        error: function (respuestaAjax){
            console.log ("No fueron envidadas las rtas");
        }
    })
});


$("#resultadoNewsletter").css ( {
    "margin": "100px",
    "padding": "10px",
    "justify-content": "center",
    "align-content":"space-between",
})



//Agregué el footer con JQuery

$('footer').append(`<div class="backFooter">
                        <a href="https://www.linkedin.com/in/roc%C3%ADo-gonz%C3%A1lez-paissaud/"> <img src="media/LinkedIn.png" alt="LinedIn" style= "height: 3em"></a>
                        <a href="https://github.com/rociogpaissaud"> <img src="media/github.png" alt="GitHub" style= "height: 3em"></a>
                        <a href="https://www.instagram.com/rocio.paissaud/"> <img src="media/Instagram.png" alt="Instagram" style= "height: 3em"></a>
                        <p>Hecho por Rocío González Paissaud</p>
            </div>`);

$(".backFooter").css ( {
        "background-color": "#fdf6eb",
        "display": "flex",
        "flex-wrap": "nowrap",
        "padding": "50px",
        "justify-content": "center",
        "align-content":"space-between",
})

//Animación con JQUERY del H1 en el inicio
$(".animacionTituloJs").css({
    "font-weight": "bold",
    "justify-content": "center",
    "text-align":"center",
    "padding": "1%",
    
})








