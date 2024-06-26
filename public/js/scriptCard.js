// Mantenha uma lista de todos os cartões criados inicialmente
let allCards = [];

function createCards(data) {
    const cardsContainer = document.getElementById('container');
    let icon = '';
    data.forEach(function (item) {
        var card = document.createElement('div');
        card.classList.add('box');
        switch (item.tipo) {
            case 'saúde':
                card.classList.add('box-verde');
                icon = 'saude2'
                break;
            case 'assistência financeira':
                card.classList.add('box-azul');
                icon = 'money'
                break;
            case 'segunda via':
                card.classList.add('box-cinza');
                icon = 'doc'
                break;
            case 'reformas':
                card.classList.add('box-amarelo');
                icon = 'ref'
                break;
            case 'seguros':
                card.classList.add('box-verde-2');
                icon = 'seguro'
                break;
            // case 'ajudatche':
            //     card.classList.add('box-red-2');
            //     icon = 'ajudatche-logo'
            //     break;
        }

        // if (item.tipo.toLowerCase() === 'ajudatche') {
        //     card.innerHTML += `
        //         <div class="square">
        //         <img src="./imagens/${icon}.svg">
        //         </div>
        //
        //         <h3>${item.titulo}</h3>
        //         <p>${item.descricao}</p>
        //         <a class="ver-mais" target="_blank" href="/cadastro">Saiba mais</a>
        //     `;
        // } else {
            card.innerHTML += `
                <div class="square">
                <img src="./imagens/${icon}.png">
                </div>

                <h3>${item.titulo}</h3>
                <p>${item.descricao}</p>
                <a class="ver-mais" target="_blank" href="${item.link}">Saiba mais</a>
            `;
        // }

        allCards.push(card);
        cardsContainer.appendChild(card);

    });
}

function createCardsType(tipo) {
    const cardsContainer = document.getElementById('container');

            cardsContainer.innerHTML = ''; // Limpa apenas os cartões, mantendo os quadrados
            let icon = ''
            json.forEach(function (item) {
                if (item.tipo && item.tipo.toLowerCase() === tipo.toLowerCase()) {
                    const card = document.createElement('div');
                    card.classList.add('box');
                    switch (item.tipo) {
                        case 'saúde':
                            card.classList.add('box-verde');
                            icon = 'saude2'
                            break;
                        case 'assistência financeira':
                            card.classList.add('box-azul');
                            icon = 'money'
                            break;
                        case 'segunda via':
                            card.classList.add('box-cinza');
                            icon = 'doc'
                            break;
                        case 'reformas':
                            card.classList.add('box-amarelo');
                            icon = 'ref'
                            break;
                        case 'seguros':
                            card.classList.add('box-verde-2');
                            icon = 'seguro'
                            break;
                        // case 'ajudatche':
                        //     card.classList.add('box-red-2');
                        //     icon = 'ajudatche-logo'
                        //     break;
                    }

                    console.log(item.tipo.toLowerCase())
                    
                        card.innerHTML += `
                        <div class="square">
                        <img src="./imagens/${icon}.png">
                        </div>

                        <h3>${item.titulo}</h3>
                        <p>${item.descricao}</p>
                        <a class="ver-mais" target="_blank" href="${item.link}">Saiba mais </a>
                    `;
                    // }

                    cardsContainer.appendChild(card);
                }
            });
        }
//     );
// }

const json = [
 
    {
        "titulo": "Carteira de Identidade",
        "descricao": "Emitir segunda via da Carteira de identidade",
        "link": "https://igp.rs.gov.br/2-via-on-line/1000",
        "tipo": "segunda via"
    },
    {
        "titulo": "CNH",
        "descricao": "Emitir segunda via da Carteira Nacional de habilitação",
        "link": "https://www.rs.gov.br/carta-de-servicos/servicos?servico=6200",
        "tipo": "segunda via"
    },
    {
        "titulo": "Carteira de Trabalho",
        "descricao": "Emitir segunda via da Carteira de Trabalho",
        "link": "https://empregabrasil.mte.gov.br/sp_faq/21-perdi-a-minha-ctps-fisica-posso-solicitar-a-ctps-digital-pelo-aplicativo",
        "tipo": "segunda via"
    },
    {
        "titulo": "Título de Eleitor",
        "descricao": "Emitir segunda via do título de eleitor",
        "link": "https://www.tse.jus.br/comunicacao/noticias/2023/Outubro/perdeu-o-titulo-de-eleitor-veja-como-tirar-a-2o-via-do-documento",
        "tipo": "segunda via"
    },
    {
        "titulo": "Reconstrução dos Lares",
        "descricao": "Solicitar e oferecer ajuda para recuperação dos lares, por meio de mutirões de limpeza, fornecimento de kits de higiene/limpeza e itens domésticos básicos.",
        "link": "https://www.meulardevolta.com.br/",
        "tipo": "reformas"
    },
    {
        "titulo": "Substituição Óculos de Grau",
        "descricao": "As óticas Willy e Coliseu se propuseram a providenciar até 01 óculos novo por CPF. Coliseu via email: atendimento@coliseu.com.br, Willy telefones 51989267973 ou 51997534975",
        "link": "",
        "tipo": "saúde"
    },
    {
        "titulo": "Bolsa Família",
        "descricao": "Solicitar a antecipação do pagamento para 17/05.",
        "link": "https://g1.globo.com/politica/noticia/2024/05/02/chuvas-no-rs-ministerio-facilita-saque-e-antecipa-pagamentos-do-bolsa-familia-no-estado.ghtml",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Seguro do Imóvel (DFI)",
        "descricao": "Um seguro habitacional para imóveis financiados pela Caixa Econômica Federal que cobre alagamentos.",
        "link": "https://www.caixaseguradora.com.br/paravoce/habitacional/coberturas-e-assistencias/habitacional-mais",
        "tipo": "seguros"
    },
    {
        "titulo": "Saque calamidade FGTS",
        "descricao": "Caso seu município tenha declarado formalmente o estado de calamidade pública é possível a solicitação do saque via site ou app do FGTS, desde que respeitado o intervalo mínimo de 12 meses entre um saque e outro.",
        "link": "https://www.fgts.gov.br/Documents/guia_solicitacao_saque_app_calamidade_v2.pdf",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Renegociação de dívidas",
        "descricao": "Verifique a possibilidade de renegociar eventuais dívidas. Bancos envolvidos até o momento:Itaú, Bradesco, Santander, BTG Pactual, Banco do Brasil e Caixa Econômica Federal.",
        "link": "https://www.cnnbrasil.com.br/blogs/fernando-nakagawa/economia/gauchos-afetados-poderao-pausar-ou-ren",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Financiamento Hab.",
        "descricao": "Possibilidade de pausar os pagamentos de financiamento habitacional por até três meses,mediante solicitação via site ou app da Caixa. Caso haja prestações em atraso, há a chance de incorporar esses valores ao saldo devedor, facilitando a recuperação financeira do mutuário. Importante verificar a possibilidade de juros; em caso de dúvidas, contate sua         agência.",
        "link": "https://www.caixa.gov.br/atendimento/aplicativos/habitacao/Paginas/default.aspx",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Antecipação do INSS",
        "descricao": "Antecipação dos Benefícios de Prestação Continuada (BPC) pode ser solicitada no banco onde os segurados recebem o pagamento",
        "link": "https://agenciagov.ebc.com.br/noticias/202405/ministerio-da-previdencia-e-inss-antecipam-beneficios-para-familias-atingidas-por-catastrofe-climatica",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Programa São João Popular",
        "descricao": "Medicamentos Gratuitos, válido até 31/05/2024 para os medicamentos e cidades listados no link abaixo. ",
        "link": "https://www.saojoaofarmacias.com.br/blog/lista-medicamentos-e-cidades-sao-joao-popular",
        "tipo": "saúde"
    },
    {
        "titulo": "Programa Volta Por Cima",
        "descricao": "Pagamento, em parcela única, de R$2.500,00 para famílias que atenderem aos critérios.",
        "link": "https://www.estado.rs.gov.br/novo-decreto-de-beneficio-do-programa-volta-por-cima-e-publicado-663eb2ddbea78#:~:text=O%20programa%20Volta%20por%20Cima,espec%C3%ADficas%20por%20meio%20de%20decreto.",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Pix do Governo Estadual",
        "descricao": "Distribuição de R$2.000,00 para famílias afetadas pelas enchentes, e que atendam aos critérios.",
        "link": "https://www.estado.rs.gov.br/comite-gestor-do-pix-sos-rio-grande-do-sul-define-criterios-para-a-distribuicao-dos-recursos",
        "tipo": "assistência financeira"

    },
    {
        "titulo": "Imposto de Renda",
        "descricao": "Restituição antecipada para população do RS. Prazo para declaração prorrogado para 31/08",
        "link": "https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2024/maio/restituicoes-do-imposto-de-renda-para-contribuintes-do-rio-grande-do-sul-serao-priorizadas",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Programa Cartão Reconstruir",
        "descricao": "Subsídio aos cidadãos para a compra de materiais de construção destinados à reforma, ampliação ou conclusão de unidades habitacionais afetadas por desastres. Há pendência de definições (como valor), mas já foi aprovado.",
        "link": "https://www12.senado.leg.br/noticias/materias/2024/05/08/aprovado-subsidio-para-reconstruir-casas-atingidas-por-enchentes-vai-a-camara",
        "tipo": "reformas"
    },
    {
        "titulo": "Coberturas de seguros",
        "descricao": "Susep orienta sobre coberturas de seguros que podem ser acionadas pelas vítimas",
        "link": "https://www.gov.br/susep/pt-br/central-de-conteudos/",
        "tipo": "seguros"
    },
    {
        "titulo": "Conserto eletrodomésticos",
        "descricao": "A Universidade Unisinos e a Universidade Feevale mobilizam uma ação para conserto de eletrônicos que foram afetados pelas águas das enchentes.",
        "link": "https://fenacon.org.br/rede-de-noticias/sescon-rs-informa-unisinos-e-freevale-mobilizam-acao-para-conserto-de-eletronicos-afetados-pelas-aguas/#:~:text=A%20Universidade%20Unisinos%20e%20a,mesmo%20que%20tenham%20sido%20molhados",
        "tipo": "reformas"
    },
    {
        "titulo": "Auxílio Reconstrução",
        "descricao": "O Governo Federal irá pagar R$ 5,1 mil, em parcela única, para todas as famílias com residências afetadas diretamente na catástrofe.",
        "link": "https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2024/05/governo-anuncia-auxilio-reconstrucao-de-r-5-1-mil-para-todas-as-familias-com-residencias-afetadas-por-chuvas",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Abono Salarial Antecipado",
        "descricao": "Antecipação do calendário de pagamento do abono salarial 2024 para maio para o total de trabalhadores habilitados, cujo estabelecimento empregador esteja nos municípios com reconhecimento federal de calamidade/emergência.",
        "link": "",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Minha Casa Minha Vida",
        "descricao": "Caso tenha financiamento realizado por meio do programa MINHA CASA, MINHA VIDA, poderá pedir a suspensão por um período de 6 meses das parcelas. Ainda, será fornecido aumento do tempo para usar o saldo do FGTS para pagar parcelas em atraso, de seis para 12 meses.",
        "link": "",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Seguro Desemprego",
        "descricao": "O Governo Federal anunciou medida de pagamento de parcela extra de seguro desemprego para aqueles que estão recebendo o benefício. O pagamento será realizado de forma automática.",
        "link": "",
        "tipo": "assistência financeira"
    },
    {
        "titulo": "Óculos de Grau Gratuito",
        "descricao": "Para quem perdeu seus óculos nas enchentes, a rede de óticas Mercadão dos Óculos doará 2.000 óculos por meio do projeto 'Olharesdo Bem'.",
        "link": "https://docs.google.com/forms/d/e/1FAIpQLSdL1Rzbt_LEhfh1jQD6hz6lImslfcEOJDwjt2g4OVAKZ66btA/viewform",
        "tipo": "saúde"
    }
]


function createAll() {
    const cardsContainer = document.getElementById('container');
    cardsContainer.innerHTML = ''; // Limpa o container antes de adicionar novos cartões
    allCards.forEach(card => cardsContainer.appendChild(card)); // Exibe os cartões da lista
}

// Chamada da função para buscar o arquivo JSON e criar os cartões inicialmente
createCards(json);
