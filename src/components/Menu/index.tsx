import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

export default function Menu() {
  const rotas = [
    {
      id: "57a449be-eb58-4dcd-9a80-da0e519098f8",
      label: "Início",
      to: "/",
    },
    {
      id: "98b02f8d-5725-474c-8807-ca5b351cf462",
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      id: "4016ea33-f352-46c1-9542-2816a80a951f",
      label: "Sobre",
      to: "/sobre",
    },
  ];
  return (
    <nav className={styles.menu}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={styles.menu__list}>
        {rotas.map((rota) => (
          <li key={rota.id} className={styles.menu__link}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
