import { SafeAreaView, Text } from "react-native";
import estilo from "./estilo";

interface ParImparProps{
    num:number;
    
}

export default function ParImpar(props:ParImparProps){
    
    return(
        <SafeAreaView>
            <Text style={estilo.fontG}>
                PAR ou IMPAR?
            </Text>
                {
                    props.num % 2 === 0
                    ? <Text> PAR </Text>
                    : <Text> ÍMPAR </Text>
                }
        </SafeAreaView>
    )
}