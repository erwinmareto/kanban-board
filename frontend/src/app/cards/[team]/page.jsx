import CardPage from "@/components/pages/CardPage";
import { getCardsWithTasksByTeamName } from "@/fetcher/cards";
import { getTeamsByTeamName } from "@/fetcher/teams";

const Cards = async ({ params }) => {
  const { team } = params;
  const { data: cards } = await getCardsWithTasksByTeamName(team);
  const { data: teamData } = await getTeamsByTeamName(team);
  return (
    <main className="flex min-h-screen flex-col p-5">
      <h1 className="text-3xl py-3 text-white">{teamData?.name}</h1>
      <CardPage cards={cards} teamId={teamData?.id} />
    </main>
  );
};

export default Cards;
