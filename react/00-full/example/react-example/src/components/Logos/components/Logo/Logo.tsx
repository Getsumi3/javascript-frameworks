import "./style.css";
import type {ReactNode} from "react";

export default function Logo({href, children, className = ""}: { href: string, children: ReactNode; className?: string }) {
    return <a href={href} target="_blank" className={"logo " + className}>
        {children}
    </a>
}