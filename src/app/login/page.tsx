'use client'

import { LoginForm } from "@/components/login/forms";

export default function Login() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden max-tablet:p-1 max-tablet:justify-center laptop:max-h-7">
			<div className="bg-black  w-[31.25rem] h-[38.75rem] z-0 rounded-xl bg-opacity-35 max-tablet:bg-mat-black">
				<h1 className="flex items-center justify-center text-center mt-5 text-white text-2xl max-tablet:text-2xl max-tablet:mt-10">Bem Vindo! 👋</h1>
				<p className="flex items-center justify-center text-center text-white text-xl max-tablet:text-xl">Acesse o pbi unificado</p>
				<LoginForm/>
			</div>
		</main>
	);
}
