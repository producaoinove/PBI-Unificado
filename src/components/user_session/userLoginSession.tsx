'use client'

import { useRouter } from 'next/navigation';

export default function verifyUserLoginSession() {
	const router = useRouter();
	const local_session = localStorage.getItem('user_auth')
	if (local_session != 'false') {
		router.push('/');
	}
}