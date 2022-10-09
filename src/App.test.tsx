import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('깨지지 않는다.', () => {
    render(<App />);

    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
