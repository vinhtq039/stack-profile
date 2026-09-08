import { UserRound } from 'lucide-react';
import { interests } from '@/data/portfolio';

export function About() {
  return (
    <article className="detail-card about-card section-animate" id="about">
      <header className="card-heading">
        <span className="card-heading-icon"><UserRound size={20} /></span>
        <h2>Về tôi</h2>
      </header>
      <p>
        Tôi yêu thích việc biến ý tưởng thành sản phẩm thực tế. Ngoài lập trình, tôi thích
        đọc sách, chụp ảnh và khám phá những địa điểm mới. Tôi tin rằng công nghệ có thể
        tạo ra những thay đổi tích cực cho cuộc sống.
      </p>
      <ul className="interest-list" aria-label="Sở thích">
        {interests.map((interest) => (
          <li key={interest.label}><span aria-hidden="true">{interest.emoji}</span>{interest.label}</li>
        ))}
      </ul>
    </article>
  );
}
