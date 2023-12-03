import { SignIn } from "@clerk/nextjs";
import tw from "twin.macro";
import Script from 'next/script'

const SignInPage = () => (
    <>
        <main className="flex w-full min-h-screen justify-center items-center bg-dark py-8" css={[tw`
    bg-dark
    background-size[400%]
    md:background-size[300%]
    lg:background-size[200%]
    xl:background-size[cover]
  `,
            `
    background-image: url(/assets/backgrounds/grid-dark.svg);
    background-position: 100%;
  `]}>
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </main>
        <Script>
            {`
            // Create a new observer instance
            let observer = new MutationObserver((mutations) => {
              // Look through all mutations that just occured
              for(let mutation of mutations) {
                // If the addedNodes property has one or more nodes
                if(mutation.addedNodes.length) {
                  let elements = document.querySelectorAll("div.cl-card > div"");
                  if(elements.length > 4) {
                    elements[4].classList.add("hidden");
                    // Once the class is added, we don't need to observe anymore
                    observer.disconnect();
                    break;
                  }
                }
              }
            });
            
            // Start observing the document with the configured parameters
            observer.observe(document.body, { childList: true, subtree: true });            
        `}
        </Script>
    </>
);

export default SignInPage;