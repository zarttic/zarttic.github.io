import { useState, useEffect } from 'react';
import { Button, Time } from 'animal-island-ui';

const navItems = [
  { id: 'hero', label: '🏝️ 码头' },
  { id: 'about', label: '🏠 关于' },
  { id: 'projects', label: '🎒 项目' },
  { id: 'blog', label: '📖 博客' },
  { id: 'contact', label: '📬 联系' },
];

export default function IslandNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        return { id: item.id, top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const closest = sections.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 24px',
        background: scrolled ? 'rgba(247, 243, 223, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '2px solid #d4c5a9' : '2px solid transparent',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 20 }}>🏝️</span>
        <span style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: 18, color: '#725d42' }}>
          Zarttic's Island
        </span>
      </div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {navItems.map(item => (
          <Button
            key={item.id}
            type={activeSection === item.id ? 'primary' : 'text'}
            size="small"
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </Button>
        ))}
        <div style={{ marginLeft: 8 }}>
          <Time />
        </div>
      </div>
    </nav>
  );
}
