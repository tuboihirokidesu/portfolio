export type MenuData = {
  title: string;
  link: string;
  class: string;
}[];

export const navMenuData: MenuData = [
  { title: "Homes", link: "/portfolio", class: "nav-links" },
  { title: "About", link: "/portfolio/about", class: "nav-links" },
  { title: "Projects", link: "/portfolio/project", class: "nav-links" },
  { title: "Contact", link: "/portfolio/contact", class: "nav-links-mobile" },
];
