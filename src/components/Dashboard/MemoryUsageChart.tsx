
import { MemoryUsage } from "@/data/mockData";
import MetricCard from "./MetricCard";
import { HardDrive } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

interface MemoryUsageChartProps {
  data: MemoryUsage[];
}

const MemoryUsageChart = ({ data }: MemoryUsageChartProps) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  // Calculate aggregate values
  const totalMemorySum = data.reduce((sum, host) => sum + host.totalMemory, 0);
  const usedMemorySum = data.reduce((sum, host) => sum + host.usedMemory, 0);
  const peakMemorySum = data.reduce((sum, host) => sum + host.peakUsedMemory, 0);
  
  const currentUsagePercentage = (usedMemorySum / totalMemorySum) * 100;
  const peakUsagePercentage = (peakMemorySum / totalMemorySum) * 100;

  return (
    <MetricCard title="Memory Usage" icon={<HardDrive />}>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Current Usage</span>
            <span>{currentUsagePercentage.toFixed(1)}%</span>
          </div>
          <Progress 
            value={showAnimation ? currentUsagePercentage : 0} 
            className="h-2 transition-all duration-1000" 
          />
        </div>
        
        <div>
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Peak Usage</span>
            <span>{peakUsagePercentage.toFixed(1)}%</span>
          </div>
          <Progress 
            value={showAnimation ? peakUsagePercentage : 0} 
            className="h-2 bg-muted transition-all duration-1000"
            indicatorClassName="bg-secondary"
          />
        </div>
        
        <div className="pt-2 border-t grid grid-cols-2 gap-2">
          {data.map((host, index) => (
            <div key={index} className="text-xs">
              <p className="font-medium">{host.host}</p>
              <p className="text-muted-foreground">
                {host.usedMemory.toFixed(1)} GB / {host.totalMemory.toFixed(1)} GB
              </p>
            </div>
          ))}
        </div>
      </div>
    </MetricCard>
  );
};

export default MemoryUsageChart;
