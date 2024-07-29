'use client'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { 
	Menu, 
	Database,
	Users,
	LogOut ,
	Home
} from 'lucide-react';
import Link from "next/link"


export function AdminSheet() {
	function logOff() {
		localStorage.clear()
	}
	return (
		<Sheet>
			<div className="w-auto h-auto">
				<SheetTrigger asChild className="border-none m-5 fixed">
					<Button variant="outline" className="bg-light-green border-none shadow-md"><Menu /></Button>
				</SheetTrigger>
				<SheetContent className="bg-mat-black h-screen border-r-2 border-mat-white shadow-md w-1/4 max-tablet:border-none max-laptop:w-2/3 max-[770px]:w-2/4 max-tablet:w-2/3 max-mobile:w-11/12  max-tablet:border-mat-black" side="left">
					<SheetHeader>
						<SheetTitle className="text-xl text-light-green p-4 border-b border-mat-white max-tablet:text-lg">Painel Inove</SheetTitle>
						<SheetDescription className="text-slate-200">
							Painel administativo da Inove.
						</SheetDescription>
					</SheetHeader>
					<div className="gap-4 py-5 mt-10 flex items-center justify-center">
						<ul className="p-8 w-60 h-auto flex flex-col items-center justify-center text-nowrap list-none border rounded-md border-gray bg-neutral-800 max-tablet:border-mat-black max-tablet:w-auto">
							<Link href="/painel/administrador" className="w-full flex items-start justify-start border-b-2 border-light-green">
								<li className="text-base text-mat-white p-4 hover:text-light-green w-full flex items-center">
									<Home size={24} color="gray" className="flex items-start justify-start mr-2"/> 
									Home
								</li>
							</Link>

							<Link href="/painel/administrador/fonte" className="w-full flex items-start justify-start border-b-2 border-light-green">
								<li className="text-base text-mat-white p-4 hover:text-light-green w-full flex items-center">
									<Database size={24} color="gray" className="flex items-start justify-start mr-2"/> 
									Fonte
								</li>
							</Link>

							<Link href="/painel/administrador/users" className="w-full flex items-start justify-start">
								<li className="text-base text-mat-white p-4 hover:text-light-green w-full flex items-center">
									<Users size={24} color="gray" className="flex items-start justify-start mr-2"/> 
									Usuários
								</li>
							</Link>
						</ul>
					</div>
					<SheetFooter className="h-auto w-auto">
						<div className="h-80 flex flex-row flex-wrap items-center justify-center align-bottom w-full max-tablet:h-60">
							<div className = "w-full mt-auto flex justify-center items-center text-red-500" onClick={logOff}>
								<Link href="/login">
									<LogOut size={24} strokeWidth={1.25} className="mt-auto"/>
								</Link>
							</div>
						</div>
					</SheetFooter>
				</SheetContent>
			</div>
		</Sheet>
	);
}
