export interface Tab {
  id: string;
  title: string;
}

export interface Panel {
  items: PanelItem[];
}

export interface PanelItem {
  id: string;
  title: string;
  excerpt: string;
  price: string;
  description: string;
  features: string[];
  color: string;
  cta?: {
    label: string;
    href: string;
  };
}
