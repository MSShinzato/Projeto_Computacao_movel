import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Home extends Component {
    render() {
        return (
            <View>
                <Text>Imobiliária Lucas Souza</Text>
                <Button title={"Cadastro"} onPress={cadastrar()}></Button>
                <Button title={"Remoção"} onPress={remover()}></Button>
                <Button title={"Lista de imovéis"} onPress={listar()}></Button>
            </View>
        );
        function cadastrar() {
            let push = this.props.navigation.push("cadastroP");
        }
        function remover() {
            let push = this.props.navigation.push("remocaoP");
        }
        function listar() {
            let push = this.props.navigation.push("listaP");
        }
    }
}

export default Home;