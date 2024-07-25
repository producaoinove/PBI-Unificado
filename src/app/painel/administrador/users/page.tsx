'use client'

import verifyAdmSession from "@/components/user_session/admSession"

export default function Users() {
	verifyAdmSession();
	return (
		<h1>Users</h1>
	)
}