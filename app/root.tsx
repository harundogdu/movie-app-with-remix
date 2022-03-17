import {Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "remix";
import {Error, Footer, Header, Main} from "~/components";
import {IDocumentProps, IErrorProps, ILayoutProps} from "~/types/root";
import styles from "~/styles/app.css";
import Sidebar from "~/components/sidebar";

export const links: LinksFunction = () => {
    return [{rel: "stylesheet", href: styles}];
};

export default function App() {
    return (
        <Document>
            <Layout>
                <Outlet/>
            </Layout>
        </Document>
    );
}

export function Document({children}: IDocumentProps) {
    return (
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta charSet="utf-8"/>
            <title>Remix App</title>
            <Meta/>
            <Links/>
        </head>
        <body className="flex flex-1 flex-col">
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload/>}
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    );
}

export function Layout({children}: ILayoutProps) {
    return (
        <div className="flex w-full h-full bg-gradient-to-t from-primary to-secondary">
            <>
                <Sidebar/>
            </>
            <div className="w-full flex flex-1 flex-col">
                <Header/>
                <Main children={children}/>
                <Footer/>
            </div>
        </div>
    );
}

export function ErrorBoundary({error}: IErrorProps) {
    return (
        <Layout>
            <Error error={error}/>
        </Layout>
    );
}
