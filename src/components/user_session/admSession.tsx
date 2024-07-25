'use client'

import { useRouter } from 'next/navigation';

export default function verifyAdmSession() {
	const router = useRouter();
	const local_session = localStorage.getItem('adm_auth')
	if (local_session != 'true') {
		router.push('/painel/login')
	} else {
		setTimeout(() => {
			localStorage.setItem('user_auth', 'false');
		}, 6 * 60 * 60 * 1000);
	}
}
