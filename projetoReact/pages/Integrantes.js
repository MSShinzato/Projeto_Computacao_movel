import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

class Integrantes extends Component {
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
                <Text style={{fontSize:18}}>Integrantes: Bruno Ducati Vazquez RA: 22.118.193-6</Text>
                <Text style={{fontSize:18}}>Integrantes: Lucas Souza Valverde RA: 22.118.125-8</Text>
                <Text style={{fontSize:18}}>Integrantes: Marcelo Shinzi Shinzato RA: 22.118.013-6</Text>
                <Button title={"Voltar"} onPress={this.voltar}></Button>
            </View>
        );
    }

}

export default Integrantes;