import { Menu } from './menu';

interface LayoutProps {
    titulo?: string;
    children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ titulo, children }) => {
    return (
        <div className="app">
            <section className="main-content columns is-fullheight">
                <Menu />

                <div className="container column is-10 ">
                    <div className="card has-background-light has-text-black">
                        <div className="card-header">
                            <p className="card-header-title has-text-black">
                                { titulo }
                            </p>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                { children }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}