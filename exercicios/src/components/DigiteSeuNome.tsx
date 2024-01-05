import { Text, TextInput, View } from "react-native"
import estilo from "./estilo"
import { useState } from "react"

export default () =>{

    const [nome, setNome] = useState('Teste')

    return (
        <View>
            <Text style={estilo.fontG}>
                {nome}
            </Text>
            <TextInput
                placeholder="'Digite seu nome:"
                value={nome}
                onChangeText={nome => setNome(nome)}
                />
        </View>
    )
}