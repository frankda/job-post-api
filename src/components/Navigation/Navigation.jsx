import Image from 'next/image';
import Button from 'components/Button/Button';
import { Navigation, DrawerToggleButton, NavTitle } from './Navigation.styles';

function NavigationComponent() {
  return (
    <Navigation>
      <DrawerToggleButton>
        <Image src="/fold.svg" width={32} height={32} />
      </DrawerToggleButton>
      <NavTitle>Dashboard</NavTitle>
      <Button
        startIcon="/profile.svg"
        endIcon="/downChevron.svg"
      >
        profile
      </Button>
    </Navigation>
  );
}

export default NavigationComponent;
