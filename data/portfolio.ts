export type Locale = 'vi' | 'en';

export type LocalizedText = Record<Locale, string>;

export function localize(value: LocalizedText, locale: Locale) {
  return value[locale];
}

export const uiText = {
  vi: {
    mainNavigation: 'Điều hướng chính',
    mobileNavigation: 'Điều hướng trên di động',
    homeLabel: 'Alex Dev - Trang chủ',
    switchToDark: 'Chuyển sang giao diện tối',
    switchToLight: 'Chuyển sang giao diện sáng',
    openMenu: 'Mở menu',
    closeMenu: 'Đóng menu',
    language: 'Chọn ngôn ngữ',
    downloadCv: 'Tải CV',
    greeting: 'Xin chào, tôi là',
    contactMe: 'Liên hệ với tôi',
    viewProjects: 'Xem dự án',
    viewGithub: 'Xem GitHub',
    avatarAlt: 'Chân dung Alex Dev',
    statsLabel: 'Thống kê nổi bật',
    skillsTitle: 'Công nghệ tôi sử dụng',
    skillsAction: 'Luôn khám phá những công nghệ mới',
    projectsTitle: 'Dự án nổi bật',
    projectsSubtitle: 'Một số sản phẩm tôi đã xây dựng và đóng góp.',
    projectsAction: 'Xem tất cả dự án',
    viewProject: 'Xem dự án',
    openProject: 'Mở dự án',
    technologies: 'Công nghệ sử dụng',
    aboutExperienceLabel: 'Giới thiệu và kinh nghiệm',
    aboutTitle: 'Về tôi',
    aboutBody:
      'Tôi yêu thích việc biến ý tưởng thành sản phẩm thực tế. Ngoài lập trình, tôi thích đọc sách, chụp ảnh và khám phá những địa điểm mới. Tôi tin rằng công nghệ có thể tạo ra những thay đổi tích cực cho cuộc sống.',
    interests: 'Sở thích',
    experienceTitle: 'Kinh nghiệm làm việc',
    socialNetworks: 'Mạng xã hội',
    footerTagline: 'Xây dựng một web tốt hơn, từng dòng code một.',
    footerCta: 'Hãy cùng tạo nên một sản phẩm tuyệt vời!',
    contactNow: 'Liên hệ ngay',
  },
  en: {
    mainNavigation: 'Main navigation',
    mobileNavigation: 'Mobile navigation',
    homeLabel: 'Alex Dev - Home',
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Choose language',
    downloadCv: 'Download CV',
    greeting: 'Hello, I am',
    contactMe: 'Contact me',
    viewProjects: 'View projects',
    viewGithub: 'View GitHub',
    avatarAlt: 'Portrait of Alex Dev',
    statsLabel: 'Key statistics',
    skillsTitle: 'Technologies I use',
    skillsAction: 'Always exploring new technologies',
    projectsTitle: 'Featured projects',
    projectsSubtitle: 'A selection of products I have built and contributed to.',
    projectsAction: 'View all projects',
    viewProject: 'View project',
    openProject: 'Open project',
    technologies: 'Technologies used',
    aboutExperienceLabel: 'About and experience',
    aboutTitle: 'About me',
    aboutBody:
      'I love turning ideas into real products. Outside of coding, I enjoy reading, photography, and discovering new places. I believe technology can create meaningful, positive change in everyday life.',
    interests: 'Interests',
    experienceTitle: 'Work experience',
    socialNetworks: 'Social networks',
    footerTagline: 'Building a better web, one line of code at a time.',
    footerCta: "Let's build something amazing together!",
    contactNow: 'Contact now',
  },
} as const;

export const profile = {
  firstName: 'Alex',
  lastName: 'Dev',
  role: {
    vi: 'Lập trình viên Fullstack',
    en: 'Fullstack Developer',
  },
  tagline: {
    vi: 'Biến ý tưởng thành hiện thực',
    en: 'Building ideas into reality',
  },
  introduction: {
    vi: 'Tôi là một lập trình viên đam mê công nghệ, thích xây dựng những sản phẩm web hiện đại, tối ưu trải nghiệm người dùng và tạo ra giá trị thực tiễn. Luôn sẵn sàng học hỏi, khám phá công nghệ mới và kết nối với những con người tuyệt vời.',
    en: 'I am a technology-driven developer who enjoys building modern web products, refining user experiences, and creating practical value. I am always ready to learn, explore new technologies, and connect with inspiring people.',
  },
  location: {
    vi: 'Việt Nam',
    en: 'Vietnam',
  },
  email: 'hello@alexdev.vn',
  availability: {
    vi: 'Sẵn sàng cho cơ hội mới',
    en: 'Available for new opportunities',
  },
  avatar: '/images/alex-profile.png',
  cv: '/alex-dev-cv.txt',
};

export const navigation = [
  { label: { vi: 'Trang chủ', en: 'Home' }, href: '#home' },
  { label: { vi: 'Về tôi', en: 'About' }, href: '#about' },
  { label: { vi: 'Kỹ năng', en: 'Skills' }, href: '#skills' },
  { label: { vi: 'Dự án', en: 'Projects' }, href: '#projects' },
  { label: { vi: 'Kinh nghiệm', en: 'Experience' }, href: '#experience' },
  { label: { vi: 'Liên hệ', en: 'Contact' }, href: '#contact' },
] as const;

export const stats = [
  {
    value: { vi: '2+', en: '2+' },
    label: { vi: 'Năm kinh nghiệm', en: 'Years of experience' },
    icon: 'users',
  },
  {
    value: { vi: '10+', en: '10+' },
    label: { vi: 'Dự án đã thực hiện', en: 'Projects completed' },
    icon: 'projects',
  },
  {
    value: { vi: '50+', en: '50+' },
    label: { vi: 'Khách hàng / Người dùng', en: 'Clients / Users' },
    icon: 'clients',
  },
  {
    value: { vi: 'Việt Nam', en: 'Vietnam' },
    label: { vi: 'Sẵn sàng làm việc từ xa', en: 'Available for remote work' },
    icon: 'location',
  },
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
    title: {
      vi: 'EduHub – Nền tảng học trực tuyến',
      en: 'EduHub – Online Learning Platform',
    },
    description: {
      vi: 'Nền tảng học trực tuyến với video, bài kiểm tra và hệ thống quản lý khóa học.',
      en: 'An online learning platform with video lessons, quizzes, and course management.',
    },
    image: '/images/project-eduhub.png',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
    href: '#contact',
  },
  {
    title: {
      vi: 'GreenShop – Thương mại điện tử',
      en: 'GreenShop – E-commerce',
    },
    description: {
      vi: 'Website bán cây cảnh với thanh toán online, quản lý đơn hàng và dashboard admin.',
      en: 'An online plant store with payments, order management, and an admin dashboard.',
    },
    image: '/images/project-greenshop.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    href: '#contact',
  },
  {
    title: {
      vi: 'TaskFlow – Quản lý công việc',
      en: 'TaskFlow – Task Management',
    },
    description: {
      vi: 'Ứng dụng quản lý công việc nhóm, hỗ trợ realtime và phân quyền linh hoạt.',
      en: 'A collaborative task management app with real-time updates and flexible permissions.',
    },
    image: '/images/project-taskflow.png',
    tags: ['Next.js', 'Socket.io', 'PostgreSQL'],
    href: '#contact',
  },
] as const;

export type Project = (typeof projects)[number];

export const experiences = [
  {
    period: { vi: '2024 – Hiện tại', en: '2024 – Present' },
    role: { vi: 'Lập trình viên Fullstack cấp cao', en: 'Senior Fullstack Developer' },
    company: 'Tech Solution Co.',
    description: {
      vi: 'Phát triển các sản phẩm web cho thị trường trong nước và quốc tế.',
      en: 'Developing web products for both domestic and international markets.',
    },
  },
  {
    period: { vi: '2022 – 2024', en: '2022 – 2024' },
    role: { vi: 'Lập trình viên Fullstack', en: 'Fullstack Developer' },
    company: 'Digital Agency',
    description: {
      vi: 'Tham gia phát triển hệ thống quản lý và website thương mại điện tử.',
      en: 'Contributed to management systems and e-commerce website development.',
    },
  },
  {
    period: { vi: '2021 – 2022', en: '2021 – 2022' },
    role: { vi: 'Lập trình viên Frontend', en: 'Frontend Developer' },
    company: 'Creative Studio',
    description: {
      vi: 'Xây dựng giao diện người dùng cho các dự án web.',
      en: 'Built user interfaces for web projects.',
    },
  },
] as const;

export const interests = [
  {
    icon: 'BookOpen',
    color: '#5b8cff',
    label: { vi: 'Đọc sách', en: 'Reading' },
  },
  {
    icon: 'Camera',
    color: '#a78bfa',
    label: { vi: 'Chụp ảnh', en: 'Photography' },
  },
  {
    icon: 'Plane',
    color: '#38bdf8',
    label: { vi: 'Du lịch', en: 'Travel' },
  },
  {
    icon: 'Headphones',
    color: '#f472b6',
    label: { vi: 'Công nghệ', en: 'Technology' },
  },
] as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'Linkedin' },
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'Facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'Instagram' },
  { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'Youtube' },
] as const;
