
import { useState } from "react";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import SystemSelector from "@/components/Dashboard/SystemSelector";
import MemoryUsageChart from "@/components/Dashboard/MemoryUsageChart";
import DiskUtilizationChart from "@/components/Dashboard/DiskUtilizationChart";
import TopTablesTable from "@/components/Dashboard/TopTablesTable";
import BackupInfoCard from "@/components/Dashboard/BackupInfoCard";
import { memoryUsageData, diskUsageData, topTablesData, backupInfoData } from "@/data/mockData";

const Index = () => {
  const [selectedSystem, setSelectedSystem] = useState("sys1");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
        
        <div className="mb-6">
          <SystemSelector 
            selectedSystem={selectedSystem} 
            onSystemChange={setSelectedSystem}
          />
        </div>
        
        <div className="dashboard-grid mb-6">
          <MemoryUsageChart data={memoryUsageData[selectedSystem] || []} />
          <DiskUtilizationChart data={diskUsageData[selectedSystem] || {
            totalSize: 0,
            usedSize: 0,
            databaseResidentSize: 0
          }} />
          <BackupInfoCard data={backupInfoData[selectedSystem] || []} />
        </div>
        
        <TopTablesTable data={topTablesData[selectedSystem] || []} />
      </div>
    </div>
  );
};

export default Index;
