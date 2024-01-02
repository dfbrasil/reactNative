
import { Text } from "react-native";
import estilo from "./estilo";

export default function MaxMinAleatorio(props:any) {
    const {min, max} = props
    //destructuring
    const valor = Math.random() * (max-min) + min
    return (
        <Text style={ estilo.fontG }>
            O número aleatório é: {Math.floor(valor)}
        </Text>
    )
}

