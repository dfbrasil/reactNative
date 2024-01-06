import React from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import estilo from "../estilo";
import Numero from "./Numero";

interface MegaProps{
    numerosMega:number
}

interface MegaState {
    qtdNumeros: number;
    numeros: number[];
}

export default class Mega extends React.Component<MegaProps, MegaState>{
    state: MegaState = {
        qtdNumeros: this.props.numerosMega,
        numeros: []
    }

    alterarQtdNumero = (qtde: string)  => {
        this.setState({qtdNumeros: +qtde})
    }
    
    gerarNumeroNaoContido = (nums: number[]): number => {
        const novo = parseInt(String(Math.random() * 60)) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros: number[] = [];
        while (numeros.length < this.state.qtdNumeros) {
            const novoNumero = this.gerarNumeroNaoContido(numeros);
            numeros.push(novoNumero);
        }
        numeros.sort((a,b) => a - b)
        this.setState({ numeros });
    }

    exibirNumeros = () => { 
        const nums = this.state.numeros
        return nums.map(num => {
            return <Numero key={num} num={num}/>
        })
    }

    render(){
        return (
            <SafeAreaView>
                <Text style={estilo.fontG}> 
                    Gerador de Mega Sena 
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder="Quantidade de Numeros"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdNumero}
                    />
                    <Button
                        title="Gerar Numeros"
                        onPress={this.gerarNumeros}
                    />
                    <View style={{
                            flexDirection: 'row', 
                            flexWrap:'wrap',
                            marginTop: 20,
                            justifyContent: 'center'
                        }}>
                        {this.exibirNumeros()}
                    </View>
            </SafeAreaView>
        );
    }
}
