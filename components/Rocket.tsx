import React, { useState } from 'react';
import { Image, Dimensions, TouchableOpacity } from 'react-native';

import RocketCardInfo from './RocketCardInfo';
import { RocketCard } from '../styled/cards';
import { IRocket } from '../screens/Rockets';

const { width } = Dimensions.get('window');

const Rocket: React.FC<IRocket> = ({
  // eslint-disable-next-line camelcase
  flickr_images,
  name,
  mass,
  height,
  diameter,
  type,
  active,
  wikipedia,
}) => {
  const [imageZoomed, setImageZoomed] = useState(false);

  return (
    <RocketCard>
      <TouchableOpacity onPress={() => setImageZoomed(!imageZoomed)}>
        <Image
          source={{ uri: flickr_images[0] }}
          style={{
            width,
            height: imageZoomed ? 500 : 200,
          }}
        />
      </TouchableOpacity>
      <RocketCardInfo
        name={name}
        mass={mass}
        height={height}
        diameter={diameter}
        type={type}
        active={active}
        wikipedia={wikipedia}
        width={width}
      />
    </RocketCard>
  );
};

export default Rocket;
