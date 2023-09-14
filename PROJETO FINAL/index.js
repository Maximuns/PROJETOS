
// Definições básicas
let continuar = true
let dados = []// Dados do usuário


// Função para cadastro dos novos produtos
function cadastrar() {
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
-------------------------------------------------------
|    NOME    |    TIPO    |    MARCA    |    VALOR    |
-------------------------------------------------------\n`
    for(let objeto of dados){
        let listaObjeto = `|    ${objeto.nome}  |    ${objeto.tipo}    |    ${objeto.marca}    |    R$${objeto.valor},00    |\n `             
        lista = lista + listaObjeto
    }
    console.log(lista)
	
}

// Função para buscar um produto especifico
function buscar() {
	let produtoEscolhido = prompt("Insira o nome do produto:").toUpperCase()
	let lista =`
              BUSCA DO PRODUTO
-------------------------------------------------------
|    NOME    |    TIPO    |    MARCA    |    VALOR    |
-------------------------------------------------------\n`
    for(let objeto of dados){
        let buscaObjeto = `|    ${objeto.nome}    |    ${objeto.tipo}    |    ${objeto.marca}    |    R$${objeto.valor},00    |\n `             
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
	console.log("Adeus! Para reiniciar, atualize a aba do navegador ou aperte F5.")
}


// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let perguntar  = "MAXIMUNS ELETRONICS\n"
		perguntar += "-------------------------\n"
		perguntar += "Escolha uma opção:\n"
		perguntar += "1. Cadastrar Produtos\n"
		perguntar += "2. lista dos Produtos\n"
		perguntar += "3. Buscar produtos\n"
        perguntar += "4. Sair"
        

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
