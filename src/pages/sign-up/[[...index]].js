import { SignUp } from "@clerk/nextjs";
import tw from "twin.macro";

const SignUpPage = () => (
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
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </main>
);
export default SignUpPage;