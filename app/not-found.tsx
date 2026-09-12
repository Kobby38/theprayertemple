import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-navy-900 px-6 text-center text-cream grain">
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-brown-500/20 blur-[100px]" />
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-brown-300">
        404
      </p>
      <h1 className="mt-4 text-balance text-5xl font-extrabold tracking-tight sm:text-7xl">
        Lost in the house.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/70">
        The page you&rsquo;re looking for doesn&rsquo;t exist, but you&rsquo;re
        always welcome to come home.
      </p>
      <div className="relative mt-10">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
