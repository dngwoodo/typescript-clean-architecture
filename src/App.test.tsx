import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';
import AppProvider from './provider/src/AppProvider';

describe('App', () => {
  it('깨지지 않는다.', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>,
    );
  });
});
