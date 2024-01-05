import { FlatList, SafeAreaView, Text } from "react-native";
import estilo from "../estilo";
import produtos from "./produtos";

export default function ListaDeProdutos(props:any){

const productRender = ({item: p}: {item: any}) => {
        return(
            <Text key={p.id}>
                {p.id} {p.nome} custa R${p.preco}
            </Text>
        )
   }

    return (
        <SafeAreaView>
            <Text style={estilo.fontG}>
                Lista de Produtos:
            </Text>
            <FlatList
                    data={produtos}
                    renderItem={productRender}
            />
        </SafeAreaView>
    )
}

