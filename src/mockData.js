// src/mockData.js

// Simulate the overall environmental data of the cowshed
export const environmentData = {
  temperature: 28.5, // Celsius
  humidity: 75,      // percentage
  airQuality: 92     // Air Quality Index (higher, better)
};

// Simulate data for each cow
export const cattleData = [
  {
    id: 'A001',
    status: 'healthy',
    bodyTemperature: 38.5,
    activityLevel: 65, // Activity index
    feedingTime: 4.5   // Hour/day
  },
  {
    id: 'A002',
    status: 'observation',
    bodyTemperature: 39.8, // High body temperature
    activityLevel: 40,
    feedingTime: 2.1
  },
  {
    id: 'B003',
    status: 'healthy',
    bodyTemperature: 38.6,
    activityLevel: 88, // Abnormal high activity, possibly during estrus period
    feedingTime: 5.0
  },
  {
    id: 'C004',
    status: 'healthy',
    bodyTemperature: 38.4,
    activityLevel: 70,
    feedingTime: 4.8
  }
];
// src/mockData.js
// ... existing data ...

// Simulate the activity data of each cow over the past 7 days/hours
export const cattleActivityHistory = {
  'A001': [
    { name: 'T-6', activity: 60 }, { name: 'T-5', activity: 62 },
    { name: 'T-4', activity: 58 }, { name: 'T-3', activity: 65 },
    { name: 'T-2', activity: 70 }, { name: 'T-1', activity: 68 },
    { name: 'Now', activity: 65 },
  ],
  'A002': [
    { name: 'T-6', activity: 45 }, { name: 'T-5', activity: 42 },
    { name: 'T-4', activity: 38 }, { name: 'T-3', activity: 35 },
    { name: 'T-2', activity: 41 }, { name: 'T-1', activity: 39 },
    { name: 'Now', activity: 40 },
  ],
  'B003': [
    { name: 'T-6', activity: 70 }, { name: 'T-5', activity: 75 },
    { name: 'T-4', activity: 80 }, { name: 'T-3', activity: 82 },
    { name: 'T-2', activity: 90 }, { name: 'T-1', activity: 85 },
    { name: 'Now', activity: 88 },
  ],
  'C004': [
    { name: 'T-6', activity: 72 }, { name: 'T-5', activity: 68 },
    { name: 'T-4', activity: 75 }, { name: 'T-3', activity: 73 },
    { name: 'T-2', activity: 70 }, { name: 'T-1', activity: 71 },
    { name: 'Now', activity: 70 },
  ],
};

