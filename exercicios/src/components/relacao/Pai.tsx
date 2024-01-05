import { SafeAreaView, Text } from "react-native";
import estilo from "../estilo";

export default function Pai(props:any){
    return(
        <SafeAreaView>
            <Text style={estilo.fontG}>
               Membros da Família
            </Text>
            {props.children}
            <Text style={estilo.fontG}>
                fim da familia
            </Text>
        </SafeAreaView>
    )
}