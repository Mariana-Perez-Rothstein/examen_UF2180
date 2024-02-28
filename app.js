const password = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const input = document.querySelector("input");
    if (input.value.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres!");
    } else { 
        const url = "http://localhost:3000/insertar";

        fetch(url, {
          method: "post",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            "password" : input.value
          })
        })
          .then(res => res.json())
          .then(mensaje => alert(mensaje))
      }
    });
    