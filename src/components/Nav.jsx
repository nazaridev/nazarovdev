import Link from "next/link";
import {
    HiHome,
    HiUser,
    HiRectangleGroup,
    HiViewColumns,
    HiChatBubbleBottomCenterText,
    HiEnvelope
} from 'react-icons/hi2'

export const navData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'work', path: '/work', icon: <HiViewColumns /> },
    {
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope />,
    },
];

export default function Nav() {
    return (
        <nav className="flex fixed w-full bottom-0 xl:top-0 xl:w-max xl:items-center xl:right-0">
            <div className="w-full flex items-center justify-between xl:flex-col xl:justify-center px-4 md:px-40 gap-y-10 bg-white/10 xl:px-8 h-16 backdrop-blur-sm text-3xl xl:py-8 xl:text-xl xl:h-max xl:rounded-full">
                {navData.map(nav => (
                    <Link href={nav.path}>{nav.icon}</Link>
                ))}
            </div>
        </nav>
    )
}
