'use client'

import VerifyUserSession from "@/components/user_session/userSession";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Home() {
	VerifyUserSession();
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 2200);
		
	});
	
	return (
		<>
			<main className="flex min-h-screen flex-col items-center justify-center absolute">
				<div className="w-screen h-screen bg-mat-black flex items-center justify-center flex-col">
					<div className="border-white h-24 w-24 animate-spin rounded-full border-8 border-t-light-green border-solid" />
					<div className="flex flex-row">
						<h1 className="text-white text-3xl transition duration-1000 animate-pulse transform ease-linear mt-5">Boas Vendas!</h1><span className="text-3xl transition duration-1000 animate-bounce transform ease-linear mt-5">🚀</span>
					</div>
				</div>
			</main>
		</>
	);
}
