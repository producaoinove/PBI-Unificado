'use client'


import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";
import VerifyUserSession from "@/components/user_session/userSession";
import { useEffect, useState } from "react";
import getTokenById from "@/components/token/getToken";

export default function Dfv_rcs_centro() {
	VerifyUserSession();
	const [token, getToken] = useState<any>(null)

	const frame = JSON.stringify({
		frame_name: "dfv_rcs_centro"
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
				<AuthSheet frame_user="PARCEIRO" frame_pass="1 - 6253 | 2 - 7981"/>
				<h1 className="text-white p-6 text-2xl">DFV RCS - CENTRO OESTE</h1>
				<iframe title="dfv_rcs_centro" src={token} id="dfv_rcs_centro" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
			</div>
		</>
	)
}