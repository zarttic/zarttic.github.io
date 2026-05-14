import { Typewriter, Button, Icon, Card } from 'animal-island-ui';
import { profile } from '../data/profile';

export default function HeroSection() {
  return (
    <section id="hero" className="section section-anchor" style={{ justifyContent: 'center' }}>
      <div className="section-content" style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: 24 }}>
          <span style={{ fontSize: 72, display: 'block', marginBottom: 16 }}>⛵</span>
          <h1
            style={{
              fontFamily: 'Nunito, sans-serif',
              fontSize: 'clamp(32px, 6vw, 56px)',
              fontWeight: 900,
              color: '#725d42',
              marginBottom: 8,
            }}
          >
            欢迎来到我的小岛
          </h1>
        </div>

        <Card color="app-blue" style={{ marginBottom: 24 }}>
          <Typewriter speed={70}>
            <p style={{ fontSize: 18, lineHeight: 1.8 }}>
              你好，我是 <strong>{profile.name}</strong> 👋
              <br />
              {profile.title}
              <br />
              {profile.bio}
            </p>
          </Typewriter>
        </Card>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            type="primary"
            size="large"
            icon={<Icon name="icon-camera" />}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            看看我的作品
          </Button>
          <Button
            type="default"
            size="large"
            icon={<Icon name="icon-chat" />}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            联系我
          </Button>
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: 16, justifyContent: 'center' }}>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Button type="text" icon={<Icon name="icon-miles" bounce />}>GitHub</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
