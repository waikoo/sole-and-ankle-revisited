import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  const isPhoneAndDown = window.matchMedia(QUERIES.phoneAndDown).matches
  const isTabletAndDown = window.matchMedia(QUERIES.tabletAndDown).matches
  //
  const spacerSize = isPhoneAndDown ? 0 : isTabletAndDown ? 16 : 32
  const spacerSize2 = isPhoneAndDown ? 32 : isTabletAndDown ? 16 : 42
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={spacerSize2} />
        <ShoeGrid />
      </MainColumn>

      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={spacerSize} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media (${QUERIES.tabletAndDown}) {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (${QUERIES.tabletAndDown}) {
    flex-basis: auto;
    margin-top: 16px;
    margin-bottom: -12px;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media ${QUERIES.tabletAndDown} {
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
