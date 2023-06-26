import React from 'react';
import globalStyle from '@components/global.scss';

interface IAppProps {
  Component: React.FunctionComponent;
  pageProps: Record<string, unknown>;
}

const App: React.FunctionComponent<IAppProps> = ({
  Component,
  pageProps,
}: IAppProps) => {

  return (
    <div className={globalStyle.Global}>
        <Component {...pageProps} />
    </div>
  );
};

export default App;
