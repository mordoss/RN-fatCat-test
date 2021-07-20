import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import useFetch from '../hooks/useFetch';
import Rocket from '../components/Rocket';
import { RocketsContainer } from '../styled/layout';
import { ROCKETS as url } from '../APIs';

export interface IRocket {
  id: number;
  name: string;
  flickr_images: string[];
  mass: { kg: number };
  height: { meters: number };
  diameter: { meters: number };
  type: string;
  active: boolean;
  wikipedia: string;
  children?: React.ReactNode;
}

const Rockets = () => {
  const { status, data, error } = useFetch<IRocket[]>(url);
  const [rockets, setRockets] = useState<IRocket[]>();

  useEffect(() => {
    setRockets(data);
  }, [data]);

  return (
    <RocketsContainer>
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
          />
        )}
      />
    </RocketsContainer>
  );
};

export default Rockets;
