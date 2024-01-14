import HomePage from "@/components/pages/HomePage";
import { getTeamsByUserId } from "@/fetcher/teams";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieJar = cookies();
  const { value } = cookieJar.get("id");
  const teams = await getTeamsByUserId(value);
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <HomePage teams={teams.data} />
    </main>
  );
}
