function permiso() {  
    Notification.requestPermission();
};

function mostrarNotificacion( mensaje ) {  
if(Notification) {
    if (Notification.permission == "granted") {
        var     titulo = "Sistema Soporte",
                opciones = {
                    icon: "img/login.png",
                    body: mensaje};
        var n = new Notification(titulo, opciones);
        n.onclick = function(){abrirEnPestana('http://localhost/login/home.php');};
    }

    else if(Notification.permission == "default") {
        Notification.requestPermission();
    }

    else {
        alert("Bloqueaste los permisos de notificación");
    }
}
};


function abrirEnPestana(url) {
    var a = document.createElement("a");
    a.target = "_self";
    a.href = url;
    a.click();
}