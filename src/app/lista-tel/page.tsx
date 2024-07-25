'use client'

import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";
import verifyUserSession from "@/components/user_session/userSession";
import { useEffect, useState } from "react";
import getTokenById from "@/components/token/getToken";

export default function ListaTelefonica() {
	verifyUserSession();
	const [token, getToken] = useState<any>(null)

	const frame = JSON.stringify({
		frame_name: "lista_tel"
	})
	useEffect(() => {
		async function tokenApi() {
			const frame_token = await getTokenById(frame);
			getToken(frame_token)
		}
		tokenApi()
	  }, []);
	return (
		<>
			<MainNavBar/>
			<div className=" absolute items-start justify-start w-screen h-auto z-0 mt-[8.75rem] rounded-sm overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray">
				<AuthSheet frame_user="Sem Usuário" frame_pass="Este Power BI não possui acesso"/>
				<h1 className="text-white p-6 text-2xl">LISTA TELEFÔNICA</h1>
				<iframe title="lista_tel" src={token} id="lista_tel" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
			</div>
		</>
	)
}