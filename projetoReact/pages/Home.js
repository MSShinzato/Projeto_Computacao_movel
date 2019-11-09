import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {Image} from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.cadastrar = this.cadastrar.bind(this);
        this.remover = this.remover.bind(this);
        this.listar = this.listar.bind(this);
        this.Integrantes = this.Integrantes.bind(this);
    }

    cadastrar() {
        this.props.navigation.push("cadastroP");
    }

    remover() {
        this.props.navigation.push("remocaoP");
    }

    listar() {
        this.props.navigation.push("listaP");
    }

    Integrantes() {
        this.props.navigation.push("IntegrantesP");
    }

    render() {
        return (
            <View>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>Imobiliária Lucas Souza</Text>
            </View>
                <Image
                    style={{width: 450, height: 300}}
                    source={{uri: 'https://rankim.com.br/blog/wp-content/uploads/2016/07/Plataforma-Imobiliaria.jpg'}}
                />
                <View style={{margin: 25 }}>
                    <Button title={"Cadastro"} onPress={this.cadastrar}></Button>
                    <Button title={"Remoção"} onPress={this.remover}></Button>
                    <Button title={"Lista de imovéis"} onPress={this.listar}></Button>
                    <Button title={"Integrantes"} onPress={this.Integrantes}></Button>

            </View>
            </View>
        );
    }


}

export default Home;
