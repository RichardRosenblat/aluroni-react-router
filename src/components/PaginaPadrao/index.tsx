import { Outlet } from "react-router-dom";
import Header from "../Header";
import stylesTema from "styles/Tema.module.scss";

export default function PaginaPadrao({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
