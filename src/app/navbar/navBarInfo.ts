type NavBarInfoItem = IconItem | TextItem | ButtonItem;

export interface IconItem {
  type: 'icon';
  urlImage: string;
}

export interface TextItem {
  type: 'text';
  title: string;
  route: string;
}

export interface ButtonItem {
  type: 'button';
  title: string;
  route: string;
}

export const navBarValues: NavBarInfoItem[] = [
  { type: 'icon', urlImage: '../assets/menu.svg', },
  { type: 'icon', urlImage: 'url2.png', },
  { type: 'text', title: 'Espacios de trabajo', route: 'ruta1', },
  { type: 'text', title: 'Reciente', route: 'ruta2', },
  { type: 'text', title: 'Mercado', route: 'ruta1', },
  { type: 'text', title: 'Plantillas', route: 'ruta2', },
  { type: 'button', title: 'Crear', route: 'ruta2', },
];
