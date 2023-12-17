import Header from "@/components/layout/Header";
import urls from "@/config/urls";
import { CssIco, EmailIco, GithubIco, JsIco, LinkdinIco, ReactIco, TwitterIco } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="shadow-sm">
        <Header />
      </div>
      <main>
        <div className="container">
          <div className="h-full flex justify-center gap-8 mt-36">
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-5xl font-bold">Ali Parvizi</h1>
                <span className="text-xl font-light">Web Developer</span>

                <div className="flex gap-2 mt-6">
                  <JsIco />
                  <ReactIco />
                  <CssIco />
                </div>

              </div>
              <Link
                href="/contact"
                className="border border-black rounded-lg py-3 px-5 w-fit"
              > let's contact </Link>
            </div>

            <div className="flex flex-col items-center gap-8">
              <Image
                src={'/images/personal.jpg'}
                alt="profile"
                className="rounded-full"
                width={270}
                height={270}
              />

              <div className="flex gap-3">
                <a href={ urls.github } >
                  <GithubIco />
                </a>
                <a href={ urls.twitter }>
                  <TwitterIco />
                </a>
                <a href={ urls.linkdin }>
                  <LinkdinIco />
                </a>
                <a href={ urls.email }>
                  <EmailIco />
                </a>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}
