import React, {Component} from 'react';
import {View,TextInput,Button} from 'react-native';

class Remocao extends Component {
    constructor(props) {
        super(props);
        this.Remover = this.Remover.bind(this);
        this.voltar = this.voltar.bind(this);
    }
    Remover() {
        alert("Imovel removido com sucesso!!");
    }
    voltar() {
        let t = this.props.navigation.pop();
    }
    txtEnd(texto){
        this.setState(texto);
    }
    render() {
        return (
            <View>
                <TextInput onChangeText={this.txtEnd}/>
                <Button title={"Remover"} onPress={this.Remover}></Button>
                <Button title={"Voltar"} onPress={this.voltar}></Button>
            </View>
        );
    }
}

export default Remocao;