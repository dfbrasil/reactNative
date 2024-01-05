import { Text, View } from "react-native";
import { useState } from "react";
import estilo from "../estilo";
import ContadorDisplay from "./ContadorDisplay";
import ContadorButon from "./ContadorBotoes";

interface ContadorV2Props{
    num : number;
}

export default function ContadorV2(props:ContadorV2Props){

    const [num, setNum] = useState(0)

    const incrementar = () => setNum((prevNum: number) => prevNum + 1)
    const decrementar = () => setNum((prevNum: number) => prevNum - 1)

    return (
        <View>
            <Text style={estilo.fontG}>Contador V2!</Text>
            <ContadorDisplay num={num} />
            <ContadorButon incrementar={incrementar} decrementar={decrementar}/>
        </View>
    )
}