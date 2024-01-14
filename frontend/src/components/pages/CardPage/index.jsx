import Card from "@/components/parts/Card";
import EmptyCard from "@/components/parts/EmptyCard";

const CardPage = ({ cards, teamId }) => {
  const cardAmount = cards.length;
  const columns = [[], [], [], []];

  cards.forEach((card, i) => {
    columns[i % 4].push(card);
  });
  return (
    <section className="z-10 grid grid-cols-4 gap-5 w-full items-start text-sm">
      {columns.map((column, i) => {
        return (
          <div className="flex flex-col gap-5" key={i}>
            {column.map((card) => (
              <Card
                key={card?.id}
                cardId={card?.id}
                title={card?.title}
                task={card?.Task}
                teamId={teamId}
              />
            ))}
            {cardAmount % 4 === i && <EmptyCard teamId={teamId} />}
          </div>
        );
      })}
    </section>
  );
};

export default CardPage;
