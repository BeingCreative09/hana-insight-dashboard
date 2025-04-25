
import { Bell, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSystemHealthSummary } from "@/data/mockData";

const DashboardHeader = () => {
  const health = getSystemHealthSummary();
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-primary">HANA 2.0 Monitoring Dashboard</h1>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{currentDate}</span>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
        <div className="flex gap-2">
          <div className="bg-success/20 rounded-md px-3 py-1 text-sm flex items-center">
            <span className="h-2 w-2 rounded-full bg-success mr-2 animate-pulse-gentle"></span>
            <span className="text-success font-medium">{health.healthy} Healthy</span>
          </div>
          <div className="bg-warning/20 rounded-md px-3 py-1 text-sm flex items-center">
            <span className="h-2 w-2 rounded-full bg-warning mr-2 animate-pulse-gentle"></span>
            <span className="text-warning font-medium">{health.warning} Warning</span>
          </div>
          <div className="bg-destructive/20 rounded-md px-3 py-1 text-sm flex items-center">
            <span className="h-2 w-2 rounded-full bg-destructive mr-2 animate-pulse-gentle"></span>
            <span className="text-destructive font-medium">{health.critical} Critical</span>
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <span className="ml-2">Alerts</span>
          <span className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
