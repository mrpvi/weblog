import Link from "next/link";

export default function Header() {
  return (
    <div className="container">
        <div className="flex justify-between items-center p-6">
            <h1>Ali Parvizi</h1>

            <div className="flex gap-3 text-lg">
                <Link 
                    href="/about"
                    className="hover:underline transition-all duration-200"
                >About Me</Link>
                <Link       
                    href="/block"
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
