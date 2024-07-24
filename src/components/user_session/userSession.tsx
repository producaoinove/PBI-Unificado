'use client'

import { useRouter } from 'next/navigation';

export default function verifyUserSession() {
	const router = useRouter();
	const local_session = localStorage.getItem('user_auth')
	if (local_session != 'true') {
		router.push('/login')
		localStorage.setItem('user_name', '')
	} else {
		setTimeout(() => {
			localStorage.setItem('user_auth', 'false');
		}, 6 * 60 * 60 * 1000);
	}
}
