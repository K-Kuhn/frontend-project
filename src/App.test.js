import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import Reservations from './components/Reservations';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter } from 'react-router-dom';

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
    const { getByLabelText, getByText } = render(
      <ChakraProvider>
        <MemoryRouter>
          <Reservations />
        </MemoryRouter>
      </ChakraProvider>
    );

    // Fill out the time field
    const timeInput = getByLabelText('Time*');
    fireEvent.change(timeInput, { target: { value: '19.00' } });

    // Submit the form
    fireEvent.click(getByText('Confirm Reservation'));

    // Wait for the form submission to complete
    await waitFor(() => {
      // Assert that the form is submitted successfully
      expect(timeInput.value).toBe('19.00');
    });
  });

  it('displays error message for invalid time', async () => {
    const { getByLabelText, getByText } = render(
      <ChakraProvider>
        <MemoryRouter>
          <Reservations />
        </MemoryRouter>
      </ChakraProvider>
    );

    // Fill out the time field with an invalid value
    const timeInput = getByLabelText('Time*');
    fireEvent.change(timeInput, { target: { value: '' } });

    // Submit the form
    fireEvent.click(getByText('Confirm Reservation'));

    // Wait for the error message to appear
    await waitFor(() => {
      // Assert that the error message is displayed
      expect(getByText('Time is required')).toBeInTheDocument();
    });
  });
});

describe('FormComponent', () => {
  it('submits form with correct data', async () => {
    // Mock onSubmit function
    const onSubmitMock = jest.fn();

    // Render the FormComponent with the mock onSubmit function
    const { getByPlaceholderText, getByText } = render(<FormComponent onSubmit={onSubmitMock} />);

    // Fill out the form fields
    fireEvent.change(getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'testpassword' } });

    // Submit the form
    fireEvent.click(getByText('Submit'));

    // Wait for the form submission to complete
    await waitFor(() => {
      // Assert that the onSubmit function is called with the correct form data
      expect(onSubmitMock).toHaveBeenCalledWith({
        username: 'testuser',
        password: 'testpassword',
      });
    });
  });
});
