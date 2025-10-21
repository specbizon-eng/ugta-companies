export const metadata = { title: "Юридична — U-GTA" };

export default function Page() {
  return (
    <div className="container py-10">
      <h2 className="text-2xl font-bold mb-4">Юридична</h2>
      <ul className="list-disc pl-6 space-y-2 text-foreground/70">
        <li>Заявка приватного адвоката + договір</li>
        <li>Анкета до основного списку адвокатів</li>
        <li>Генерація простого посвідчення (дата ліцензії)</li>
      </ul>
    </div>
  );
}
