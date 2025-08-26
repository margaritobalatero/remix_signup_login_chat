// app/routes/signup.tsx
import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node';
import { SignupForm } from '~/components/SignupForm';
import { registerUser } from '~/services/auth.server';
import { commitSession, getSession } from '~/session.server';
import { connectToDatabase } from '~/services/db.server';

// ... rest of the code remains the same

export const loader: LoaderFunction = async ({ request }) => {
  await connectToDatabase();
  const session = await getSession(request.headers.get('Cookie'));
  
  if (session.has('token')) {
    return redirect('/chat');
  }
  
  return null;
};

export const action: ActionFunction = async ({ request }) => {
  await connectToDatabase();
  const formData = await request.formData();
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const result = await registerUser(username, email, password);

  if (!result.success) {
    return { error: result.error };
  }

  const session = await getSession(request.headers.get('Cookie'));
  session.set('token', result.token);
  session.set('userId', result.user?._id);
  session.set('username', result.user?.username);

  return redirect('/chat', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
};

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <SignupForm />
      </div>
    </div>
  );
}