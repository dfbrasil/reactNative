import { Text, Button, View } from "react-native";
import { useState } from "react";
import estilo from "./estilo";

export default function Contador(props:any){

    const {inical = 0, passo = 1} = props

    const [numero, setNumero] = useState(inical)

    const incrementar = function(){
        return (
            setNumero((prevNumber:any) => prevNumber + passo)
        )
    }
    const decrementar = function(){
        return (
            setNumero((prevNumber:any) => prevNumber - passo)
        )
    }

    return (
        <View>
                <Text style={estilo.fontG}> {numero} </Text>
                <Button title="Somar" 
                    onPress={incrementar}
                />

                <Button title="Subtrair" 
                    onPress={decrementar}
                />
        </View>
       
    )
}