import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BreadcrumbJourney } from "./breadcrumb-journey";
import type { Journey } from "@/types/journey";

type TableListProps = {
  journeys: Journey[];
};

export default function TableList({ journeys }: TableListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full">
          <TableHead className="table-cell font-bold">Jornada</TableHead>

          <TableHead className="text-right font-bold">Touchpoint</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {journeys.map((journey) => (
          <TableRow key={journey.sessionId}>
            <TableCell>
              <BreadcrumbJourney journeys={[journey]} />
            </TableCell>

            <TableCell className="text-right">{journey.touchPoints}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
