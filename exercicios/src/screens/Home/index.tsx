import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Primeiro from '../../components/Primeiro';
// import Comp, { Comp2, Comp3 } from '../../components/Multi';
// import MinMax from '../../components/MinMax';
// import MaxMinAleatorio from '../../components/MaxMinAleatorio';
// import Titulo from '../../components/Titulo';
import Botao from '../../components/Botao';
import Contador from '../../components/Contador';


export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>TESTE2</Text>
      <Primeiro />
      <Comp />
      <Comp2 />
      <Comp3 /> */}
      {/* <MinMax min={3} max={30}/> */}
      {/* Props do componente MinMax */}
      {/* <MaxMinAleatorio min={0} max={100} /> */}
      {/* <Titulo principal={ 'Título Principal' } secundario={ 'Título Secundário' }/> */}
      {/* <Botao /> */}
      <Contador inical={ 100 } passo={2} />
      <Contador />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
