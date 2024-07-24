'use client'


import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";
import verifyUserSession from "@/components/user_session/userSession";

export default function dfv_rse() {
	verifyUserSession();
	return (
		<>
			<MainNavBar/>
			<div className=" absolute items-start justify-start w-screen h-auto z-0 mt-[8.75rem] rounded-sm overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray">
				<AuthSheet frame_user="Sem Usuário" frame_pass="Este Power BI não possui acesso"/>
				<h1 className="text-white p-6 text-2xl">DFV RSE</h1>
				<iframe title="dfv_rse" src="https://app.powerbi.com/view?r=eyJrIjoiMjAzODkwOTQtOTRiOS00OGM0LTgzMzktOWE4YzZjNzdiNmUyIiwidCI6IjljZTY2NzI4LThmZmQtNDEzNS1hZTFkLTNiMmUyNjVlMjhlOSJ9" id="dfv_rse" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
			</div>
		</>
	)
}