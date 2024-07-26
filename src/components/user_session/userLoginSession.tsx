'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function verifyUserLoginSession() {
	const router = useRouter();
	useEffect(() => {
		const local_session = localStorage.getItem('user_auth')
		if (local_session) {
			router.push('/');
		}
	}, [])
}