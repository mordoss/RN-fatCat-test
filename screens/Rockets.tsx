import React, { useEffect, useState } from 'react';

import useFetch from '../hooks/useFetch';
import Rocket from '../components/Rocket';
import { RocketsContainer } from '../styled/layout';
import { ROCKETS as url } from '../APIs';

export interface IRocket {
  id?: number;
  name: string;
}

const Rockets = () => {
  const { status, data, error } = useFetch<IRocket[]>(url);
  const [rockets, setRockets] = useState<IRocket[]>();

  useEffect(() => {
    setRockets(data);
  }, [data]);

  const rednderRockets = () =>
    rockets?.map((rocket) => <Rocket key={rocket.id} name={rocket.name} />);

  return <RocketsContainer>{rednderRockets()}</RocketsContainer>;
};

export default Rockets;
