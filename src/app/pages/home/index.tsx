import React from 'react';

import Avatar from 'src/assets/images/avatar.png';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <img src={Avatar} />
    </div>
  );
};

export default React.memo(Home);
