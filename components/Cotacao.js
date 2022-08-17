import { React } from 'react';
import { StyleSheet, Text} from 'react-native';

export default function Cotacao(props){
	return(
	<>
		<Text>Compra: {props.data.bid}</Text>
		<Text>Venda: {props.data.ask}</Text>
		<Text>Variação: {props.data.varBid}</Text>
		<Text>Porcentagem de Variação: {props.data.pctChange}</Text>
		<Text>Máximo: {props.data.high}</Text>
		<Text>Mínimo: {props.data.low}</Text>
		
	</>
	);
}