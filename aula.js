let pessoas = [];
        let contador = 0;

        function adicionarPessoa() {
            if (contador < 15) {
                let altura = parseFloat(document.getElementById("altura").value);
                let genero = document.getElementById("genero").value;

                if (isNaN(altura) || altura <= 0) {
                    alert("Por favor, insira uma altura válida.");
                    return;
                }

                if (genero !== "Masculino" && genero !== "Feminino") {
                    alert("Por favor, selecione um gênero válido.");
                    return;
                }

                pessoas.push({ altura, genero });
                contador++;
                document.getElementById("altura").value = "";
                document.getElementById("genero").value = "Masculino";

                if (contador === 15) {
                    calcularResultados();
                } else {
                    document.getElementById("status").innerText = `Pessoa ${contador}/15 adicionada. Insira a próxima.`;
                }
            }
        }

        function calcularResultados() {
            if (pessoas.length < 15) {
                alert("Você precisa inserir os dados de 15 pessoas.");
                return;
            }

            let maiorAltura = Math.max(...pessoas.map(p => p.altura));
            let menorAltura = Math.min(...pessoas.map(p => p.altura));

            let homens = pessoas.filter(p => p.genero === "Masculino");
            let mediaAlturaHomens = homens.length > 0 ? (homens.reduce((sum, p) => sum + p.altura, 0) / homens.length).toFixed(2) : 0;

            let mulheres = pessoas.filter(p => p.genero === "Feminino").length;

            document.getElementById("resultado").innerHTML = `
                <p><strong>Maior altura:</strong> ${maiorAltura.toFixed(2)} m</p>
                <p><strong>Menor altura:</strong> ${menorAltura.toFixed(2)} m</p>
                <p><strong>Média de altura dos homens:</strong> ${mediaAlturaHomens} m</p>
                <p><strong>Número de mulheres:</strong> ${mulheres}</p>
            `;
        }