'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function VerifyUserLoginSession() {
	const router = useRouter();
	useEffect(() => {
		const local_session = localStorage.getItem('user_auth')
		if (local_session == 'true') {
			router.push('/');
		}
	}, [])
}