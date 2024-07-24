'use client'

import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";
import verifyUserSession from "@/components/user_session/userSession";

export default function dfv_rcs_sul() {
	verifyUserSession();
	return (
		<>
			<MainNavBar/>
			<div className=" absolute items-start justify-start w-screen h-auto z-0 mt-[8.75rem] rounded-sm overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray">
				<AuthSheet frame_user="PARCEIRO" frame_pass="1 - 6253 | 2 - 7981"/>
				<h1 className="text-white p-6 text-2xl">DFV RCS - SUL</h1>
				<iframe title="dfv_rcs_sul" src="https://app.powerbi.com/view?r=eyJrIjoiY2FjMjUxNTktNGMxNS00ODAyLTkwOWMtMDZjMmRhN2U5NTBlIiwidCI6IjllN2M3ZGNmLTEwMmUtNDU4ZS05MTczLTk5OWFjYTU5NjRkNSJ9" id="dfv_rcs_sul" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
			</div>
		</>
	)
}