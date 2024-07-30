'use client'

import verifyAdmSession from "@/components/user_session/admSession";
import React, { useEffect, useState } from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
  
interface User {
	user_id: number,
	usuario: string,
	token_api: string,
	cargo: string
}

export default function Users() {
	verifyAdmSession();
	const [userList, setUserList] = useState<User[]>([]);
	
		const getUsers = async () => {
			const api_url = process.env.NEXT_PUBLIC_API_URL;
			const response = await fetch(`${api_url}/api/get_users`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			return data;
		};
	
		useEffect(() => {
			getUsers().then(users => {
				setUserList(users);
			});
		}, []);

	return (
		<div>
			<div className="rounded-sm h-20 max-tablet:p-2">
				<h1 className="text-xl">Visualizar usuários</h1>
			</div>
			<div className="flex items-center justify-center rounded-md border">
				<Table className="w-700 rounded-md border-separate border-white border-1 max-tablet:w-auto  max-mobile:border-none">
					<TableCaption>Lista de Usuários do PBI Unificado.</TableCaption>
					<TableHeader className="text-base bg-dark-green rounded-md border">
						<TableRow className="hover:bg-mat-white">
							<TableHead className="w-[100px] text-slate-800">Id</TableHead>
							<TableHead className="text-slate-800 ">Usuário</TableHead>
							<TableHead className="text-slate-800">Cargo</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody className="bg-gray rounded-md">
						{userList.map((user : User) => (
							<TableRow key={user.user_id} className="hover:bg-green-400 hover:text-mat-black">
								<TableCell className="font-medium">{user.user_id}</TableCell>
								<TableCell>{user.usuario}</TableCell>
								<TableCell>{user.cargo}</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						{/* <TableRow>
							<TableCell colSpan={3}>Total</TableCell>
							<TableCell className="text-right">$2,500.00</TableCell>
						</TableRow> */}
					</TableFooter>
				</Table>
				{/* {user.map((user) => ())} */}
			</div>
		</div>
	)
}