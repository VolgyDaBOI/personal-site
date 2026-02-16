import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-24">
      <Separator className="mb-8" />
      <p className="text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Michael Volgin
      </p>
    </footer>
  );
}
