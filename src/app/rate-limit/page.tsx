import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rate Limit Exceeded - Khalid Lazrag",
  description: "Too many requests. Please try again later.",
};

export default function RateLimitPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-serif font-bold">🚦 Whoa, slow down!</h1>
        <p className="text-xl text-muted-foreground">
          You&apos;ve hit the rate limit
        </p>
        <p className="text-sm text-muted-foreground max-w-md">
          Too many requests in a short time. try again in a
          minute.
        </p>
        <div className="pt-4">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
}
