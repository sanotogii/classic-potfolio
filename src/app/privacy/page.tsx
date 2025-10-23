import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto  sm:px-6 lg:px-8 ">
      <Link
        className=" text-sm mb-4 hover:text-gray-700 dark:hover:text-gray-300 inline-block"
        href={"/"}
      >
        <p>← Back to home</p>
      </Link>

      <div className="mt-6 space-y-6 sm:space-y-8">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Last updated: October 19, 2025
          </p>
          <hr className="my-6" />
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">TL;DR</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              Your data isn't being sold, tracked across the web, or used for
              anything beyond what you'd expect from a portfolio site.
            </p>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">
              What I Collect
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 mt-1">•</span>
                <span>
                  <strong>Your message:</strong> When you submit the contact
                  form, I collect your name, email, and message. This is
                  necessary to respond to your inquiry.
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">
              What I Do With It
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              Contact form submissions are read and responded to personally. I
              may occasionally review project engagement to understand what
              resonates with visitors. Your information is never sold to third
              parties, used for spam, or shared without your consent.
            </p>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">
              Third-Party services
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              Embedded content like YouTube videos and external links are
              governed by their respective privacy policies. When you interact
              with these elements, you're subject to those third-party terms,
              not this site's policy.
            </p>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">Updates</h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              Any changes to this policy will be reflected in the updated date
              at the top of the page. Feel free to check back periodically to
              stay informed.
            </p>
          </section>

          <section className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold mt-4">
              Questions
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              If you have questions or need clarification on anything in this
              policy, feel free to{" "}
              <Link
                href="/#contact"
                className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
              >
                reach out
              </Link>
              . I'm happy to provide more details.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
