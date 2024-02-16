// user dashboard

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: sessionData } = useSession();

  return (
    <div>
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        {sessionData ? (
          <p className="text-lg">
            Welcome, {sessionData.user.name}! You are now logged in.
          </p>
        ) : (
          <p className="text-lg">Please sign in to access the dashboard.</p>
        )}
      </main>
    </div>
  );
}
