import { useState, useEffect } from 'react'
import { Home, Network, User } from 'lucide-react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

export function NavigationMenu() {
    const { pathname } = useLocation()
    const [activeIcon, setActiveIcon] = useState(pathname)

    useEffect(() => {
        setActiveIcon(pathname)
    }, [pathname])

    const menuItems = [
        { icon: Home, path: '/' },
        { icon: User, path: '/about-me' },
        { icon: Network, path: '/profile' },
    ]

    return (
        <nav className="fixed bottom-6 right-6 md:bottom-6 md:right-6  bg-[#000000] p-2 md:p-4 rounded-3xl">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {menuItems.map(({ icon: Icon, path }) => (
                    <Link
                        key={path}
                        to={path}
                        className={`p-6 rounded-full transition-all duration-300 ease-in-out ${activeIcon === path
                            ? 'bg-white text-[#bc9439] focus:text-[#bc9439] shadow-lg'
                            : 'text-[#847026] focus:text-[#847026]'
                            }`}
                        onClick={() => setActiveIcon(path)}
                    >
                        <Icon className="w-6 h-6 md:w-6 md:h-6" />
                    </Link>
                ))}
            </div>
        </nav>
    )
}