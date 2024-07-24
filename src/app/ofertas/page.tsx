'use client'

import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";
import verifyUserSession from "@/components/user_session/userSession";

export default function Ofertas() {
	verifyUserSession();
	return (
		<>
			<MainNavBar/>
			<div className=" absolute items-start justify-start w-screen h-auto z-0 mt-[8.75rem] rounded-sm overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray">
				<AuthSheet frame_user="Sem Usuário" frame_pass="Este Power BI não possui acesso"/>
				<h1 className="text-white p-6 text-2xl">OFERTAS</h1>
					<iframe title="ofertas" src="https://app.powerbi.com/view?r=eyJrIjoiMGZhZmEyZjctYjA3Yi00ZjczLTgwODItY2QxYzA4YzdlNGU1IiwidCI6ImI2MGFjM2UwLTczNGYtNDYwNC04ZmU4LTcwNWY0NGQzNDU4ZCJ9" id="ofertas" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen max-laptop:h-screen desktop:h-[58.75rem] rounded-md"></iframe>
			</div>
		</>
	)
}