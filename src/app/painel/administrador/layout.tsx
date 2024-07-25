import Link from "next/link"
import { Database, Users } from 'lucide-react';
import { AdminSheet } from "@/components/admin/adminSheet";

export default function AdminRootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
	return (
		<div className="flex h-screen absolute text-full-white w-screen overflow-y-hidden">
			<div className="bg-zinc-800">
				<AdminSheet/>
			</div>
			<main className="bg-zinc-800 w-screen flex items-center justify-center h-screen">
				<div className="flex items-center justify-center h-full w-full">
					{children}
				</div>
			</main>
		</div>
	)
}