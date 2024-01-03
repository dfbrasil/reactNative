
import { Text, View } from "react-native";
import estilo from "../estilo";
import Filho from "./Filho";

export default function Pai(){

    let x = 13
    let y =100

    return (
        <View>
             <Text style={estilo.fontG}>Compoente Pai</Text>
             <Filho x={x} y={y}/>
        </View>
       
    )
}