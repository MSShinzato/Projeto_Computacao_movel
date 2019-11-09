import React, {Component} from 'react';
import {View,Button,TextInput,Text,ScrollView,AsyncStorage} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let  radio_props = [
    {label:"Casa", value: 0},
    {label:"Apto", value: 1}
];

let radio_cond =[
    {label:"sim", value: 0},
    {label:"não", value: 1}
];

class Imovel{

        constructor(tipo, isAlugado, valor, numQuarto, end, cidade, desc, dataAluguel, proprietario, isCond){
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

}

class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state  = {imovel:[], texto:""};
        this.cadastrar = this.cadastrar.bind(this);
        this.voltar = this.voltar.bind(this);
    }
    cadastrar() {
        this.setState({imovel:[...this.state.imovel,this.state.texto]});
        //this.setState({textp:""});
        alert("Imovel Cadastrado com sucesso!!");
    }
    voltar() {
        let t = this.props.navigation.pop();
    }
    txtProp(texto){
         this.setState({Iproprietario:texto});
    }
    txtValor(texto){
        this.setState({valor:texto});
    }
    txtData(texto){
        this.setState({dataAluguel:texto});
    }
    txtQuarto(texto){
        this.setState({numQuarto:texto});
    }
    txtDesc(texto){
        this.setState({desc:texto});
    }
    txtEnd(texto){
        this.setState({end:texto});
    }
    txtCidade(texto){
        this.setState({cidade:texto});
    }
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:20}}>Cadastro</Text>

                <Text>Nome do proprietário</Text>
                <TextInput onChangeText={this.txtProp}/>
                <Text>Tipo do imóvel</Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                />
                <Text>Condominio</Text>
                <RadioForm
                    radio_props={radio_cond}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                />
                <Text>Valor</Text>
                <TextInput onChangeText={this.txtValor}/>
                <Text>Quantidade de quartos</Text>
                <TextInput onChangeText={this.txtQuarto}/>
                <Text>Endereço</Text>
                <TextInput onChangeText={this.txtEnd}/>
                <Text>Cidade</Text>
                <TextInput onChangeText={this.txtCidade}/>
                <Text>Descrição</Text>
                <TextInput onChangeText={this.txtDesc}/>
                <Text>Data de aluguel</Text>
                <TextInput onChangeText={this.txtData}/>
                <Button title={"Salvar"} onPress={this.cadastrar}></Button>
                <Button title={"Voltar"} onPress={this.voltar}></Button>
            </ScrollView>
        );
    }
}

export default Cadastro;
