'use client'
import { Sheet, SheetClose, SheetContent, SheetTrigger,} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/icons/hamburger.svg'
          alt="hamburger icon"
          width={46}
          height={46}
          className="cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none bg-dark-1 pt-6 pb-0">
        <Link href='/' className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt='Umeet Logo'
            width={57}
            height={57}
            className='max-sm:size-16'
          />
            <p className="text-[26px] font-extrabold text-white">
              Umeet
            </p>
        </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-10 text-white">
                {/* sidbarLinks => constants */}
                  {sidebarLinks.map((link) =>{
                    const isActive = pathname === link.route;
                  
                  return(
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn('flex gap-4 items-center p-4 rounded-lg w-full max-w-60', {'bg-blue-1':isActive})}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                  })}
              </section>
            </SheetClose>
          </div>
      </SheetContent>
    </Sheet>

  )
}

export default MobileNav