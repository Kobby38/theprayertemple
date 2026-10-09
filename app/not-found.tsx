import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Page not found"
        title="This page has moved on."
        highlight={["moved"]}
        description="The page you're looking for doesn't exist, but there's always a seat for you here."
      />
      <section className="bg-white pb-24 md:pb-32">
        <div className="wrap">
          <Button href="/" arrow>
            Back to home
          </Button>
        </div>
      </section>
    </>
  );
}
