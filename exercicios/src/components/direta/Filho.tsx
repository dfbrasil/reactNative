
import { Text,View } from "react-native";
import estilo from "../estilo";

export default function Filho(props:any){

    const {x, y} = props

    return (
    <View>
        <Text style={estilo.fontG}>Componente Filho</Text>
        <Text style={estilo.fontG}>Valor de X é {x}</Text>
        <Text style={estilo.fontG}>Valor de Y é {y}</Text>
    </View>
    )
}