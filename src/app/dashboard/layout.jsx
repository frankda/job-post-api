'use client';

import Navigation from 'components/Navigation/Navigation';
import Drawer from 'components/Drawer/Drawer';
import { LayoutContainer, DrawerContainer, MainContainer } from './layout.styles';

function DashboardLayout({ children }) {
  return (
    <LayoutContainer>
      <DrawerContainer isOpen>
        <Drawer />
      </DrawerContainer>
      <MainContainer>
        <Navigation>nav</Navigation>
        <div className="dahsboardContainer">
          {children}
        </div>
      </MainContainer>
    </LayoutContainer>
  );
}

export default DashboardLayout;
