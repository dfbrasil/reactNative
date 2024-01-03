import { Text, View } from "react-native"; 
import estilo from "../estilo";
import Filho from "./FIlho";
import { useState } from "react";


export default function Pai(){

    const [texto, setTexto] = useState("")
    const [num, setNum] = useState(0)
    const [numQuebrado, setNumQuebrado] = useState(0.0)

    function exibirValor(numero:number, texto:string, quebrado:number){
        setNum(numero)
        setTexto(texto)
        setNumQuebrado(quebrado)
    }

    return (
        <View>
            <Text style={estilo.fontG}>
                {texto} {num}</Text>
            <Text style={estilo.fontG}>
                O número fracionado {numQuebrado}</Text>
           <Filho
                min={1} 
                max={100} 
                onExibirValor={exibirValor} 
            />
        </View>
    )
}