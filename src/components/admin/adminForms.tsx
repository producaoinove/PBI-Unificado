'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';
import React, { useState, FormEvent } from 'react';
import { useToast } from "@/components/ui/use-toast"
import * as dotenv from "dotenv";
dotenv.config();

export function AdminForms() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
  	const [error, setError] = useState<string | null>(null)
	const router = useRouter();
	const { toast } = useToast()

	const userFormSchema = z.object({
		username: z.string().min(2, {
		  message: "Nome de usuário precisa ser maior que 2 digitos.",
		}),
		password: z.string().min(2, {
		  message: "Senha  precisa ser maior que 2 digitos.",
		}),
	})
	
	const form = useForm<z.infer<typeof userFormSchema>>({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	})
	async function onSubmit(values: z.infer<typeof userFormSchema>) {
		setIsLoading(true)
		setError(null)
		if (values.username != ''||  values.password != '') {
			try {
				const api_url = process.env.NEXT_PUBLIC_API_URL;
				const response = await fetch(`${api_url}/api/users`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(values)
				  })
				const data = await response.json()
				const userAuth = data['role']
				  
				if (userAuth == 'administrador') {		
					toast({
						title: "Login realizado com sucesso! ✅",
						description: "Usuário autenticado!",
					})
					localStorage.setItem('adm_auth', 'true')
					router.push('/painel/administrador');
				}
				else {
					toast({
						title: "Credenciais incorretas ou permissões não suficientes, tente novamente! ❌"
					})
				}
			} catch (error) {
				toast({
					title: "Erro interno no servidor, tente novamente mais tarde! 🚧",
					description: "Erro na conexão do servidor.",
				})
			}
			finally {
				setIsLoading(false)
			}
		}		
	}

	return (
		<Form {...form}>
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 p-8 max-tablet:p-32 max-tablet:space-y-7" method="post">
			<FormField
				control={form.control}
				name="username"
				render={({ field }) => (
				<FormItem>
					<FormLabel className="text-full-white">Usuário</FormLabel>
					<FormControl>
					<Input placeholder="Nome de usuário" {...field} className="text-gray h-11 max-tablet:max-w-screen-mobile"/>
					</FormControl>
					<FormMessage />
				</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name="password"
				render={({ field }) => (
				<FormItem>
					<FormLabel className="text-full-white">Senha</FormLabel>
					<FormControl>
					<Input placeholder="Senha" {...field} className="text-gray h-11" type="password"/>
					</FormControl>
					<FormMessage />
				</FormItem>
				)}
			/>
			<div className="flex items-center justify-center">
				<Button type="submit" disabled = {isLoading} className="bg-dark-green text-full-white w-72 hover:bg-mat-black font-medium text-xl">
					{ isLoading ? <div className="border-white h-5 w-5 animate-spin rounded-full border-4 border-t-light-green" /> : 'Entrar'}
				</Button>
			</div>
		</form>
	  </Form>
	)
}
