export default function NavItem({ href, children, onClick }){
    return (
        <li><a href={href} onClick={onClick} className="text-black dark:text-white font-semibold hover:opacity-60 transition">{children}</a></li>
    )
}