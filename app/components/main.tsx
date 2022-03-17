import { ILayoutProps } from "~/types/root";

const Main = ({ children }: ILayoutProps) => {
  return <main className="flex flex-col flex-1 px-28 py-8">{children}</main>;
};

export default Main;
