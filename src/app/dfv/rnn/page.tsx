'use client'

import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";
import verifyUserSession from "@/components/user_session/userSession";
import { useEffect, useState } from "react";
import getTokenById from "@/components/token/getToken";

export default function dfv_rnn() {
	verifyUserSession();
	const [token, getToken] = useState<any>(null)

	const frame = JSON.stringify({
		frame_name: "dfv_rnn"
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
				<AuthSheet frame_user="1050293" frame_pass="1 - 745 | 2 - 856"/>
				<h1 className="text-white p-6 text-2xl">DFV RNN</h1>
				<iframe title="dfv_rnn" src={token} id="dfv_rnn" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
			</div>
		</>
	)
}