import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  if (typeof window !== "undefined") {
    window.location.replace("/portfolio.html");
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <p>Loading portfolio…</p>
    </div>
  );
}
