import { Form, useActionData, useNavigation } from '@remix-run/react';

export function SignupForm() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method="post" className="auth-form">
      <h2>Sign Up</h2>
      
      {actionData?.error && (
        <div className="error-message">{actionData.error}</div>
      )}

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="Choose a username"
        />
      </div>

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
          placeholder="Choose a password (min 6 characters)"
          minLength={6}
        />
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating account...' : 'Sign Up'}
      </button>

      <p className="auth-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </Form>
  );
}