; import React from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from '../../styles/screens/app/Guilds';

interface Props {
   handleGuildSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelected }: Props) {

   const guilds = [
      {
         id: '1',
         name: 'Lendários',
         icon: 'image.png',
         owner: true
      },
      {
         id: '2',
         name: 'Galera do Game',
         icon: 'image.png',
         owner: true
      },
   ];

   return (
      <View style={styles.container}>
         <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
               <Guild
                  data={item}
                  onPress={() => handleGuildSelected(item)}
               />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            ListHeaderComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{ paddingBottom: 50, paddingTop: 50 }}
            style={styles.guilds}
         />
      </View>
   );
};
