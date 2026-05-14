import { useState } from 'react';
import { Card, Input, Button } from 'animal-island-ui';
import { profile } from '../data/profile';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const subject = encodeURIComponent(`来自 ${name || '访客'} 的消息`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.social.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-anchor">
      <div className="section-content">
        <Card type="title">📬 联系我</Card>

        <div style={{ marginTop: 24 }}>
          <Card color="app-pink">
            <p style={{ color: '#fff', marginBottom: 20, lineHeight: 1.8, fontSize: 16 }}>
              有什么想说的？无论是合作机会、技术交流还是单纯打个招呼，都欢迎留言！
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input
                placeholder="你的名字"
                value={name}
                onChange={e => setName(e.target.value)}
                size="large"
                allowClear
              />
              <Input
                placeholder="想说点什么..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                size="large"
                allowClear
              />
              <Button
                type="primary"
                size="large"
                block
                onClick={handleSubmit}
                disabled={!message.trim()}
              >
                发送邮件 📮
              </Button>
            </div>

            <div style={{ marginTop: 24, display: 'flex', gap: 16, justifyContent: 'center' }}>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button type="default" ghost>GitHub</Button>
              </a>
              <a href={`mailto:${profile.social.email}`} style={{ textDecoration: 'none' }}>
                <Button type="default" ghost>Email</Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
