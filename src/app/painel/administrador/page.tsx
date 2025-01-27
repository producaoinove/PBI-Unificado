'use client'
import VerifyAdmSession from "@/components/user_session/admSession";

export default function Admin() {
	VerifyAdmSession();
	return (
		<div className="max-tablet:p-10">
			<h1 className="text-3xl text-light-green w-auto h-auto underline decoration-solid underline-offset-4 text-center text-balance">Painel Administrativo</h1>
			<div className="flex items-center justify-center text-center mt-5">
				<p className="text-base text-balance">Altere informações importantes sobre os <span className=" underline decoration-wavy text-yellow-300">Power Bi</span> em um só lugar!</p>
			</div>
			<div className="bg-mat-black mt-5 rounded-md p-4">
				<h2 className="text-xl">Índice</h2>
				<ul className="p-6">
					<div className="space-y-4">
						<li className="text-light-green text-lg">Fonte</li>
						<p className="ml-10">Alterar a fonte dos frames do site</p>
					</div>
					<div className="space-y-4 mt-5">
						<li className="text-light-green text-lg">Users</li>
						<p className="ml-10">Ver os usuários do sistema</p>
					</div>
				</ul>
			</div>
		</div>
	);
}