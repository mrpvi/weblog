import Link from "next/link";

export default function Header() {
  return (
    <div className="container">
        <div className="flex flex-col md:flex-row pt-4">
            <h1>Ali Parvizi</h1>

            <div className="flex justify-center gap-3 text-sm md:text-lg bg-slate-200 py-4 w-full mt-2">
                <Link 
                    href="/about"
                    className="hover:underline transition-all duration-200"
                >About Me</Link>
                <Link       
                    href="/blog"
                    className="hover:underline transition-all duration-200"
                >Blog</Link>
                <Link 
                    href="/contact"
                    className="hover:underline transition-all duration-200"
                >Contact</Link>
            </div>

            <div></div>
        </div>
    </div>
  )
}
