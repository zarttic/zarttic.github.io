export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '用 React 构建动森风格的 UI',
    excerpt: '探索如何使用 animal-island-ui 组件库将动森的温暖氛围带入 Web 界面。从组件选型到配色方案，分享完整的开发心得。',
    date: '2026-05-10',
    tags: ['React', 'UI Design', 'TypeScript'],
  },
  {
    id: '2',
    title: 'Go 语言并发编程实践',
    excerpt: '深入理解 Go 的 Goroutine 和 Channel，通过实际案例展示如何构建高并发服务。',
    date: '2026-04-22',
    tags: ['Go', 'Concurrency', 'Backend'],
  },
  {
    id: '3',
    title: '我的开源之旅',
    excerpt: '从第一个 PR 到维护自己的开源项目，记录这段充满挑战与收获的旅程。',
    date: '2026-03-15',
    tags: ['Open Source', 'Career'],
  },
];
