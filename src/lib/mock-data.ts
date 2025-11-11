// Mock data storage (in production, replace with real database)
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ContentPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

// Mock team members data
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    position: "CEO & Founder",
    bio: "Experienced leader in smart city technology with over 10 years in urban development.",
    image: "/images/team/john-doe.jpg",
    order: 1,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "2",
    name: "Jane Smith",
    position: "CTO",
    bio: "Technology expert specializing in IoT and smart infrastructure solutions.",
    image: "/images/team/jane-smith.jpg",
    order: 2,
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
];

// Mock content pages data
export const contentPages: ContentPage[] = [
  {
    id: "1",
    title: "About Smart City",
    slug: "about-smart-city",
    content: "Smart City is a comprehensive platform for urban development and technology integration.",
    isPublished: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "2",
    title: "Our Mission",
    slug: "our-mission",
    content: "Our mission is to create sustainable and efficient urban environments through technology.",
    isPublished: true,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z"
  }
];

// Helper functions for mock data operations
export const mockTeamOperations = {
  findMany: (options?: { where?: { isActive?: boolean }, orderBy?: { order?: string } }) => {
    let result = [...teamMembers];
    if (options?.where?.isActive !== undefined) {
      result = result.filter(member => member.isActive === options.where!.isActive);
    }
    if (options?.orderBy?.order === "asc") {
      result.sort((a, b) => a.order - b.order);
    }
    return Promise.resolve(result);
  },

  findUnique: (options: { where: { id: string } }) => {
    const member = teamMembers.find(m => m.id === options.where.id);
    return Promise.resolve(member || null);
  },

  create: (options: { data: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'> }) => {
    const newMember: TeamMember = {
      ...options.data,
      id: `team-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    teamMembers.push(newMember);
    return Promise.resolve(newMember);
  },

  update: (options: { where: { id: string }, data: Partial<TeamMember> }) => {
    const index = teamMembers.findIndex(m => m.id === options.where.id);
    if (index === -1) return Promise.resolve(null);

    teamMembers[index] = {
      ...teamMembers[index],
      ...options.data,
      updatedAt: new Date().toISOString()
    };
    return Promise.resolve(teamMembers[index]);
  },

  delete: (options: { where: { id: string } }) => {
    const index = teamMembers.findIndex(m => m.id === options.where.id);
    if (index === -1) return Promise.resolve(null);

    const deleted = teamMembers.splice(index, 1)[0];
    return Promise.resolve(deleted);
  }
};

export const mockContentOperations = {
  findMany: (options?: { where?: { isPublished?: boolean } }) => {
    let result = [...contentPages];
    if (options?.where?.isPublished !== undefined) {
      result = result.filter(page => page.isPublished === options.where!.isPublished);
    }
    return Promise.resolve(result);
  },

  findUnique: (options: { where: { id: string } }) => {
    const page = contentPages.find(p => p.id === options.where.id);
    return Promise.resolve(page || null);
  },

  create: (options: { data: Omit<ContentPage, 'id' | 'createdAt' | 'updatedAt'> }) => {
    const newPage: ContentPage = {
      ...options.data,
      id: `content-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    contentPages.push(newPage);
    return Promise.resolve(newPage);
  },

  update: (options: { where: { id: string }, data: Partial<ContentPage> }) => {
    const index = contentPages.findIndex(p => p.id === options.where.id);
    if (index === -1) return Promise.resolve(null);

    contentPages[index] = {
      ...contentPages[index],
      ...options.data,
      updatedAt: new Date().toISOString()
    };
    return Promise.resolve(contentPages[index]);
  },

  delete: (options: { where: { id: string } }) => {
    const index = contentPages.findIndex(p => p.id === options.where.id);
    if (index === -1) return Promise.resolve(null);

    const deleted = contentPages.splice(index, 1)[0];
    return Promise.resolve(deleted);
  }
};