import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "cq1qh02t",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});