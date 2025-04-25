
import { TableSize } from "@/data/mockData";
import MetricCard from "./MetricCard";
import { HardDriveDownload } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TopTablesTableProps {
  data: TableSize[];
}

const TopTablesTable = ({ data }: TopTablesTableProps) => {
  return (
    <MetricCard 
      title="Top 5 Tables by Size" 
      icon={<HardDriveDownload />}
      className="col-span-1 md:col-span-2"
    >
      <div className="relative overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[180px]">Table Name</TableHead>
              <TableHead className="w-[100px]">Schema</TableHead>
              <TableHead className="text-right">Memory (GB)</TableHead>
              <TableHead className="text-right">Delta (GB)</TableHead>
              <TableHead className="text-right">Records</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((table, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{table.tableName}</TableCell>
                <TableCell>{table.schema}</TableCell>
                <TableCell className="text-right">{table.memorySize.toFixed(2)}</TableCell>
                <TableCell className="text-right">{table.deltaSize.toFixed(2)}</TableCell>
                <TableCell className="text-right">{table.records.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </MetricCard>
  );
};

export default TopTablesTable;
