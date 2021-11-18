import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NameForm from './NameForm';

describe('<NameForm />', () => {
  test('it should mount', () => {
    render(<NameForm />);
    
    const nameForm = screen.getByTestId('NameForm');

    expect(nameForm).toBeInTheDocument();
  });
});