// app/routes/ws.ts
import { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = () => {
  // Return empty response for WebSocket requests
  return new Response(null, { status: 200 });
};

export default function WebSocketRoute() {
  return null;
}