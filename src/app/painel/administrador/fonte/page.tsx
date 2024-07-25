'use client'

import { FrameForm } from "@/components/admin/frameForms"
import verifyAdmSession from "@/components/user_session/admSession"

export default function Fonte() {
	verifyAdmSession();
	return (
		<div className="flex items-center justify-center flex-col">
			<h1 className="text-2xl text-start">Alterar fonte de dados</h1>	
			<FrameForm/>
		</div>
	)
}