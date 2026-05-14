import { Footer, Icon } from 'animal-island-ui';
import { profile } from '../data/profile';

export default function IslandFooter() {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '32px 24px 16px' }}>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginBottom: 16 }}>
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
            <Icon name="icon-miles" size={28} bounce />
          </a>
          <a href={`mailto:${profile.social.email}`}>
            <Icon name="icon-chat" size={28} bounce />
          </a>
        </div>
        <p style={{ color: '#9a835a', fontSize: 14, fontFamily: 'Nunito, sans-serif' }}>
          © {new Date().getFullYear()} {profile.name}'s Island · 用 animal-island-ui 🏝️ 构建
        </p>
      </div>
      <Footer type="sea" />
    </div>
  );
}
