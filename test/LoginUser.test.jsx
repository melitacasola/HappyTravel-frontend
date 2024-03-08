
describe('LoginUser', () => {

  // User enters valid email and password, clicks Accept button, and is redirected to admin dashboard
  it('should redirect to admin dashboard when valid email and password are entered', () => {
    // Mock dependencies
    const setSessionCookieMock = jest.fn();
    const loginUserMock = jest.fn().mockResolvedValue({ status: 200, data: { access_token: 'token' } });
    const useRouterMock = jest.fn().mockReturnValue({ push: jest.fn() });

    // Replace dependencies with mocks
    jest.mock('../../utils/sessionsUtils', () => ({ setSessionCookie: setSessionCookieMock }));
    jest.mock('../../services/axios', () => ({ loginUser: loginUserMock }));
    jest.mock('next/navigation', () => ({ useRouter: useRouterMock }));

    // Import the component after mocking dependencies
    const LoginUser = require('../src/app/components/LoginUser/LoginUser').default;  

    // Invoke the function
    const wrapper = shallow(<LoginUser />);
    wrapper.find('Input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('Input[type="password"]').simulate('change', { target: { value: 'password' } });
    wrapper.find('Button[type="submit"]').simulate('click');

    // Assertions
    expect(loginUserMock).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
    expect(setSessionCookieMock).toHaveBeenCalledWith('token');
    expect(useRouterMock().push).toHaveBeenCalledWith('/admin/dashboard');
  });

  // loginUser function throws an error
  it('should display error message when loginUser function throws an error', async () => {
    // Mock dependencies
    const setSessionCookieMock = jest.fn();
    const loginUserMock = jest.fn().mockRejectedValue({ response: { data: 'Error message' } });
    const useRouterMock = jest.fn().mockReturnValue({ push: jest.fn() });

    // Replace dependencies with mocks
    jest.mock('../../utils/sessionsUtils', () => ({ setSessionCookie: setSessionCookieMock }));
    jest.mock('../../services/axios', () => ({ loginUser: loginUserMock }));
    jest.mock('next/navigation', () => ({ useRouter: useRouterMock }));

    // Import the component after mocking dependencies
    const LoginUser = require('../../components/LoginUser/LoginUser').default;

    // Invoke the function
    const wrapper = shallow(<LoginUser />);
    wrapper.find('Input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('Input[type="password"]').simulate('change', { target: { value: 'password' } });
    wrapper.find('Button[type="submit"]').simulate('click');

    // Wait for async code to complete
    await Promise.resolve();

    // Assertions
    expect(loginUserMock).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password' });
    expect(setSessionCookieMock).not.toHaveBeenCalled();
    expect(useRouterMock().push).not.toHaveBeenCalled();
    expect(wrapper.find('.text-red-500').text()).toBe('Failed to log in. Please try again later.');
  });
});
