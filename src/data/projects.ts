export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  category: 'frontend' | 'backend' | 'other';
  link: string;
  icon: 'icon-design' | 'icon-diy' | 'icon-map' | 'icon-critterpedia' | 'icon-camera' | 'icon-helicopter' | 'icon-shopping' | 'icon-miles' | 'icon-chat' | 'icon-variant';
}

export const projects: Project[] = [
  {
    id: '1',
    name: '创意项目 A',
    description: '一个充满创意的项目，展示了前沿的技术栈和独特的设计理念。',
    tags: ['React', 'TypeScript', 'Vite'],
    category: 'frontend',
    link: 'https://github.com/zarttic/project-a',
    icon: 'icon-design',
  },
  {
    id: '2',
    name: '后端服务 B',
    description: '高性能的后端服务，支撑着数百万用户的日常使用。',
    tags: ['Go', 'gRPC', 'PostgreSQL'],
    category: 'backend',
    link: 'https://github.com/zarttic/project-b',
    icon: 'icon-diy',
  },
  {
    id: '3',
    name: '工具集 C',
    description: '提升开发效率的工具集合，包含 CLI 工具和 VS Code 插件。',
    tags: ['Node.js', 'CLI', 'Tooling'],
    category: 'other',
    link: 'https://github.com/zarttic/project-c',
    icon: 'icon-map',
  },
  {
    id: '4',
    name: '数据可视化 D',
    description: '交互式数据可视化平台，让数据讲故事。',
    tags: ['D3.js', 'React', 'WebSocket'],
    category: 'frontend',
    link: 'https://github.com/zarttic/project-d',
    icon: 'icon-camera',
  },
];

export const projectCategories = [
  { key: 'all', label: '全部' },
  { key: 'frontend', label: '前端' },
  { key: 'backend', label: '后端' },
  { key: 'other', label: '其他' },
];
