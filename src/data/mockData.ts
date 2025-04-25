
export interface SystemInfo {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
}

export interface MemoryUsage {
  host: string;
  usedMemory: number;
  totalMemory: number;
  peakUsedMemory: number;
  allocationLimit: number;
}

export interface DiskUsage {
  totalSize: number;
  usedSize: number;
  databaseResidentSize: number;
}

export interface TableSize {
  schema: string;
  tableName: string;
  memorySize: number;
  deltaSize: number;
  records: number;
}

export interface BackupInfo {
  backupId: string;
  backupName: string;
  startTime: string;
  endTime: string;
  status: 'successful' | 'failed' | 'running';
  sizeGB: number;
  throughputGBHr: number;
}

// Mock Systems
export const systems: SystemInfo[] = [
  { id: 'sys1', name: 'HANA Production 1', status: 'healthy' },
  { id: 'sys2', name: 'HANA Production 2', status: 'warning' },
  { id: 'sys3', name: 'HANA Production 3', status: 'healthy' },
  { id: 'sys4', name: 'HANA Production 4', status: 'critical' },
];

// Mock Memory Usage Data
export const memoryUsageData: Record<string, MemoryUsage[]> = {
  'sys1': [
    { host: 'host1', usedMemory: 256.45, totalMemory: 512, peakUsedMemory: 384.2, allocationLimit: 496 },
    { host: 'host2', usedMemory: 128.32, totalMemory: 256, peakUsedMemory: 224.1, allocationLimit: 240 }
  ],
  'sys2': [
    { host: 'host1', usedMemory: 456.78, totalMemory: 512, peakUsedMemory: 489.3, allocationLimit: 496 }
  ],
  'sys3': [
    { host: 'host1', usedMemory: 178.54, totalMemory: 512, peakUsedMemory: 324.9, allocationLimit: 496 },
    { host: 'host2', usedMemory: 156.21, totalMemory: 256, peakUsedMemory: 198.7, allocationLimit: 240 }
  ],
  'sys4': [
    { host: 'host1', usedMemory: 498.76, totalMemory: 512, peakUsedMemory: 509.4, allocationLimit: 496 }
  ],
};

// Mock Disk Usage Data
export const diskUsageData: Record<string, DiskUsage> = {
  'sys1': { totalSize: 2048, usedSize: 1253.45, databaseResidentSize: 1024.56 },
  'sys2': { totalSize: 2048, usedSize: 1856.78, databaseResidentSize: 1756.43 },
  'sys3': { totalSize: 1024, usedSize: 568.34, databaseResidentSize: 512.87 },
  'sys4': { totalSize: 2048, usedSize: 1998.12, databaseResidentSize: 1876.54 },
};

// Mock Top Tables by Size
export const topTablesData: Record<string, TableSize[]> = {
  'sys1': [
    { schema: 'SAPSR3', tableName: 'VBAK', memorySize: 145.32, deltaSize: 2.45, records: 5234567 },
    { schema: 'SAPSR3', tableName: 'VBAP', memorySize: 98.76, deltaSize: 1.98, records: 8765432 },
    { schema: 'SAPSR3', tableName: 'MARA', memorySize: 76.54, deltaSize: 1.23, records: 3456789 },
    { schema: 'SAPSR3', tableName: 'MARC', memorySize: 65.43, deltaSize: 0.98, records: 2345678 },
    { schema: 'SAPSR3', tableName: 'EKPO', memorySize: 54.32, deltaSize: 0.87, records: 1987654 }
  ],
  'sys2': [
    { schema: 'SAPSR3', tableName: 'VBAK', memorySize: 187.65, deltaSize: 3.45, records: 6543210 },
    { schema: 'SAPSR3', tableName: 'VBAP', memorySize: 156.78, deltaSize: 2.34, records: 9876543 },
    { schema: 'SAPSR3', tableName: 'MARA', memorySize: 132.45, deltaSize: 1.98, records: 4567890 },
    { schema: 'SAPSR3', tableName: 'MARC', memorySize: 98.76, deltaSize: 1.45, records: 3456789 },
    { schema: 'SAPSR3', tableName: 'EKPO', memorySize: 87.65, deltaSize: 1.23, records: 2765432 }
  ],
  'sys3': [
    { schema: 'SAPSR3', tableName: 'VBAK', memorySize: 87.65, deltaSize: 1.54, records: 2345678 },
    { schema: 'SAPSR3', tableName: 'VBAP', memorySize: 76.54, deltaSize: 1.32, records: 3456789 },
    { schema: 'SAPSR3', tableName: 'MARA', memorySize: 65.43, deltaSize: 1.12, records: 1234567 },
    { schema: 'SAPSR3', tableName: 'MARC', memorySize: 54.32, deltaSize: 0.98, records: 876543 },
    { schema: 'SAPSR3', tableName: 'EKPO', memorySize: 43.21, deltaSize: 0.76, records: 765432 }
  ],
  'sys4': [
    { schema: 'SAPSR3', tableName: 'VBAK', memorySize: 265.43, deltaSize: 4.32, records: 8765432 },
    { schema: 'SAPSR3', tableName: 'VBAP', memorySize: 234.56, deltaSize: 3.87, records: 12345678 },
    { schema: 'SAPSR3', tableName: 'MARA', memorySize: 198.76, deltaSize: 3.54, records: 7654321 },
    { schema: 'SAPSR3', tableName: 'MARC', memorySize: 176.54, deltaSize: 2.98, records: 6543210 },
    { schema: 'SAPSR3', tableName: 'EKPO', memorySize: 154.32, deltaSize: 2.76, records: 5432109 }
  ],
};

// Mock Backup Information
export const backupInfoData: Record<string, BackupInfo[]> = {
  'sys1': [
    { backupId: 'B1001', backupName: 'COMPLETE_DATA_20230401', startTime: '2023-04-01T01:00:00', endTime: '2023-04-01T03:30:00', status: 'successful', sizeGB: 356.78, throughputGBHr: 142.71 },
    { backupId: 'B1002', backupName: 'COMPLETE_DATA_20230402', startTime: '2023-04-02T01:00:00', endTime: '2023-04-02T03:45:00', status: 'successful', sizeGB: 358.45, throughputGBHr: 138.64 },
    { backupId: 'B1003', backupName: 'COMPLETE_DATA_20230403', startTime: '2023-04-03T01:00:00', endTime: '2023-04-03T03:15:00', status: 'successful', sizeGB: 354.23, throughputGBHr: 147.59 },
  ],
  'sys2': [
    { backupId: 'B2001', backupName: 'COMPLETE_DATA_20230401', startTime: '2023-04-01T02:00:00', endTime: '2023-04-01T05:30:00', status: 'successful', sizeGB: 576.34, throughputGBHr: 164.67 },
    { backupId: 'B2002', backupName: 'COMPLETE_DATA_20230402', startTime: '2023-04-02T02:00:00', endTime: '2023-04-02T06:15:00', status: 'failed', sizeGB: 0, throughputGBHr: 0 },
    { backupId: 'B2003', backupName: 'COMPLETE_DATA_20230403', startTime: '2023-04-03T02:00:00', endTime: '2023-04-03T05:45:00', status: 'successful', sizeGB: 578.56, throughputGBHr: 154.28 },
  ],
  'sys3': [
    { backupId: 'B3001', backupName: 'COMPLETE_DATA_20230401', startTime: '2023-04-01T00:00:00', endTime: '2023-04-01T01:45:00', status: 'successful', sizeGB: 243.65, throughputGBHr: 139.23 },
    { backupId: 'B3002', backupName: 'COMPLETE_DATA_20230402', startTime: '2023-04-02T00:00:00', endTime: '2023-04-02T01:30:00', status: 'successful', sizeGB: 245.78, throughputGBHr: 163.85 },
    { backupId: 'B3003', backupName: 'COMPLETE_DATA_20230403', startTime: '2023-04-03T00:00:00', endTime: '', status: 'running', sizeGB: 0, throughputGBHr: 0 },
  ],
  'sys4': [
    { backupId: 'B4001', backupName: 'COMPLETE_DATA_20230401', startTime: '2023-04-01T03:00:00', endTime: '2023-04-01T06:45:00', status: 'successful', sizeGB: 654.32, throughputGBHr: 174.49 },
    { backupId: 'B4002', backupName: 'COMPLETE_DATA_20230402', startTime: '2023-04-02T03:00:00', endTime: '2023-04-02T06:30:00', status: 'failed', sizeGB: 0, throughputGBHr: 0 },
    { backupId: 'B4003', backupName: 'COMPLETE_DATA_20230403', startTime: '2023-04-03T03:00:00', endTime: '', status: 'running', sizeGB: 0, throughputGBHr: 0 },
  ],
};

export function getSystemHealthSummary(): {healthy: number, warning: number, critical: number} {
  return systems.reduce((acc, system) => {
    acc[system.status] += 1;
    return acc;
  }, {healthy: 0, warning: 0, critical: 0});
}

export function getMemoryUtilizationPercentage(systemId: string): number {
  if (!memoryUsageData[systemId]?.length) return 0;
  
  const totalUsed = memoryUsageData[systemId].reduce((sum, item) => sum + item.usedMemory, 0);
  const totalCapacity = memoryUsageData[systemId].reduce((sum, item) => sum + item.totalMemory, 0);
  
  return (totalUsed / totalCapacity) * 100;
}

export function getDiskUtilizationPercentage(systemId: string): number {
  if (!diskUsageData[systemId]) return 0;
  
  return (diskUsageData[systemId].usedSize / diskUsageData[systemId].totalSize) * 100;
}

export function getLatestBackupStatus(systemId: string): 'successful' | 'failed' | 'running' | 'unknown' {
  if (!backupInfoData[systemId]?.length) return 'unknown';
  
  return backupInfoData[systemId][0].status;
}
