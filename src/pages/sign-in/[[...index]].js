import { SignIn } from "@clerk/nextjs";
import tw from "twin.macro";

const SignInPage = () => (
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
);

export default SignInPage;