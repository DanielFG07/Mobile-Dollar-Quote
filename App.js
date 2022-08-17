import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Cotacao from './components/Cotacao';
import Api from './components/Api';

export default function App() {
  const [InputCotacao, setInputCotacao] = useState(0);
	async function carregaCotacao(){ 	
	const response = await Api.get('json/last/USD-BRL');
		setInputCotacao(response.data.USDBRL);
	}
	return (

	<View style={styles.container}>
    <View style={styles.bloco}>
	<Text style={styles.TextoBloco}>Cotação do Dólar:  </Text>
		  
		  <TouchableOpacity style={styles.botao}
			  onPress={carregaCotacao}>
		  <Text style={styles.TextoB}>Mostrar os dados da cotação</Text>
		  </TouchableOpacity>
		  
		  <Cotacao data={InputCotacao}/>
		  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
	
	bloco: {
		backgroundColor: '#FF0000',
	},
	
	TextoBloco: {
		fontSize: '24'	
	},
	
	TextoB: {
		fontSize: '20',
		backgroundColor: '#000000',
		color: '#fff',
	},
});