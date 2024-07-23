'use client'

import { AdminForms } from "@/components/admin/adminForms";

export default function AdminLogin() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden max-tablet:p-1 max-tablet:justify-center laptop:max-h-7">
			<div className="bg-black  w-[31.25rem] h-[38.75rem] z-0 rounded-xl bg-opacity-35 max-tablet:bg-mat-black">
				<h1 className="flex items-center justify-center text-center mt-5 text-white text-2xl max-tablet:text-2xl max-tablet:mt-10">Bem Vindo! 👋</h1>
				<p className="flex items-center justify-center text-center text-white text-xl max-tablet:text-xl">Painel Administrador<span className="ml-1 mr-1 bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text">Inove</span>📈</p>
				<AdminForms/>
			</div>
		</main>
	);
}
