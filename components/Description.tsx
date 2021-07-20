import React, { useState } from 'react';

import { SmallNormal, SmallBold } from '../styled/typography';
import { dark } from '../styled/colors';

const Description = ({ description }: { description: string }) => {
  const [more, setMore] = useState(false);

  const regulateText = (text: string) =>
    more ? text : `${text.slice(0, 50)}...`;

  return (
    <>
      <SmallNormal style={{ marginTop: 16, marginBottom: 16 }}>
        {regulateText(description)}
      </SmallNormal>
      <SmallBold onPress={() => setMore(!more)} style={{ color: dark.primary }}>
        {more ? 'Show less' : 'Show more'}
      </SmallBold>
    </>
  );
};

export default Description;
