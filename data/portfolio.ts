export const profile = {
  firstName: 'Alex',
  lastName: 'Dev',
  role: 'Fullstack Developer',
  tagline: 'Building ideas into reality',
  introduction:
    'Tôi là một lập trình viên đam mê công nghệ, thích xây dựng những sản phẩm web hiện đại, tối ưu trải nghiệm người dùng và tạo ra giá trị thực tiễn. Luôn sẵn sàng học hỏi, khám phá công nghệ mới và kết nối với những con người tuyệt vời.',
  location: 'Việt Nam',
  email: 'hello@alexdev.vn',
  availability: 'Available for new opportunities',
  avatar: '/images/alex-profile.png',
  cv: '/alex-dev-cv.txt',
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '2+', label: 'Năm kinh nghiệm', icon: 'users' },
  { value: '10+', label: 'Dự án đã thực hiện', icon: 'projects' },
  { value: '50+', label: 'Khách hàng / Người dùng', icon: 'clients' },
  { value: 'Việt Nam', label: 'Sẵn sàng làm việc từ xa', icon: 'location' },
] as const;

export const skills = [
  { name: 'React', icon: 'Atom', color: '#63d8ff' },
  { name: 'Next.js', icon: 'N', color: '#f8fafc' },
  { name: 'TypeScript', icon: 'TS', color: '#4f8dff' },
  { name: 'Tailwind CSS', icon: 'Wind', color: '#4ecbff' },
  { name: 'Node.js', icon: 'Hexagon', color: '#67c66d' },
  { name: 'NestJS', icon: 'N', color: '#ed315b' },
  { name: 'Python', icon: 'Py', color: '#ffd65b' },
  { name: 'PostgreSQL', icon: 'Database', color: '#79b8ff' },
  { name: 'MongoDB', icon: 'Leaf', color: '#58cf82' },
  { name: 'Docker', icon: 'Container', color: '#53a6ff' },
  { name: 'Git', icon: 'GitBranch', color: '#f26347' },
  { name: 'Figma', icon: 'Figma', color: '#b36bff' },
];

export const projects = [
  {
    title: 'EduHub – Nền tảng học trực tuyến',
    description:
      'Nền tảng học trực tuyến với video, bài kiểm tra và hệ thống quản lý khóa học.',
    image: '/images/project-eduhub.png',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
    href: '#contact',
  },
  {
    title: 'GreenShop – E-commerce',
    description:
      'Website bán cây cảnh với thanh toán online, quản lý đơn hàng và dashboard admin.',
    image: '/images/project-greenshop.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    href: '#contact',
  },
  {
    title: 'TaskFlow – Quản lý công việc',
    description:
      'Ứng dụng quản lý công việc nhóm, hỗ trợ realtime và phân quyền linh hoạt.',
    image: '/images/project-taskflow.png',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL'],
    href: '#contact',
  },
];

export const experiences = [
  {
    period: '2024 – Hiện tại',
    role: 'Senior Fullstack Developer',
    company: 'Tech Solution Co.',
    description:
      'Phát triển các sản phẩm web cho thị trường trong nước và quốc tế.',
  },
  {
    period: '2022 – 2024',
    role: 'Fullstack Developer',
    company: 'Digital Agency',
    description:
      'Tham gia phát triển hệ thống quản lý và website thương mại điện tử.',
  },
  {
    period: '2021 – 2022',
    role: 'Frontend Developer',
    company: 'Creative Studio',
    description: 'Xây dựng giao diện người dùng cho các dự án web.',
  },
];

export const interests = [
  { emoji: '📚', label: 'Đọc sách' },
  { emoji: '📷', label: 'Chụp ảnh' },
  { emoji: '✈️', label: 'Du lịch' },
  { emoji: '🎧', label: 'Công nghệ' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'Linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'Facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'Instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'Youtube' },
] as const;
