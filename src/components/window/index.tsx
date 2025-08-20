import Footer from "./secoes/footer";

interface WindowProps {
  children: React.ReactNode;
}

interface WindowHeaderProps {
  children?: React.ReactNode;
}

interface WindowBodyProps {
  children?: React.ReactNode;
}

export default function Window({ children }: WindowProps) {
  return (
    <div className="bg-zinc-900 h-screen w-full max-w-[900px]  grid grid-rows-[48px_1fr_48px] lg:max-h-[540px] mx-auto lg:rounded-md border">
      {children}
    </div>
  );
}

function WindowHeader({ children }: WindowHeaderProps) {
  return <div className="border-b px-4 flex items-center h-12">{children}</div>;
}

function WindowBody({ children }: WindowBodyProps) {
  return (
    <div className="  overflow-y-auto pr-2">
      <div className="px-4 py-8 space-y-2 ">{children}</div>
    </div>
  );
}

function WindowFooter() {
  return (
    <footer className="border-t px-4 flex items-center justify-end h-12">
      <Footer />
    </footer>
  );
}

// Exportações dos subcomponentes
Window.Header = WindowHeader;
Window.Body = WindowBody;
Window.Footer = WindowFooter;
