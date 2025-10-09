export interface Member {
  id: string;
  name: string;
  role: string;
  picture: string;
  bio?: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
