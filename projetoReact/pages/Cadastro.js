import React, {Component} from 'react';
import {View,Button,TextInput,Text} from 'react-native';

/*

    tipo: casa ou apto
    alugado: sim ou não
    condomínio: sim ou não
    valor
    quant. de quartos
    descricao
    proprietário
    data que precisa pagar aluguel

 */


class Cadastro extends Component {
    render() {
        return (
            <View>
                <Text>Cadastro</Text>
                <Text>Nome do proprietário</Text>
                <TextInput/>
                <Text>Tipo do imóvel</Text>
                <TextInput/>
                <Text>Valor</Text>
                <TextInput/>
                <Text>Quantidade de quartos</Text>
                <TextInput/>
                <Text>Descrição</Text>
                <TextInput/>
                <Text>Data de aluguel</Text>
                <TextInput/>
                <Button title={"Salvar"} onPress={cadastrar()}></Button>
                <Button title={"Voltar"} onPress={voltar()}></Button>
            </View>
        );
        function cadastrar() {

        }
        function voltar() {
            let t = this.props.navigation.pop();
        }
    }
}

export default Cadastro;