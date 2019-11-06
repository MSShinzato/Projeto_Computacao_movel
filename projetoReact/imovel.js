import React, {Component} from 'react';

// casa ou apto
let tipo;
// se está alugado ou não
let isAlugado;
// valor de aluguel
let valor;
// num de quartos
let numQuarto;
// endereco (rua)
let end;
// cidade
let cidade;
// descricao do imovel
let desc;
// quando precisa pagar aluguel
let dataAluguel;
// proprietario
let proprietario;
// se está num condominio
let isCond;

class Imovel extends Component {

    Imovel(tipo, isAlugado, valor, numQuarto, end, cidade, desc, dataAluguel, proprietario, isCond){
        this.tipo = tipo;
        this.isAlugado = isAlugado;
        this.valor = valor;
        this.numQuarto = numQuarto;
        this.end = end;
        this.cidade = cidade;
        this.desc = desc;
        this.proprietario = proprietario;
        this.dataAluguel = dataAluguel;
        this.isCond = isCond;
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Imovel;