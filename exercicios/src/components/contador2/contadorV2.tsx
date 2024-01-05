import { useState } from "react"
import { Text, View } from "react-native"
import estilo from "../estilo"
import ContadorDisplay2 from "./contadorDisplay2"
import ContadorBotoes2 from "./contadorBotoes2"

export default function ContadorV2(){

    const [numero, setNumero] = useState(0)

    const incrementar = () => setNumero((prevNumero:number) => numero + 1)
    const decrementar = () => setNumero((prevNumero:number) => numero - 1)

    return (
        <View>
            <Text style={estilo.fontG}>
                Contador
            </Text>
            <ContadorDisplay2 numero={numero} />
            <ContadorBotoes2 incrementar={incrementar} decrementar={decrementar} />
        </View>

    )
}


