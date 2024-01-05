import { SafeAreaView, Text } from "react-native";
import estilo from "../estilo";
import produtos from "./produtos";

// export default function ListaDeProdutos(props:any){
//     return (
//         <SafeAreaView>
//             <Text style={estilo.fontG}>
//                 Lista de Produtos:
//             </Text>
//             {produtos.map(p => {
//                 return (
//                     <Text key={p.id}>
//                         {p.id} {p.nome} custa R${p.preco}
//                     </Text>
//                 )
//             })}
//         </SafeAreaView>
//     )
// }

//OUTRA FORMA DE CHAMAR A LISTA

export default function ListaDeProdutos(props:any){

    function obterLista() {
        return (
            produtos.map(p => {
                return (
                    <Text key={p.id}>
                        {p.id} {p.nome} custa R${p.preco}
                    </Text>
                )
            })
        )
    }

    return (
        <SafeAreaView>
            <Text style={estilo.fontG}>
                Lista de Produtos:
            </Text>
            {obterLista()}
        </SafeAreaView>
    )
}