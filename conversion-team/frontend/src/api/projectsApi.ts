import { api } from "./http"; // Import shared HTTP client wrapper used by the rest of the app

export type Project = { // Define backend Project record type returned by /projects
  _id: string; // MongoDB id
  projectId: string; // required project id
  name: string; // required name
  description: string; // required description
  ownerUserId?: string; // optional owner user id
}; // End Project type

export type HardwareSet = { // Define a dashboard hardware row with inventory and per-user checkout state
  id: string; // Stable id for the hardware set (frontend-safe)
  label: string; // Display name for the hardware set
  availableQty: number; // Quantity available in inventory
  myCheckedOutQty: number; // Quantity checked out by the current user
}; // End HardwareSet type

export type ProjectDashboardItem = { // Define a dashboard project shape used by the Projects page UI
  id: string; // Stable id for UI and routing (frontend-safe)
  name: string; // Display name for the project card
  isMember: boolean; // Whether the current user has joined this project
  hardwareSets: HardwareSet[]; // Hardware sets available for this project
}; // End ProjectDashboardItem type

// projects api wrapper (existing backend endpoints)
export const projectsApi = { // Export existing projects API wrapper used elsewhere in the app
  list: (ownerUserId?: string) => // Fetch projects (optionally filter by ownerUserId)
    api.get<Project[]>("/projects", { // HTTP GET /projects
      params: ownerUserId ? { ownerUserId } : {}, // Include query param only if provided
    }), // End list
    
  create: (project: { // Create a new project payload
    projectId: string; // required
    name: string; // required
    description: string; // required
    ownerUserId?: string; // optional
  }) => api.post<Project>("/projects", project), // HTTP POST /projects with payload
}; // End projectsApi

const MOCK_DASHBOARD: ProjectDashboardItem[] = [ // Mock dashboard data used until backend endpoints exist
  { id: "p1", name: "Project Alpha", isMember: false, hardwareSets: [ { id: "h1", label: "Raspberry Pi 4", availableQty: 10, myCheckedOutQty: 0 }, { id: "h2", label: "Arduino Uno", availableQty: 6, myCheckedOutQty: 0 } ] }, // First mock project
  { id: "p2", name: "Project Beta", isMember: true, hardwareSets: [ { id: "h3", label: "ESP32 Dev Kit", availableQty: 4, myCheckedOutQty: 1 }, { id: "h4", label: "Jetson Nano", availableQty: 2, myCheckedOutQty: 0 } ] }, // Second mock project
]; // End mock dashboard list

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms)); // Provide small delay to simulate network latency for mocks

export const projectsDashboardApi = { // Export separate API wrapper for the Projects dashboard feature
  list: async (): Promise<ProjectDashboardItem[]> => { // List dashboard projects (mock now; fetch later)
    await sleep(120); // Simulate request delay
    return structuredClone(MOCK_DASHBOARD); // Return deep copy to prevent accidental mutation by UI code
  }, // End list

  join: async (projectId: string): Promise<void> => { // Join a project (mock now; backend later)
    await sleep(120); // Simulate request delay
    const p = MOCK_DASHBOARD.find((x) => x.id === projectId); // Find project in mock storage
    if (!p) throw new Error("Project not found"); // Fail fast if project id is invalid
    p.isMember = true; // Apply mock server-side membership update
  }, // End join

  leave: async (projectId: string): Promise<void> => { // Leave a project (mock now; backend later)
    await sleep(120); // Simulate request delay
    const p = MOCK_DASHBOARD.find((x) => x.id === projectId); // Find project in mock storage
    if (!p) throw new Error("Project not found"); // Fail fast if project id is invalid
    p.isMember = false; // Apply mock server-side membership update
  }, // End leave

  checkoutHardware: async (projectId: string, hardwareSetId: string, qty: number): Promise<void> => { // Checkout hardware (validate before calling this)
    await sleep(140); // Simulate request delay
    const p = MOCK_DASHBOARD.find((x) => x.id === projectId); // Find project in mock storage
    if (!p) throw new Error("Project not found"); // Fail fast if project id is invalid
    const hs = p.hardwareSets.find((x) => x.id === hardwareSetId); // Find hardware set in project
    if (!hs) throw new Error("Hardware set not found"); // Fail fast if hardware set id is invalid
    hs.availableQty = hs.availableQty - qty; // Decrease available inventory in mock storage
    hs.myCheckedOutQty = hs.myCheckedOutQty + qty; // Increase user's checked out qty in mock storage
  }, // End checkoutHardware

  checkinHardware: async (projectId: string, hardwareSetId: string, qty: number): Promise<void> => { // Checkin hardware (validate before calling this)
    await sleep(140); // Simulate request delay
    const p = MOCK_DASHBOARD.find((x) => x.id === projectId); // Find project in mock storage
    if (!p) throw new Error("Project not found"); // Fail fast if project id is invalid
    const hs = p.hardwareSets.find((x) => x.id === hardwareSetId); // Find hardware set in project
    if (!hs) throw new Error("Hardware set not found"); // Fail fast if hardware set id is invalid
    hs.availableQty = hs.availableQty + qty; // Increase available inventory in mock storage
    hs.myCheckedOutQty = hs.myCheckedOutQty - qty; // Decrease user's checked out qty in mock storage
  }, // End checkinHardware
}; // End projectsDashboardApi
