import TableList from "@/components/table-list";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${apiUrl}/journeys`);
  const journeys = await data.json();

  return (
    <main className="container mx-auto p-10">
      <Card>
        <CardHeader className="px-7">
          <CardTitle className="text-4xl font-bold">
            Jornadas de Conversão
          </CardTitle>
          <CardDescription>Consulte as jornadas do seu negócio</CardDescription>
        </CardHeader>

        <CardContent>
          <TableList journeys={journeys} />
        </CardContent>
      </Card>
    </main>
  );
}
