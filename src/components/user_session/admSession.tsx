'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function verifyAdmSession() {
	const router = useRouter();
	useEffect(() => {
		const local_session = localStorage.getItem('adm_auth')
		if (local_session != 'true') {
			router.push('/painel/login');
		}
	}, [])
}
