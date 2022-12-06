import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

const TabArea = styled.View`
  height: 60px;
  backgound-color: #4eadbe;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {
  return (
    <TabArea>
      <TabItem>
        <HomeIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem>
        <SearchIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem>
        <TodayIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem>
        <FavoriteIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
      <TabItem>
        <AccountIcon width="24" height="24" fill="#FFFFFF" />
      </TabItem>
    </TabArea>
  );
};
