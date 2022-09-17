import styles from "./Sobre.module.scss";
import stylesTema from "styles/Tema.module.scss";
import casa from "assets/Sobre/casa.png";
import massa1 from "assets/Sobre/massa1.png";
import massa2 from "assets/Sobre/massa2.png";

const imagens = [
    {
        id:"fe5dfe27-88d7-4ee5-b6b3-4a901df3b886",
        massa:massa1
    },
    {
        id:"cb6765eb-2963-403d-9347-e337d89fe9b9",
        massa:massa2
    }
];

export default function Sobre() {
    return (
        <section>
            <h3 className={stylesTema.titulo}>Sobre</h3>
            <div className={styles.sobreNos}>
                <img src={casa} alt="Casa Aluroni" />
                <div className={styles.sobreNos__texto}>
                    <p>
                        Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                    </p>
                    <p>
                        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                    </p>
                    <p>
                        Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
                    </p>
                </div>
            </div>
            <div className={styles.imagens}>
                {imagens.map((imagem) => (
                    <div key={imagem.id} className={styles.imagens__imagem}>
                        <img src={imagem.massa} alt="imagem de massa" />
                    </div>
                ))}
            </div>
        </section>
    );
}
