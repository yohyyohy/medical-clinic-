import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface HeaderProps {
  title: string
  breadcrumbs: { label: string; href: string }[]
  isHomePage?: boolean
}

export function Header({ title, breadcrumbs, isHomePage = false }: HeaderProps) {
  return (
    <header className="relative">
      <Image
        src={isHomePage ? "/header.png" : "/owl_wall_gray.png"}
        alt="Header background"
        width={1920}
        height={300}
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl font-light mb-4">{title}</h1>
        <nav className="text-sm">
          <ol className="flex items-center">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                {index === breadcrumbs.length - 1 ? (
                  <span>{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:underline">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  )
}

