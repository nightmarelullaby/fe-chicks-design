export type ElementsType = {
  name: string;
};
export interface SideMenuProps {
  open: boolean;
  logo: React.ReactNode;
  top: number;
  rest?: object;
  elements: SideMenuElementsType;
}
export type SideMenuElementType = { name: string };
export type SideMenuElementsType = SideMenuElementType[];

export interface HamburgerMenuProps {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  rest?: object;
}
