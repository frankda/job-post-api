'use client';

import { useAppContext } from 'context/appContext';
import RedirectTemplate from 'components/RedirectTemplate/RedirectTemplate';

function DashboardPage() {
  const { user } = useAppContext();

  // if (user === undefined) {
  //   return (<RedirectTemplate />);
  // }

  return (
    <></>
  );
}

export default DashboardPage;
