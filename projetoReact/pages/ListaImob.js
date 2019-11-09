import React, {Component} from 'react';
import {Text, View, ScrollView, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';

class ListaImob extends Component {
    constructor(props) {
        super(props);
        this.voltar = this.voltar.bind(this);
    }
    voltar(){
        this.props.navigation.pop();
    }
    render() {
        return (
            <View>
                <Text style={{marginLeft: 115, fontSize:20}}>Lista de imóveis</Text>
                <Button title={"Voltar"} onPress={this.voltar}></Button>

            </View>
        );
    }
}

export default ListaImob;
