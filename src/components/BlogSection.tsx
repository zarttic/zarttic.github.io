import { Card, Collapse, Divider, Typewriter } from 'animal-island-ui';
import { blogPosts } from '../data/blog';

export default function BlogSection() {
  return (
    <section id="blog" className="section section-anchor">
      <div className="section-content">
        <Card type="title">📖 博物馆</Card>

        <div style={{ marginTop: 24 }}>
          <Card color="app-yellow">
            <Typewriter speed={50}>
              <p style={{ color: '#725d42', fontSize: 16 }}>
                欢迎来到我的思想博物馆。这里收藏了我在技术旅途中的思考与感悟。
              </p>
            </Typewriter>
          </Card>
        </div>

        <Divider type="wave-yellow" style={{ marginTop: 24 }} />

        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {blogPosts.map(post => (
            <Collapse
              key={post.id}
              question={
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <span style={{ fontWeight: 600, color: '#725d42' }}>{post.title}</span>
                  <span style={{ fontSize: 13, color: '#9a835a' }}>{post.date}</span>
                </div>
              }
              answer={
                <div>
                  <p style={{ lineHeight: 1.8, color: '#725d42', marginBottom: 12 }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        style={{
                          padding: '2px 10px',
                          background: 'rgba(247, 205, 103, 0.3)',
                          borderRadius: 12,
                          fontSize: 12,
                          color: '#725d42',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
