'use client'

import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";
import verifyUserSession from "@/components/user_session/userSession";

export default function ListaTelefonica() {
	verifyUserSession();
	return (
		<>
			<MainNavBar/>
			<div className=" absolute items-start justify-start w-screen h-auto z-0 mt-[8.75rem] rounded-sm overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray">
				<AuthSheet frame_user="Sem Usuário" frame_pass="Este Power BI não possui acesso"/>
				<h1 className="text-white p-6 text-2xl">LISTA TELEFÔNICA</h1>
				<iframe title="lista_tel" src="https://app.powerbi.com/view?r=eyJrIjoiMzZiOTg3NGYtOTYxOS00ZmZkLWE4M2QtNmNiMDllNTM5MDNlIiwidCI6ImI2MGFjM2UwLTczNGYtNDYwNC04ZmU4LTcwNWY0NGQzNDU4ZCJ9" id="lista_tel" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
			</div>
		</>
	)
}