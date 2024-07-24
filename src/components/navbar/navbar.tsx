'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link';
import { EllipsisVertical, LogOut  } from 'lucide-react';


export function MainNavBar() {
	function logOff() {
		localStorage.setItem('user_auth', 'false')
		localStorage.setItem('user_name', '')
	}
    return (
        <>
            <nav className="absolute bg-black bg-opacity-35 w-screen flex items-center justify-between h-[100px] space-x-8">
                <div className="flex items-center flex-shrink-0 w-80 ml-6">
					<Link href="/">
						<span className="text-light-green text-3xl">Inove</span>
						<span className="text-white text-3xl">Telecom</span>
					</Link>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-auto block flex-grow text-center text-white text-xl hover:text-light-green focus:outline-none">DFV</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel className="font-semibold">Regionais</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-light-green"/>
                        <DropdownMenuItem><Link href="/dfv/rcs/sul">RCS: SUL</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href="/dfv/rcs/centro">RCS: CENTRO - OESTE</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href="/dfv/rnn">RNN</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href="/dfv/rse">RSE</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <a href="/ofertas" className="w-auto block flex-grow text-center text-white text-xl hover:text-light-green focus:outline-none">OFERTAS</a>
                <a href="/lista-tel" className="w-auto block flex-grow text-center text-white text-xl hover:text-light-green focus:outline-none">LISTA TELEFÔNICA</a>
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-[70px] flex items-center text-center justify-center text-white text-xl hover:text-light-green focus:outline-none"><EllipsisVertical /></DropdownMenuTrigger>
                    <DropdownMenuContent className="block">
                        <DropdownMenuLabel className="font-semibold">Opções</DropdownMenuLabel>
                        <DropdownMenuSeparator  className="bg-light-green"/>
                        <DropdownMenuItem><Link href="/painel/login">Acesso Administrativo</Link></DropdownMenuItem>
                        <Link href="/login">
                            <DropdownMenuItem className="w-full text-red-500">
                                <LogOut size={24} strokeWidth={1.25} onClick={logOff}/> Sair
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </>
    );
}