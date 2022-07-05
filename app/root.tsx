import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  Link
} from "remix";
import styles from "~/styles/app.css";
import mainStyles from "~/styles/main.css";
import { IDocumentProps, IErrorProps, ILayoutProps } from "~/types/root";
import { Error, Footer, Header, Main, Sidebar } from "~/components";

export const meta: MetaFunction = () => {
  return { title: "HD Movie App | Homepage" };
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: mainStyles }
  ];
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function Document({ children, title }: IDocumentProps) {
  return (
    <html className="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <Meta />
        <Links />
        <title>{title || "HD Movie App | Homepage"}</title>
      </head>
      <body className="flex flex-1 flex-col">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex w-full dark:bg-gradient-to-t dark:from-primary dark:to-secondary overflow-hidden h-screen ">
      <>
        <Sidebar />
      </>
      <div className="w-full flex flex-col flex-1">
        <Header />
        <div className="w-full flex flex-1 flex-col h-full overflow-auto scrollbar scrollbar-thin   dark:scrollbar-track-gray-100 dark:scrollbar-thumb-red-600 scrollbar-track-gray-700 scrollbar-thumb-light">
          <Main children={children} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: IErrorProps) {
  return (
    <Document title="Something went wrong!">
      <Error error={error} />
    </Document>
    
  );
}


export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;
    default:
      message = (
        <p>
          Oops! Something went wrong. Please try again later or contact us if the problem persists.
        </p>
      );
  }

  return (
    <Document>
      <div className="flex flex-col w-full h-screen justify-center items-center space-y-6 dark:bg-primary">
        <div className="text-6xl">
          {caught.status}
        </div>
        <h1 className="text-5xl">
          You're alone here
        </h1>
        <p className='mt-4 dark:text-white text-primary'>
          {message}
        </p>
        <Link to="/" className="bg-red-600 text-white rounded px-8 py-2">
          Go back Home
        </Link>
      </div>
    </Document >
  );
}