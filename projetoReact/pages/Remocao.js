import React, {Component} from 'react';
import {View,TextInput,Button} from 'react-native';

class Remocao extends Component {
    render() {
        return (
            <View>
                <TextInput></TextInput>
                <Button title={"Remover"} onPress={Remover()}></Button>
                <Button title={"Remover"} onPress={voltar()}></Button>
            </View>
        );
        function Remover() {

        }
        function voltar() {
            let t = this.props.navigation.pop();
        }
    }
}

export default Remocao;