
    feather.replace();

 
    const toggleSenha = document.getElementById("toggleSenha");
    const senhaInput = document.getElementById("senha");

    toggleSenha.addEventListener("click", () => {
      const tipo = senhaInput.getAttribute("type") === "password" ? "text" : "password";
      senhaInput.setAttribute("type", tipo);

      toggleSenha.innerHTML = tipo === "password" 
        ? feather.icons["eye"].toSvg() 
        : feather.icons["eye-off"].toSvg();
    });