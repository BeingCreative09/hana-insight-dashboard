
import { DiskUsage } from "@/data/mockData";
import MetricCard from "./MetricCard";
import { Database } from "lucide-react";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  TooltipProps,
} from "recharts";

interface DiskUtilizationChartProps {
  data: DiskUsage;
}

type CustomTooltipProps = TooltipProps<number, string> & {
  active?: boolean;
  payload?: { value: number; name: string }[];
  label?: string;
};

const DiskUtilizationChart = ({ data }: DiskUtilizationChartProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const diskUsagePercentage = (data.usedSize / data.totalSize) * 100;
  const freeSpace = data.totalSize - data.usedSize;
  
  const chartData = [
    { name: "Database", value: data.databaseResidentSize },
    { name: "Other", value: data.usedSize - data.databaseResidentSize },
    { name: "Free", value: freeSpace },
  ];

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded shadow-lg p-2 text-xs">
          <p className="font-semibold">{label}</p>
          <p>{`${payload[0].value.toFixed(2)} GB`}</p>
          <p className="text-muted-foreground">{`(${((payload[0].value / data.totalSize) * 100).toFixed(1)}%)`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <MetricCard title="Disk Utilization" icon={<Database />}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">{diskUsagePercentage.toFixed(1)}%</p>
            <p className="text-xs text-muted-foreground">Used Space</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{data.usedSize.toFixed(1)} GB</p>
            <p className="text-xs text-muted-foreground">of {data.totalSize.toFixed(1)} GB</p>
          </div>
        </div>
        
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={55} />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                animationDuration={1000}
                animationBegin={isVisible ? 0 : 500}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={
                      index === 0 ? "hsl(var(--primary))" : 
                      index === 1 ? "hsl(var(--secondary))" : 
                      "hsl(var(--muted))"
                    } 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </MetricCard>
  );
};

export default DiskUtilizationChart;
