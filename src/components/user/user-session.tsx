'use client'

import { useRouter } from 'next/navigation';

export function verifyUserSession() {
	const router = useRouter();
	const local_session = localStorage.getItem('user_auth')
	if (local_session != 'true') {
		router.push('/login');
	}
}