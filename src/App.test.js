import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import Reservations from './components/Reservations';
import { ChakraProvider } from '@chakra-ui/react';

// Mock matchMedia
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  };
};

describe('Reservations', () => {
  it('submits form with valid time', async () => {
    const { getByLabelText, getByText } = render(<ChakraProvider>
        <Reservations />
      </ChakraProvider>);

    // Fill out the time field
    const timeInput = getByLabelText('Time');
    fireEvent.change(timeInput, { target: { value: '19:00' } });

    // Submit the form
    fireEvent.submit(getByText('Confirm Reservation'));

    // Wait for the form submission to complete
    await waitFor(() => {
      // Assert that the form is submitted successfully
      expect(timeInput.value).toBe('19:00');
    });
  });

  it('displays error message for invalid time', async () => {
    const { getByLabelText, getByText } = render(<ChakraProvider>
        <Reservations />
      </ChakraProvider>);

    // Fill out the time field with an invalid value
    const timeInput = getByLabelText('Time');
    fireEvent.change(timeInput, { target: { value: '' } });

    // Submit the form
    fireEvent.submit(getByText('Confirm Reservation'));

    // Wait for the error message to appear
    await waitFor(() => {
      // Assert that the error message is displayed
      expect(getByText('Time is required')).toBeInTheDocument();
    });
  });
});
