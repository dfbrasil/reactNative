import { View, Button } from "react-native"; 

interface FilhoProps {
    min: number;
    max: number;
    onExibirValor: (numero:number, texto:string, quebrado:number) => void
}

export default function Filho(props:FilhoProps){

    function gerarNumero(min:number, max:number){
        const numeroGerado = parseInt((Math.random() * (max - min + 1) + min).toString());
        const numeroQuebrado = parseFloat(((Math.random() * (max - min + 1) + min) * 0.1).toFixed(2));

        props.onExibirValor(numeroGerado, 'O número inteiro é: ', numeroQuebrado );
    }

    return (
        <View>
            <Button title="Executar"
            onPress={function(){
                gerarNumero(props.min, props.max)
    
            }}
            />
        </View>
    )
}