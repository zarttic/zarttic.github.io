import { useState } from 'react';
import { Card, Tabs, Modal, Button, Icon } from 'animal-island-ui';
import { projects, projectCategories, type Project } from '../data/projects';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const tabItems = projectCategories.map(cat => ({
    key: cat.key,
    label: cat.label,
    children: (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {filtered.map(project => (
          <Card
            key={project.id}
            color="app-green"
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedProject(project)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <Icon name={project.icon} size={32} bounce />
              <h3 style={{ color: '#fff', fontFamily: 'Nunito, sans-serif', fontSize: 18 }}>{project.name}</h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: 12 }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {project.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    padding: '2px 10px',
                    background: 'rgba(255,255,255,0.25)',
                    borderRadius: 12,
                    fontSize: 12,
                    color: '#fff',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    ),
  }));

  return (
    <section id="projects" className="section section-anchor">
      <div className="section-content">
        <Card type="title">🎒 我的背包</Card>

        <div style={{ marginTop: 24 }}>
          <Tabs items={tabItems} onChange={setActiveCategory} />
        </div>

        <Modal
          open={!!selectedProject}
          title={selectedProject?.name}
          onClose={() => setSelectedProject(null)}
          onOk={() => {
            if (selectedProject?.link) window.open(selectedProject.link, '_blank');
            setSelectedProject(null);
          }}
          footer={
            <>
              <Button onClick={() => setSelectedProject(null)}>关闭</Button>
              <Button
                type="primary"
                onClick={() => {
                  if (selectedProject?.link) window.open(selectedProject.link, '_blank');
                  setSelectedProject(null);
                }}
              >
                查看项目
              </Button>
            </>
          }
        >
          {selectedProject && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <Icon name={selectedProject.icon} size={40} />
                <div>
                  <h3 style={{ color: '#725d42', fontFamily: 'Nunito, sans-serif' }}>{selectedProject.name}</h3>
                  <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                    {selectedProject.tags.map(tag => (
                      <span key={tag} style={{ fontSize: 12, color: '#9a835a' }}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p style={{ lineHeight: 1.8, color: '#725d42' }}>{selectedProject.description}</p>
              <p style={{ marginTop: 12, color: '#9a835a', fontSize: 14 }}>
                链接: {selectedProject.link}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
}
