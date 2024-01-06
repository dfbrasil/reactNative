import { SafeAreaView, Text, StyleSheet } from "react-native"

// export default (props:any) => {
//     return (
//         <SafeAreaView style={style.Quadrado}>
//             <Text>
//                 Teste
//             </Text>
//         </SafeAreaView>
//     )
// }

// const style = StyleSheet.create({
//     Quadrado:{
//         height: 20,
//         width: 20,
//         backgroundColor: '#000'
//     }
// })

export default (props:any) => {

    const lado = 50

    return (
        <SafeAreaView style={{
            height:lado,
            width:lado,
            backgroundColor: props.cor || '#000'
        }}>
        </SafeAreaView>
    )
}
