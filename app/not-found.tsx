import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-medium text-muted-foreground">
        Página não encontrada
      </h2>
      <p className="max-w-md text-muted-foreground">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
