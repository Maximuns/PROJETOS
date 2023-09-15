
// Definições básicas
let continuar = true
let dados = []// Dados do usuário


// Função para cadastro dos novos produtos
function cadastrar() {
	listar()
	
	let perguntar1 = prompt("Insira o Nome do produto: ").toUpperCase()
    let perguntar2 = prompt("Insira o tipo do produto: ").toUpperCase()
    let perguntar3 = prompt("Insira a marca do produto:").toUpperCase()
    let perguntar4 = Number(prompt("Insira o valor do produto: "))
    
    const produtos = {
        nome: perguntar1,
        tipo: perguntar2,
        marca: perguntar3,
        valor: perguntar4,
    }
    
    dados.push(produtos)

    console.log(dados)
}

// Função para listar os produtos cadastrados
function listar() {
    let lista =`
              LISTA DE PRODUTOS 
----------------------------------------------------------------------
|    INDICE    |    NOME    |    TIPO    |    MARCA    |    VALOR    |
----------------------------------------------------------------------\n`
    for(let objeto of dados){
        let listaObjeto =`|    ${dados.indexOf(objeto)}    |    ${objeto.nome}  |    ${objeto.tipo}    |    ${objeto.marca}    |    R$${objeto.valor},00|\n`             
        lista = lista + listaObjeto
    }
    console.log(lista)
	
}

// Função para buscar um produto especifico
function buscar() {
	let produtoEscolhido = prompt("Insira o nome do produto:").toUpperCase()
	let lista =`
	           BUSCA DO PRODUTO
----------------------------------------------------------------------
|    INDICE    |    NOME    |    TIPO    |    MARCA    |    VALOR    |
----------------------------------------------------------------------\n`
    for(let objeto of dados){
        let buscaObjeto =`|    ${dados.indexOf(objeto)}    |    ${objeto.nome}    |    ${objeto.tipo}    |    ${objeto.marca}    |    R$${objeto.valor},00|\n`             
		for(let propriedade in objeto){
			if (objeto[propriedade] === produtoEscolhido) {
				lista += buscaObjeto
				break 
			}
		}
    
	}
    	
	console.log(lista)
}

// Função para sair do programa/ fecha-lo
function sair() {
	continuar = false
	console.log("Até logo! Para reiniciar, atualize a aba do navegador ou aperte F5.")
}

//Função desconto
function desconto() {
	listar()
	
	let i = Number(prompt("Indice do produto:"))
	let descontos = Number(prompt("Insira o valor do desconto"))
	descontos = (100 - descontos) / 100
	let valorDescontos = dados[i].valor * descontos

	console.log(valorDescontos)
}

//

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let perguntar  = "MAXIMUMS ELETRONICS\n"
		perguntar += "-------------------------\n"
		perguntar += "Escolha uma opção:\n"
		perguntar += "1. Cadastrar Produtos\n"
		perguntar += "2. lista dos Produtos\n"
		perguntar += "3. Buscar produtos\n"
        perguntar += "4. Desconto\n"
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
			desconto()
			break
		case 5:
			sair()
			break
}
}
