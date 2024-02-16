import CardPage from "@/components/pages/CardPage";
import { getCardsWithTasksByTeamName } from "@/fetcher/cards";
import { getTeamsByTeamName } from "@/fetcher/teams";

const Cards = async ({ params }) => {
  const { team } = params;
  const { data: cards } = await getCardsWithTasksByTeamName(team);
  const { data: teamData } = await getTeamsByTeamName(team);
  return (
    <main className="flex min-h-screen flex-col p-5">
      <CardPage cards={cards} teamId={teamData?.id} teamName={teamData?.name} />
    </main>
  );
};

export default Cards;
