import React, { useState,  useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';
import { apisAreAvailable } from 'expo';

export default function Incidents()
{
    const navigation = useNavigation();

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function navigateToDetail(incident)
    {
        navigation.navigate('Detail', { incident } );
    }

    async function loadIncidents()
    {
        if (loading) {
            return;
        }

        if (total > 0 && incidents.length == total) {
            return;
        }

        setLoading(true);

        const response = await api.get('incidents', { params: { page } });

        //setIncidents(response.data); para nao sobrescrever ao carregar mais itens:
        setIncidents([...incidents, ...response.data]);// anexando dois vetores

        setTotal(response.headers['x-total-count']);

        setPage(page + 1);
        
        setLoading(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);


  return (

    <View style={styles.container}>

        <View style={styles.header}>

            <Image source={logoImg} />

            <Text style={styles.headerText}>

            Total de <Text style={styles.headerTextBold}>{total} casos</Text>.

            </Text>

        </View>

        <Text style={styles.title}>Salve o dia,</Text>

        <Text style={styles.description}>escolhendo um dos casos abaixo!</Text>

        <FlatList 
            data={incidents}
            style={styles.incidentList}
            keyExtractor={ incident => String(incident.id) }
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.33}
            onEndReached={loadIncidents}
            renderItem={ ({ item: incident }) => (

            <TouchableOpacity 
                style={styles.detailsButton}
                onPress={ () => navigateToDetail(incident) }>

                <View style={styles.incident}>

                    <Text style={styles.incidentProperty}>ONG</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CASO</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>
                    
                    <Text style={styles.incidentProperty}>Valor</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value) }</Text>

                    <View style={styles.lineGroup}>
                        <Text style={styles.detailsButtonText}>Toque para mais detalhes</Text>
                    </View>

                    {/* <Feather name="arrow-right" size={16} color="#E02041" /> */}
                    
                </View>

            </TouchableOpacity>


            )}
        />

    </View>

  );
}