import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Detail()
{
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }.`;

  function navigateBack() 
  {
    navigation.goBack();
  }

  function sendMail()
  {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsapp()
  {
    Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
  }

  return (

    <View style={styles.container}>
      
      <View style={styles.header}>

        <TouchableOpacity onPress={navigateBack}>

          <View style={styles.headerArrowText}>
            <Feather name="arrow-left" size={28} color="#E82041" />
            <Text style={styles.headerText}>Voltar</Text>
          </View>

        </TouchableOpacity>

        <Image source={logoImg} />

      </View>

      <View style={styles.incident}>

        <Text style={[styles.incidentNameCityUf, {marginTop: 0}]}>{incident.name} ({incident.city}/{incident.uf})</Text>

        <ScrollView showsVerticalScrollIndicator={true} >

          <Text style={styles.incidentTitle}>{incident.title}</Text>

          <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>

          <Text style={styles.incidentValue}>{incident.description}</Text>

        </ScrollView>

        <View style={styles.valor}>
          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }</Text>
        </View>
      </View>

      <View style={styles.contactBox}>

        <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>

        <View style={styles.actions}>

          <TouchableOpacity style={styles.action} onPress={ sendMail }>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={ sendWhatsapp }>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>

  );
}