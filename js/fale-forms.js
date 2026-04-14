document.addEventListener('DOMContentLoaded', function() {
            const estadoSelect = document.getElementById('estado');
            const cidadeSelect = document.getElementById('cidade');
            
            const urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome';

            // Carregar Estados da API do IBGE
            fetch(urlEstados)
                .then(response => response.json())
                .then(data => {
                    estadoSelect.innerHTML = '<option value="" disabled selected>Selecione um estado</option>'; // Reseta a opção inicial
                    data.forEach(estado => {
                        const option = document.createElement('option');
                        option.value = estado.sigla;
                        option.textContent = estado.nome;
                        estadoSelect.appendChild(option);
                    });
                })
                .catch(error => {
                    console.error('Erro ao buscar os estados:', error);
                    estadoSelect.innerHTML = '<option value="">Não foi possível carregar os estados</option>';
                });

            // Event listener para quando um estado for selecionado
            estadoSelect.addEventListener('change', function() {
                const estadoSelecionado = this.value;
                cidadeSelect.innerHTML = '<option value="">Carregando cidades...</option>'; // Mostra mensagem de carregamento
                cidadeSelect.disabled = true;

                if (!estadoSelecionado) {
                    cidadeSelect.innerHTML = '<option value="">Selecione um estado primeiro</option>';
                    return;
                }
                
                const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`;

                // Carregar Cidades do estado selecionado
                fetch(urlCidades)
                    .then(response => response.json())
                    .then(data => {
                        cidadeSelect.innerHTML = '<option value="" disabled selected>Selecione uma cidade</option>';
                        data.forEach(cidade => {
                            const option = document.createElement('option');
                            option.value = cidade.nome;
                            option.textContent = cidade.nome;
                            cidadeSelect.appendChild(option);
                        });
                        cidadeSelect.disabled = false; // Habilita o seletor de cidades
                    })
                    .catch(error => {
                        console.error('Erro ao buscar as cidades:', error);
                        cidadeSelect.innerHTML = '<option value="">Não foi possível carregar as cidades</option>';
                    });
            });
        });