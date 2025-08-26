import { Form, useActionData, useNavigation } from '@remix-run/react';

export function LoginForm() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method="post" className="auth-form">
      <h2>Login</h2>
      
      {actionData?.error && (
        <div className="error-message">{actionData.error}</div>
      )}

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>

      <p className="auth-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </Form>
  );
}