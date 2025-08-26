// app/routes/_index.tsx
import { redirect } from '@remix-run/node';

export async function loader() {
  return redirect('/login');
}

export default function Index() {
  return null;
}