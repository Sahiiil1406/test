import { render, screen, waitFor } from '@testing-library/react';
    import '@testing-library/jest-dom';
    import App from './App';

    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
          }),
      })
    );

    afterEach(() => {
      jest.clearAllMocks();
    });

    test('renders DevDAO in the navbar', () => {
      render(<App />);
      const navbarTitle = screen.getByText(/DevDAO/i);
      expect(navbarTitle).toBeInTheDocument();
    });

    test('navbar has red background color', () => {
      render(<App />);
      const navbar = screen.getByRole('navigation', { name: /main navigation/i });
      expect(navbar).toHaveStyle('background-color: red');
    });

    test('fetches and displays the todo item', async () => {
      render(<App />);

      // Verify loading text is present initially
      expect(screen.getByText(/loading/i)).toBeInTheDocument();

      // Wait for the todo item to be displayed
      const todoItem = await waitFor(() => screen.getByTestId('todo-item'));

      // Verify todo item contents
      expect(todoItem).toHaveTextContent('Title: delectus aut autem');
      expect(todoItem).toHaveTextContent('Completed: No');
    });
    
