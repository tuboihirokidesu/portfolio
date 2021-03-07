export type MenuData = Array<{
  id: string;
  title: string;
  link: string;
  class: string;
}>;
export const navMenuData: MenuData = [
  { id: '0', title: 'Home', link: '/portfolio', class: 'nav-links' },
  { id: '1', title: 'Article', link: '/portfolio/article', class: 'nav-links' },
  {
    id: '2',
    title: 'Projects',
    link: '/portfolio/project',
    class: 'nav-links',
  },
];
