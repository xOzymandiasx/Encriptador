const codearPalabra = (palabra) => {
    let input = palabra.split("");
    input = input.map((item) => {
     return item === "a" 
      ? "ai" 
      : item === "e"
       ? "enter"
       : item === "i"
        ? "imes"
        : item === "o"
         ? "ober"
         : item === "u"
          ? "ufat"
          : item;
    });
    return input.join("");
  };

const decodePalabra = (palabra) => {
    palabra = palabra.replace(/ai/g, "a");
    palabra = palabra.replace(/enter/g, "e");
    palabra = palabra.replace(/imes/g, "i");
    palabra = palabra.replace(/ober/g, "o");
    palabra = palabra.replace(/ufat/g, "u");

    return (palabra);
};

const copyToClipboard = () => {
    let contenido = document.querySelector(".resultado").value;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(contenido);
    return Promise.reject('The Clipboard API is not available.');
    };    



document.addEventListener("click", (e) => {
    
    if (e.target.matches(".btnCript")) {
        e.preventDefault();
        let entrada = document.querySelector("input").value;
        let filtro = /[^a-z\s]+/g
        if (entrada.match(filtro) || entrada === "") {alert("Sólo letras minúsculas")
   
        } else {
            document.querySelector(".divResultado").style.display = "none";
            document.querySelector(".divFinal").style.display = "flex";
            document.querySelector(".resultado").value = codearPalabra(entrada);
            document.querySelector("input").value = "";     

        };
    };

    if (e.target.matches(".btnDecript")) {
        e.preventDefault();
        let entrada = document.querySelector("input").value;
        document.querySelector(".divResultado").style.display = "none";
        document.querySelector(".divFinal").style.display = "flex";
        document.querySelector(".resultado").value = decodePalabra(entrada);
        document.querySelector("input").value = "";
    };

    if (e.target.matches(".copiar")) {
        copyToClipboard();
        alert("Texto copiado al portapapeles");
    };
});