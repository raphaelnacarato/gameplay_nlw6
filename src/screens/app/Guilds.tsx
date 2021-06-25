; import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { api } from '../../services/api';

import { styles } from '../../styles/screens/app/Guilds';

interface Props {
   handleGuildSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelected }: Props) {
   const [guilds, setGuilds] = useState<GuildProps[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetchGuilds();

   }, []);

   async function fetchGuilds() {
      const res = await api.get('/users/@me/guilds');

      setGuilds(res.data);
      setLoading(false);
   };

   return (
      <View style={styles.container}>
         {loading ?
            <Load />
            :
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
         }
      </View>
   );
};
