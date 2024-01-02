import { View, Text } from "react-native";
import estilo from "./estilo";

export default function Titulo(props:any){
    return (
        <View>
            <Text style={ estilo.fontG }> { props.principal } </Text>
            <Text style={ estilo.fontM }> { props.secundario } </Text>
        </View>
    )
}