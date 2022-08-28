const botonEnviar = document.querySelector("input")

botonEnviar.addEventListener("click", ()=>{
    alert("click en el botón")
  
})

$(()=>{
    $("input").click(()=>{
        console.log("Hola, estoy utilizando jQuery")
    })
})
