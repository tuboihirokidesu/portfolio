export type IRoute = {
  id: string;
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
};
