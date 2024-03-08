
describe('LoginUser', () => {

    // User enters valid email and password, clicks Accept button, and is redirected to admin dashboard
    it('should redirect to admin dashboard when valid email and password are entered', () => {
      // Mock dependencies
      const setSessionCookieMock = jest.fn();
      const useRouterMock = jest.fn().mockReturnValue({ push: jest.fn() });
      const loginUserMock = jest.fn().mockResolvedValue({ status: 200, data: { data: { access_token: 'token' } } });

      // Replace dependencies with mocks
      jest.mock('../../utils/sessionsUtils', () => ({ setSessionCookie: setSessionCookieMock }));
      jest.mock('next/navigation', () => ({ useRouter: useRouterMock }));
      jest.mock('../../services/axios', () => ({ loginUser: loginUserMock }));

      // Import the component after mocking the dependencies
      const LoginUser = require('../../components/LoginUser/LoginUser').default;

      // Initialize the component
      const wrapper = shallow(<LoginUser />);

      // Set input values
      wrapper.find('Input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
      wrapper.find('Input[type="password"]').simulate('change', { target: { value: 'password' } });

      // Submit the form
      wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

      // Assertions
      expect(loginUserMock).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
      expect(setSessionCookieMock).toHaveBeenCalledWith('token');
      expect(useRouterMock().push).toHaveBeenCalledWith('/admin/dashboard');
    });

    // Server responds with non-200 status code
    it('should display error message when server responds with non-200 status code', async () => {
      // Mock dependencies
      const setSessionCookieMock = jest.fn();
      const useRouterMock = jest.fn().mockReturnValue({ push: jest.fn() });
      const loginUserMock = jest.fn().mockRejectedValue({ response: { data: 'Invalid email or password' } });

      // Replace dependencies with mocks
      jest.mock('../../utils/sessionsUtils', () => ({ setSessionCookie: setSessionCookieMock }));
      jest.mock('next/navigation', () => ({ useRouter: useRouterMock }));
      jest.mock('../../services/axios', () => ({ loginUser: loginUserMock }));

      // Import the component after mocking the dependencies
      const LoginUser = require('../../components/LoginUser/LoginUser').default;

      // Initialize the component
      const wrapper = shallow(<LoginUser />);

      // Set input values
      wrapper.find('Input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
      wrapper.find('Input[type="password"]').simulate('change', { target: { value: 'password' } });

      // Submit the form
      await wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

      // Assertions
      expect(loginUserMock).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
      expect(setSessionCookieMock).not.toHaveBeenCalled();
      expect(useRouterMock().push).not.toHaveBeenCalled();
      expect(wrapper.find('.text-red-500').text()).toBe('Invalid email or password');
    });
});
