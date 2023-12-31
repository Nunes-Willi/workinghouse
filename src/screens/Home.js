import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";

import api from '../plugins/api';

import Engrenagem from "../../icons/engrenagem.png";
import Login from "../../icons/login.png";
import MapSreen from "../../components/App";

export default function HomeScreen ({ navigation }) {
  const [people, setPeople] = React.useState([]);

  async function getPeople() {
    const {data} = await api.get('/people/')
    setPeople(data)
  }

  useEffect(() => {
    getPeople()
  }, [])

  const handleAlert = () => {
    alert("Em desenvolvimento");
  };
  // const people = [
  //   {
    //   id: 1,
    //   name: "Dna. Gertrudes",
    //   jobType: "Limpeza",
    //   location: "Av. Gertulio Vargas 369 - Joinville SC",
    //   age: 72,
    //   price: "R$ 110/Diária",
    //   image:
    //     "https://img.freepik.com/fotos-premium/retrato-de-uma-velha-segurando-dinheiro-isolado_246836-889.jpg",
    // },
    // {
    //   id: 2,
    //   name: "João Oliveira",
    //   jobType: "Cozinhar",
    //   location: "Rio de Janeiro",
    //   age: 28,
    //   price: "R$ 40/hora",
    //   image:
    //     "https://img.freepik.com/fotos-gratis/chef-profissional-cozinheiro-em-uniforme-branco-e-chapeu-de-cozinheiro-apontando-para-o-lado-com-o-dedo-indicador-parecendo-confiante-em-pe-sobre-um-fundo-branco_141793-20622.jpg?",
    // },
    // {
    //   id: 3,
    //   name: "Therezinha Gertrudes Pires",
    //   jobType: "Babá",
    //   location: "São Paulo",
    //   age: 70,
    //   price: "R$ 100/mês",
    //   image:
    //     "https://img.freepik.com/fotos-premium/retrato-de-uma-velha-segurando-dinheiro-isolado_246836-889.jpg",
    // },
    // {
    //   id: 4,
    //   name: "Mario Bros",
    //   jobType: "Encanador",
    //   location: "São Paulo",
    //   age: 30,
    //   price: "R$ 35/hora",
    //   image:
    //     "https://maridodealuguel.com.br/wp-content/uploads/2021/12/352-3524981_plumbing-plumbing-man.png",
    // },
    // {
    //   id: 5,
    //   name: "Paula Vieira",
    //   jobType: "Cozinhar",
    //   location: "São Paulo",
    //   age: 34,
    //   price: "R$ 70/hora",
    //   image:
    //     "https://blog.unifil.br/wp-content/uploads/shutterstock_1889627056.jpg",
    // },
    // {
    //   id: 6,
    //   name: "Luigi Bros",
    //   jobType: "Controle de Pragas",
    //   location: "São Paulo",
    //   age: 48,
    //   price: "R$ 67/hora",
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5E_v2LaL7I1RirG84CsXEpL2qdUpvPxCKg&usqp=CAU",
    // },
    // {
    //   id: 7,
    //   name: "Pedro Silva",
    //   jobType: "Limpeza de calha",
    //   location: "São Paulo",
    //   age: 33,
    //   price: "R$ 50/hora",
    //   image:
    //     "https://img.freepik.com/fotos-premium/retrato-de-uma-velhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwa8vu5oInEGAynvtgJTK-t9_z8nTC9jAww&usqp=CAUha-segurando-dinheiro-isolado_246836-889.jpg",
    // },
  // ];
  
  return (
    <>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleAlert} style={styles.button}>
            <Image source={Engrenagem} style={styles.image}></Image>
          </TouchableOpacity>
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.buttonLogin}
          >
            <Image source={Login} style={styles.imageLogin}></Image>
          </TouchableOpacity>
        </View>
      <MapSreen />
      <ScrollView style={styles.container}>
        {people.map((people) => (
          <TouchableOpacity
            key={people.id}
            style={styles.card}
            onPress={() => navigation.navigate("Detail")}
          >
            <Image
              source={{ uri: people.foto.file }}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardText}>{people.nome}</Text>
              <Text
                style={styles.cardText}
              >{people.servico}</Text>
              <Text
                style={styles.cardText}
              >{people.local}</Text>
              <Text style={styles.cardText}>{people.idade}</Text>
              <Text style={styles.cardText}>R${people.valor.replace('.',',')}</Text>
              <Text
                style={{ color: "#837F7F", fontWeight: "bold", marginTop: 20 }}
              >
                5.0 ⭐ ⭐ ⭐ ⭐ ⭐
                <Text style={{ color: "#9F9F9F", fontSize: 11 }}>
                  52 avaliações
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B8AEB",
    paddingHorizontal: 16,
    paddingTop: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 40,
  },
  buttonLogin: {
    padding: 10,
    backgroundColor: 'transparent',
    borderRadius: 40,
  },
  searchBar: {
    flex: 1,
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  cardImage: {
    width: "27%",
    height: "95%",
    borderRadius: 10,
  },
  cardTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  cardText: {
    fontSize: 13,
  },
  imageLogin: {
    width: 32,
    height: 32,
    backgroundColor: "#3B8AEB", 
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#3B8AEB',
  },
  image: {
    width: 30,
    height: 30,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#3B8AEB',
    borderWidth: 1,
    borderColor: '#3B8AEB',
  },
});


