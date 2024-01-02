import { View, Button } from "react-native";

export default function Botao(props:any){

    function executar(){
        console.warn('Executando 01')
    }

    return(

        <View>
           <Button  title="Executar1"
             onPress={executar}
            />

           <Button  title="Executar2"
                onPress={function(){
                    console.warn('Executando 2')
                }}
            />

            <Button title="Exec 3"
                onPress={() => console.warn('Executando 3')}
            />
        </View>
        
    )
}