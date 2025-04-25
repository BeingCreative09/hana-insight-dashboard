
import { BackupInfo } from "@/data/mockData";
import MetricCard from "./MetricCard";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface BackupInfoCardProps {
  data: BackupInfo[];
}

const BackupInfoCard = ({ data }: BackupInfoCardProps) => {
  // Get latest backup
  const latestBackup = data.length > 0 ? data[0] : null;

  return (
    <MetricCard title="Latest Backup Information" icon={<Clock />}>
      {latestBackup ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge 
              variant={latestBackup.status === 'successful' ? 'default' : 
                      latestBackup.status === 'running' ? 'outline' : 'destructive'}
              className="capitalize"
            >
              {latestBackup.status}
            </Badge>
            <span className="text-xs text-muted-foreground">
              ID: {latestBackup.backupId}
            </span>
          </div>
          
          <div>
            <h4 className="text-sm font-medium">{latestBackup.backupName}</h4>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="text-xs">
                <p className="text-muted-foreground">Start Time</p>
                <p className="font-medium">{format(new Date(latestBackup.startTime), 'MMM dd, yyyy HH:mm')}</p>
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground">End Time</p>
                <p className="font-medium">
                  {latestBackup.endTime 
                    ? format(new Date(latestBackup.endTime), 'MMM dd, yyyy HH:mm')
                    : 'In progress'}
                </p>
              </div>
            </div>
          </div>
          
          {latestBackup.status === 'successful' && (
            <div className="grid grid-cols-2 gap-2 pt-2 border-t">
              <div className="text-xs">
                <p className="text-muted-foreground">Size</p>
                <p className="font-medium">{latestBackup.sizeGB.toFixed(2)} GB</p>
              </div>
              <div className="text-xs">
                <p className="text-muted-foreground">Throughput</p>
                <p className="font-medium">{latestBackup.throughputGBHr.toFixed(2)} GB/hr</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-4 text-muted-foreground">
          No backup information available
        </div>
      )}
    </MetricCard>
  );
};

export default BackupInfoCard;
