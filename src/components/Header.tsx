import Link from "next/link";
import { homePath, ticketsPath } from "../paths";
import { buttonVariants } from "./ui/button";
import { LucideLamp } from "lucide-react";
import ThemeSwitcher from "./theme/theme-switcher";

const Header: React.FC = () => {
    return (
        <nav className="
        support-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-0
        border-b bg-background/95 backdrop-blur
        flex justify-between py-2.5 px-2.5 w-full">
            <div className="flex align-items-center gap-x-2">
                <Link
                    href={homePath()}
                    className={buttonVariants({ variant: "ghost" })}>
                        <span><LucideLamp /></span>
                        <h1>TaskTracker</h1>
                </Link>
            </div>
            <div className="flex align-items-center gap-x-2">
                <ThemeSwitcher />
                <Link href={ticketsPath()} className={buttonVariants({ variant: "default" })}>Tickets</Link>
            </div>
        </nav>

    )
};

export default Header;