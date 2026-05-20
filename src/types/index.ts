export type Platform = "youtube" | "instagram";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  platform: Platform;
  thumbnail: string;
  videoUrl: string;
}