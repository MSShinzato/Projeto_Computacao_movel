import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import createAppContainer from 'react-navigation';
import home from './pages/Home';
import cadastro from './pages/Cadastro';
import remocao from './pages/Remocao';
import lista from './pages/ListaImob';

//npm install @react-native-community/async-storage

let navegator = createStackNavigator({
    homeP: {screen: home},
    cadastroP: {screen: cadastro},
    remocaoP: {screen: remocao},
    listaP: {screen: lista}
},
    {headerMode:'none'});

let App = createAppContainer(navegator);

export default App;