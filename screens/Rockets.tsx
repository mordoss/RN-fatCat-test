import React, { useEffect, useState } from 'react';
import { FlatList, Switch, View } from 'react-native';

import ErrorModal from '../components/ErrorModal';
import useFetch from '../hooks/useFetch';
import Rocket from '../components/Rocket';
import { RocketsContainer } from '../styled/layout';
import { SmallNormal } from '../styled/typography';
import { ROCKETS as url } from '../APIs';
import { dark } from '../styled/colors';

export interface IRocket {
  id: number;
  name: string;
  flickr_images: string[];
  mass: { kg: number; lb: number };
  height: { meters: number; feet: number };
  diameter: { meters: number; feet: number };
  type: string;
  active: boolean;
  wikipedia: string;
  description: string;
  children?: React.ReactNode;
}

const Rockets = () => {
  const { status, data } = useFetch<IRocket[]>(url);
  const [rockets, setRockets] = useState<IRocket[]>();
  const [apiInvalid, setApiInvalid] = useState(true);
  const [imperial, setImperial] = useState(false);

  useEffect(() => {
    setApiInvalid(status === 'error');
    setRockets(data);
  }, [data, status]);

  return (
    <RocketsContainer>
      <ErrorModal
        modalVisible={apiInvalid}
        message="API"
        cancel={setApiInvalid}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <SmallNormal style={{ marginLeft: 16, marginRight: 0 }}>
          Imperial Units
        </SmallNormal>
        <Switch
          trackColor={{ false: dark.light, true: dark.primaryLight }}
          thumbColor={imperial ? dark.primary : dark.secondary}
          onValueChange={() => setImperial(!imperial)}
          value={imperial}
        />
      </View>

      <FlatList
        data={rockets}
        keyExtractor={(rocket) => rocket.id.toString()}
        horizontal
        pagingEnabled
        renderItem={({ item }) => (
          <Rocket
            flickr_images={item.flickr_images}
            name={item.name}
            id={item.id}
            mass={item.mass}
            height={item.height}
            diameter={item.diameter}
            type={item.type}
            active={item.active}
            wikipedia={item.wikipedia}
            description={item.description}
            imperial={imperial}
          />
        )}
      />
    </RocketsContainer>
  );
};

export default Rockets;
