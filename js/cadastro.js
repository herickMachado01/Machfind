    const btnFreelancer = document.getElementById("btnFreelancer");
        const btnEmpresa = document.getElementById("btnEmpresa");
        const extraFields = document.getElementById("extraFields");
        const formCadastro = document.getElementById("formCadastro");
        const senha = document.getElementById("senha");
        const confirmarSenha = document.getElementById("confirmarSenha");
        const erroSenha = document.getElementById("erroSenha");

        function loadFreelancerFields() {
        extraFields.innerHTML = `
            <div>
            <label class="block text-gray-700 text-sm font-medium">Nome Completo</label>
            <input type="text" required placeholder="Seu nome"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
            <div>
            <label class="block text-gray-700 text-sm font-medium">Profissão / Categoria</label>
            <input type="text" required placeholder="Ex: Designer, Programador..."
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
            <div>
            <label class="block text-gray-700 text-sm font-medium">Cidade</label>
            <input type="text" required placeholder="Ex: São Paulo"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
        `;
        }

        function loadEmpresaFields() {
        extraFields.innerHTML = `
            <div>
            <label class="block text-gray-700 text-sm font-medium">Nome da Empresa</label>
            <input type="text" required placeholder="Nome da empresa"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
            <div>
            <label class="block text-gray-700 text-sm font-medium">CNPJ</label>
            <input type="text" required placeholder="00.000.000/0001-00"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
            <div>
            <label class="block text-gray-700 text-sm font-medium">Cidade</label>
            <input type="text" required placeholder="Ex: Rio de Janeiro"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
            </div>
        `;
        }

        // Estado inicial: Freelancer
        loadFreelancerFields();

        btnFreelancer.addEventListener("click", () => {
        btnFreelancer.classList.add("bg-blue-600", "text-white");
        btnFreelancer.classList.remove("bg-gray-200", "text-gray-700");
        btnEmpresa.classList.add("bg-gray-200", "text-gray-700");
        btnEmpresa.classList.remove("bg-blue-600", "text-white");
        loadFreelancerFields();
        });

        btnEmpresa.addEventListener("click", () => {
        btnEmpresa.classList.add("bg-blue-600", "text-white");
        btnEmpresa.classList.remove("bg-gray-200", "text-gray-700");
        btnFreelancer.classList.add("bg-gray-200", "text-gray-700");
        btnFreelancer.classList.remove("bg-blue-600", "text-white");
        loadEmpresaFields();
        });

    
        formCadastro.addEventListener("submit", (e) => {
        if (senha.value !== confirmarSenha.value) {
            e.preventDefault();
            erroSenha.classList.remove("hidden");
        } else {
            erroSenha.classList.add("hidden");
            alert("Cadastro realizado com sucesso!");
        }
        });

         feather.replace(); 

    function togglePassword(inputId, toggleId) {
      const input = document.getElementById(inputId);
      const toggle = document.getElementById(toggleId);
      let mostrando = false;

      toggle.addEventListener("click", () => {
        mostrando = !mostrando;
        input.type = mostrando ? "text" : "password";
        toggle.innerHTML = mostrando 
          ? '<i data-feather="eye-off"></i>' 
          : '<i data-feather="eye"></i>';
        feather.replace();
      });
    }

    togglePassword("senha", "toggleSenha");
    togglePassword("confirmarSenha", "toggleConfirmarSenha");