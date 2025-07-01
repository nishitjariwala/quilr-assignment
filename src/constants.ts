// constants.ts

export const fields = {
  Status: ["Open", "In Progress", "Closed"],
  Priority: ["Low", "Medium", "High"],
  "Assigned To": ["User A", "User B", "User C"],
  Category: ["Bug", "Feature", "Task"]
} as const;

export const operators = [
  "equals",
  "not equals",
  "contains",
  "does not contain"
] as const;

export const logicOptions = ["AND", "OR"] as const;