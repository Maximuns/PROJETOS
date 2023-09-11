
// Definições básicas
let continuar = true
let dados = []// Dados do usuário


// Função para cadastro
function cadastrar() {
	let perguntar1 = prompt("Insira o Nome do produto: ").toUpperCase()
    let perguntar2 = prompt("Insira o tipo do produto: ").toUpperCase()
    let perguntar3 = prompt("Insira a marca do produto:").toUpperCase()
    let disponibilidade = prompt("Temos o produto em estoque? Sim ou não").toUpperCase()
    let perguntar4 = Number(prompt("Insira o valor do produto: "))
    
    if (disponibilidade === "SIM") {
        disponibilidade = true
    }
    else {
        disponibilidade = false
    }

    const produtos = {
        Nome: perguntar1,
        tipo: perguntar2,
        marca: perguntar3,
        valor: perguntar4,
        estoque: disponibilidade,
    }
    
    dados.push(produtos)

    console.log(dados)
}

// Função para listar
function listar() {
    let lista =`
              LISTA DE PRODUTOS 
--------------------------------------------------
| NOME | TIPO | MARCA | VALOR | DISPONIBILIDADE |
--------------------------------------------------`
    for(let objeto of dados){
        let listaObjeto = ` |   ${objeto.nome}  | ${objeto.tipo} | ${objeto.marca} | ${objeto.valor} | ${objeto.disponibilidade} |\n `             
        lista = listaObjeto
    }
    console.log(lista)
}

// Função para buscar
function buscar() {
	console.log("Função de busca")
}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let perguntar  = "MAXIMUNS ELETRONICS\n"
		perguntar += "-------------------------\n"
		perguntar += "Escolha uma opção:\n"
		perguntar += "1. Cadastrar Produtos\n"
		perguntar += "2. lista dos Produtos\n"
		perguntar += "3. disponibilidade\n"
		perguntar += "4. Marca do produto\n"
        perguntar += "5. Sair"
        

	// Guardar resposta
	let resposta = Number(prompt(perguntar))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscar()
			break
		case 4:
			sair()
			break
	}
}
