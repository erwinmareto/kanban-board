import CardPage from "@/components/pages/CardPage";
import { getCardsWithTasksByTeamName } from "@/fetcher/cards";

const Cards = async ({ params }) => {
  const { team } = params;
  const { data } = await getCardsWithTasksByTeamName(team);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <CardPage cards={data} teamId={data[0]?.teamId} />
    </main>
  );
};

export default Cards;
