'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function VerifyUserSession() {
	const router = useRouter();
	useEffect(() => {
		const local_session = localStorage.getItem('user_auth')
		if (local_session != 'true') {
			router.push('/login')
			localStorage.clear()
		} else {
			setTimeout(() => {
				localStorage.setItem('user_auth', 'false');
			}, 6 * 60 * 60 * 1000);
		}
	}, [])
}
