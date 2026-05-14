import { Card, Icon, Divider } from 'animal-island-ui';
import { profile } from '../data/profile';

export default function AboutSection() {
  return (
    <section id="about" className="section section-anchor">
      <div className="section-content">
        <Card type="title">🏠 关于我</Card>

        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <Card color="default">
            <h3 style={{ marginBottom: 12, color: '#725d42', fontFamily: 'Nunito, sans-serif' }}>
              关于这座岛
            </h3>
            <p style={{ lineHeight: 1.8, color: '#725d42' }}>
              {profile.bio}
            </p>
            <Divider type="line-brown" style={{ margin: '16px 0' }} />
            <p style={{ lineHeight: 1.8, color: '#725d42' }}>
              这里记录了我在技术世界中的探索足迹，从前端到后端，从设计到部署。
              每一个项目都是一段故事，每一行代码都是一次成长。
            </p>
          </Card>

          <Card color="default">
            <h3 style={{ marginBottom: 12, color: '#725d42', fontFamily: 'Nunito, sans-serif' }}>
              技能树 🌳
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {profile.skills.map(skill => (
                <div
                  key={skill.name}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 6,
                    padding: '12px 8px',
                    background: 'rgba(138, 198, 138, 0.15)',
                    borderRadius: 12,
                  }}
                >
                  <Icon name={skill.icon} size={28} bounce />
                  <span style={{ fontSize: 13, color: '#725d42', fontWeight: 600 }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
