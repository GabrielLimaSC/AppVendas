import { Menu } from './menu';

export const Layout: React.FC = () => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu />

                <div className="container column is-10 ">
                    <div className="card has-background-light has-text-black">
                        <div className="card-header">
                            <p className="card-header-title has-text-black">
                                cadastro
                            </p>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                conteudo

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}