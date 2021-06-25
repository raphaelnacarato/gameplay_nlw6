import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Guilds } from './Guilds';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { GuildProps } from '../../components/Guild';

import { COLLETCION_APPOINTMENTS } from '../../config/storage';

import { theme } from '../../styles/theme';
import { styles } from '../../styles/screens/app/AppointmentCreate';


export function AppointmentCreate() {
   const [category, setCategory] = useState('');
   const [guildsModalIsOpen, setGuildsModalIsOpen] = useState(false);
   const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

   const [day, setDay] = useState('');
   const [month, setMonth] = useState('');
   const [hour, setHour] = useState('');
   const [minute, setMinute] = useState('');
   const [description, setDescription] = useState('');

   const { navigate } = useNavigation();

   function handleOpenGuildsModal() {
      setGuildsModalIsOpen(true);
   };

   function handleCloseGuildsModal() {
      setGuildsModalIsOpen(false);
   };

   function handleGuildSelected(guildSelect: GuildProps) {
      setGuild(guildSelect);
      setGuildsModalIsOpen(false);
   };

   function handleCategorySelect(categoryId: string) {
      setCategory(categoryId);
   };

   async function handleSave() {
      const newAppointment = {
         id: uuid.v4(),
         guild,
         category,
         date: `${day}/${month} ás ${hour}:${minute}h`,
         description
      };

      const storage = await AsyncStorage.getItem(COLLETCION_APPOINTMENTS);
      const appointments = storage ? JSON.parse(storage) : [];

      await AsyncStorage.setItem(COLLETCION_APPOINTMENTS, JSON.stringify([...appointments, newAppointment]));

      navigate('Home');
   };

   return (
      <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         style={styles.container}
      >
         <Background>
            <Header
               title='Agendar partida'
            />
            <ScrollView>

               <Text style={[
                  styles.label,
                  { marginLeft: 24, marginTop: 36, marginBottom: 18 }
               ]}>
                  Categoria
               </Text>

               <CategorySelect
                  hasCheckBox
                  setCategory={handleCategorySelect}
                  categorySelected={category}
               />

               <View style={styles.form}>
                  <RectButton onPress={handleOpenGuildsModal}>
                     <View style={styles.select}>
                        {guild.icon ?
                           < GuildIcon guildId={guild.id} iconId={guild.icon} />
                           :
                           <View style={styles.image} />
                        }

                        <View style={styles.selectBody}>
                           <Text style={styles.label}>
                              {guild.name ? guild.name : 'Selecione um servidor'}
                           </Text>
                        </View>

                        <Feather name='chevron-right' size={18} color={theme.colors.heading} />
                     </View>
                  </RectButton>

                  <View style={styles.field}>
                     <View>
                        <Text style={[styles.label, { marginBottom: 12 }]}>Dia e mês</Text>

                        <View style={styles.column}>
                           <SmallInput
                              value={day}
                              onChangeText={setDay}
                              maxLength={2}
                           />
                           <Text style={styles.divider}>/</Text>
                           <SmallInput
                              value={month}
                              onChangeText={setMonth}
                              maxLength={2}
                           />
                        </View>
                     </View>

                     <View>
                        <Text style={[styles.label, { marginBottom: 12 }]}>Hora e minuto</Text>

                        <View style={styles.column}>
                           <SmallInput
                              value={hour}
                              onChangeText={setHour}
                              maxLength={2}
                           />
                           <Text style={styles.divider}>:</Text>
                           <SmallInput
                              value={minute}
                              onChangeText={setMinute}
                              maxLength={2}
                           />
                        </View>
                     </View>
                  </View>

                  <View style={[styles.field, { marginBottom: 12 }]}>
                     <Text style={styles.label}>Descrição</Text>
                     <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
                  </View>
                  <TextArea
                     value={description}
                     onChangeText={setDescription}
                     multiline
                     maxLength={100}
                     numberOfLines={5}
                     autoCorrect={false}
                  />
               </View>

               <View style={styles.footer}>
                  <Button
                     title='Agendar'
                     onPress={handleSave}
                  />
               </View>
            </ScrollView>
         </Background>

         <ModalView
            visible={guildsModalIsOpen}
            closeModal={handleCloseGuildsModal}
         >
            <Guilds
               handleGuildSelected={handleGuildSelected}
            />
         </ModalView>

      </KeyboardAvoidingView>
   );
};
