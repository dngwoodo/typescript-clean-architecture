import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('깨지지 않는다.', () => {
    render(<App />);
  });
});
