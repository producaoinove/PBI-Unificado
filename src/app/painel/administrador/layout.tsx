import Link from "next/link"
import { Database, Users } from 'lucide-react';

export default function AdminRootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
	return (
		<div className="flex h-screen absolute text-full-white w-screen">
			<aside className="bg-mat-black w-2/6 h-screen border-r-2 border-mat-white shadow-md">
				<h1 className="text-xl text-light-green p-4 border-b border-mat-white">Painel Inove</h1>
				<div className="flex items-center justify-center mt-10">
					<ul className="p-8 w-60 h-auto flex flex-col text-nowrap list-none border rounded-md border-gray bg-neutral-800">
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
			</aside>
			<main className="bg-zinc-800 w-screen flex items-center justify-center h-screen">
				<div className="flex items-center justify-center h-full w-full">
					{children}
				</div>
			</main>
		</div>
	)
}