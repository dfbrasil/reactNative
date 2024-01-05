
import { SafeAreaView, Text } from "react-native";
import estilo from "../estilo";

interface FilhoProps{
    nome: string;
    sobrenome: string;
}


export default function Filho(props:FilhoProps){
    return(
        <SafeAreaView>
            <Text style={estilo.fontG}>
                {props.nome} {props.sobrenome}
            </Text>
        </SafeAreaView>
    )
}