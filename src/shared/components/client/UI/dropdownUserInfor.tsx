"use client";

import { useSession } from "next-auth/react";

import ThemeToggle from "../../theme-toggle";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const avatarColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-cyan-500",
    "bg-orange-500",
    "bg-emerald-500",
];

function getAvatarColor(name: string) {
    const firstChar = name.trim().charCodeAt(0);
    return avatarColors[firstChar % avatarColors.length];
}

type TDropdownUserInforProps = {
    handleSignOut: () => void;
};
export function DropdownUserInfor(props: TDropdownUserInforProps) {
    const { handleSignOut } = props;
    const { data: session } = useSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={session?.user.image || ""} />
                    <AvatarFallback
                        className={`${getAvatarColor(session?.user.name || "User")} font-semibold text-white`}
                    >
                        {(session?.user.name || "User").charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Thông tin cá nhân</DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>Đăng xuất</DropdownMenuItem>
                <DropdownMenuItem>
                    <ThemeToggle />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
