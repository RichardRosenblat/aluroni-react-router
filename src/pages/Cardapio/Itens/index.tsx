import Item from "./Item";
import cardapio from "./itens.json";
import styles from "./Itens.module.scss";

interface Props {
	busca: string;
	filtro: number | null;
	ordenador: string;
}

export default function Itens(props: Props) {
	const { busca, filtro, ordenador } = props;

	function testaBusca(title: string) {
		const regex = new RegExp(busca, "i");
		return regex.test(title);
	}
	function testaFiltro(id: number) {
		if (filtro !== null) {
			return filtro === id;
		}
		return true;
	}

	function ordenar(novaLista: typeof cardapio) {
		switch (ordenador) {
			case "porcao":
				return novaLista.sort((a, b) => a.size - b.size);
			case "qtd_pessoas":
				return novaLista.sort((a, b) => a.serving - b.serving);
			case "preco":
				return novaLista.sort((a, b) => a.price - b.price);
			default:
				return novaLista;
		}
	}

	return (
		<div className={styles.itens}>
			{ordenar(cardapio)
				.filter((item) => testaBusca(item.title) && testaFiltro(item.category.id))
				.map((item) => (
					<Item key={item.id} {...item} />
				))}
		</div>
	);
}
