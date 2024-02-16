import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from Farmhub" });

  return (
    <>
      <Head>
        <title>Farmhub Connect</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header section */}
      {/* bg-gradient-to-b from-[#026d5d] to-[#15162c] */}
      <header className=" py-16 text-center text-green-500">
        <div className="container mx-auto">
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight">
            Simple - Unique - Friendly
          </h1>
          <h2 className="mb-8 text-6xl font-bold">Make Yourself At Home</h2>
          <p className="text-lg">On FarmHub</p>
        </div>
      </header>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#026d5d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(122,48%,44%)]">Farmhub</span> App
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>

      {/* About section */}
      <section className="bg-white py-16 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* About Image */}
            <div>
              <img src="/about_image.jpg" alt="About" className="rounded-lg" />
            </div>
            {/* About Content */}
            <div>
              <h2 className="mb-4 text-3xl font-bold">ABOUT US</h2>
              <p className="mb-4 text-lg">
                Experience What Uganda's Best Farmers Have To Offer
              </p>
              <p className="mb-4">
                🌱 Welcome to FarmHub! 🚜 We're the heartbeat of agriculture,
                connecting farmers with markets and opportunities. 🌍 Our
                mission? Empowering farmers, one click at a time! 💪 Join us in
                revolutionizing the way farmers grow, sell, and thrive! 🌟 Let's
                sow the seeds of success together! 🌿🌟
              </p>
              <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Farmers section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold">OUR FARMERS</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Product 1 */}
            <div className="flex flex-col justify-between rounded-lg bg-white p-6">
              <div>
                <img src="/beans.jpg" alt="Beans" className="mb-4" />
                <h3 className="mb-2 text-xl font-semibold">Beans</h3>
                <p className="mb-4">
                  Experience and Explore a variety of Beans.
                </p>
                <p>Starting from shs.3,500 / Per Kilo</p>
                <p>Farmer: Sarah Musenguzi</p>
              </div>
              <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                Sign Up
              </button>
            </div>
            {/* Product 2 */}
            <div className="flex flex-col justify-between rounded-lg bg-white p-6">
              <div>
                <img src="/eggs.jpg" alt="Eggs" className="mb-4" />
                <h3 className="mb-2 text-xl font-semibold">Eggs</h3>
                <p className="mb-4">Experience Good Quality Eggs</p>
                <p>Starting from Shs.12,000/Fresh</p>
                <p>Farmer: Mary Atunkira</p>
              </div>
              <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                Sign Up
              </button>
            </div>
            {/* Product 3 */}
            <div className="flex flex-col justify-between rounded-lg bg-white p-6">
              <div>
                <img src="/cows.jpg" alt="Cows" className="mb-4" />
                <h3 className="mb-2 text-xl font-semibold">Cows</h3>
                <p className="mb-4">
                  Good, Stable and Reliable Cows of Different Varieties.
                </p>
                <p>Starting from Shs.1,200,000/Fresh</p>
                <p>Farmer: Joyce Munezimba</p>
              </div>
              <button className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="grid grid-cols-2 gap-4 bg-cover bg-center py-16 sm:grid-cols-2 md:gap-8"
        style={{ backgroundImage: "url(/services_bg.jpg)" }}
      >
        <div className="container mx-auto text-center text-black">
          <h2 className="mb-8 text-3xl font-bold">SERVICES</h2>
          <p className="mb-8 text-lg">Strive Only For The Best.</p>
          <p className="mb-8 text-lg">Facilitating Buy and Sale.</p>
          <p className="mb-8 text-lg">Creating Market Hosting Platform </p>
          <p className="mb-8 text-lg">
            Creating Connections Between the Farmers and You.
          </p>
        </div>
        <div className="bg-green-800"></div>
      </section>

      {/* Stats */}
      <section className="bg-gray-200 py-16 text-center">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold">Statistics</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-4xl font-bold">0+</h3>
              <p className="text-lg">Farmers Available</p>
            </div>
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-4xl font-bold">0+</h3>
              <p className="text-lg">Deals Made</p>
            </div>
            <div className="rounded-lg bg-white p-6">
              <h3 className="mb-2 text-4xl font-bold">0+</h3>
              <p className="text-lg">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* explore more */}
      <section
        className="grid grid-cols-1 gap-4 bg-cover bg-center py-16 sm:grid-cols-2 md:gap-8"
        style={{ backgroundImage: "url(/explore_bg.jpg)" }}
      >
        <div className="bg-green-800"></div>

        <div className="container mx-auto text-center text-black">
          <h2 className="mb-8 text-3xl font-bold">EXPLORE</h2>
          <p className="mb-4 text-lg">What's New Today.</p>
          <p className="mb-8 text-2xl font-bold">10th FEB 2024</p>
          <p className="mb-8 text-lg">
            A New Farmer Available On Our Platform.
          </p>
          <button className="rounded-md bg-blue-500 px-4 py-2 text-black hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
            Continue
          </button>
        </div>
      </section>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
