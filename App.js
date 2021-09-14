import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';

export default function App() {
  const [prestamo,setPrestamo] = useState();
  const [tipo,setTipo] = useState();
  const [nroCuotas,setNroCuotas] = useState();
  const [cuota,setCuota] = useState();
  const [deuda,setDeuda] = useState();

  let dinero= parseInt(prestamo);
  let nroCuotasInt= parseInt(nroCuotas);

  const Calcular = () =>{
    if (dinero<4000000 || dinero>100000000) {
      alert("el dinero de be de ser entre 4 millones y 100 millones")
    }
    else if(nroCuotasInt<12 || nroCuotasInt>60){
      alert("el numero de cuotas debe de estar entre 12 y 60")
    }else if(tipo>4 || tipo<1){
      alert("el tipo de cuota debe de estar entre 1-4")
    }else{
      switch (tipo) 
      {
        case "1":
          setDeuda(((dinero*0.005)*nroCuotasInt)+dinero);
          setCuota((((dinero*0.005)*nroCuotasInt)+dinero)/nroCuotasInt);
          break;
        
        case "2":
          setDeuda(((dinero*0.008)*nroCuotasInt)+dinero);
          setCuota((((dinero*0.008)*nroCuotasInt)+dinero)/nroCuotasInt);
          break;
        
        case "3":
          setDeuda(((dinero*0.015)*nroCuotasInt)+dinero);
          setCuota((((dinero*0.015)*nroCuotasInt)+dinero)/nroCuotasInt);
          break;

        case "4":
          setDeuda(((dinero*0.02)*nroCuotasInt)+dinero);
          setCuota((((dinero*0.02)*nroCuotasInt)+dinero)/nroCuotasInt);
          break;
      }
    }
  }

  const Limpiar = () =>{
    setPrestamo("");
    setTipo("");
    setNroCuotas("");
    setCuota("");
    setDeuda("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ATM BANK</Text>
      <View>

        <Text>Valor del prestamo.</Text>
        <TextInput style={styles.inputs} onChangeText={setPrestamo} value={prestamo}></TextInput>

        <Text>Tipo del prestamo:</Text>
        <TextInput style={styles.inputs} onChangeText={setTipo} value={tipo}></TextInput>

        <Text>Nro de Cuotas:</Text>
        <TextInput style={styles.inputs} onChangeText={setNroCuotas} value={nroCuotas}></TextInput>

        <Text>Valor cuota:</Text>
        <TextInput style={styles.inputs} value={cuota}></TextInput>

        <Text>Total Deuda:</Text>
        <TextInput style={styles.inputs} value={deuda}></TextInput>

      </View>
      <View style={styles.footer}>
        <Button style={styles.button} title="Calcular" onPress={Calcular}></Button>
        <Button style={styles.button} title="Limpiar" onPress={Limpiar}>Limpiar</Button>
      </View>
      <StatusBar style="auto" />
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

  title: {
    fontSize:50,
    fontWeight:10,
    fontFamily: 'Helvetica Neue',
  },

  inputs:{
    border:"1px solid #000",
    borderRadius:10,
    marginBottom:20
  },

  button:{
    height:20,
    width:20,
    marginTop:20
  },

  footer:{
    marginTop:40,
    display:"block"
  },

  error:{
    color:"red",
  }
});
