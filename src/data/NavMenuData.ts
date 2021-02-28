export type MenuData = Array<{
  id: string;
  title: string;
  link: string;
  class: string;
}>;
export const navMenuData: MenuData = [
  { id: '0', title: 'Homes', link: '/portfolio', class: 'nav-links' },
  { id: '1', title: 'About', link: '/portfolio/about', class: 'nav-links' },
  {
    id: '2',
    title: 'Projects',
    link: '/portfolio/project',
    class: 'nav-links',
  },
  {
    id: '3',
    title: 'Contact',
    link: '/portfolio/contact',
    class: 'nav-links-mobile',
  },
];
