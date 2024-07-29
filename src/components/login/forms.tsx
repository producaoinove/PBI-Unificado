'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useRouter } from 'next/navigation';
import React, { useState, FormEvent } from 'react';
import { useToast } from "@/components/ui/use-toast"
import * as dotenv from "dotenv";
dotenv.config();

export function LoginForm() {
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
		entry: z
		.string({ required_error: "Selecione uma entrada" })
		.min(1, { message: "Tipo de entrada não pode ser vazio" })
	})
	
	const form = useForm<z.infer<typeof userFormSchema>>({
		resolver: zodResolver(userFormSchema),
		defaultValues: {
			username: "",
			password: "",
			entry: ""
		},
	})
	async function onSubmit(values: z.infer<typeof userFormSchema>) {
		setIsLoading(true)
		setError(null)
		if (values.username != ''||  values.password != '' || values.entry != '') {
			try {
				const api_url = process.env.NEXT_PUBLIC_API_URL;
				const response = await fetch(`${api_url}/api/auth`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(values)
				})
				const data = await response.json()
				const userAuth = data['auth_session']
				const user_name = data['username']
				  
				if (userAuth) {			
					if (values.entry === '2') {
						const response = await fetch(`${api_url}/index`, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
							body: new URLSearchParams({
								'user': values.username,
								'password': values.password
							})
						});
						if (response.status === 401) {
							form.setError("username", {
								message: "O usuário não possui privilégios administrativos"
                            });
						} else {
							const form = document.createElement('form');
							form.method = 'POST';
							form.action = `${api_url}/index`;
							const input1 = document.createElement('input');
							input1.type = 'hidden';
							input1.name = 'user';
							input1.value = values.username;
							const input2 = document.createElement('input');
							input2.type = 'hidden';
							input2.name = 'password';
							input2.value = values.password;
							form.appendChild(input1);
							form.appendChild(input2);
							document.body.appendChild(form);
							form.submit();
						}
					} else {
						toast({
							title: "Login realizado com sucesso! ✅",
							description: "Usuário autenticado!",
							color: "gray"
						})
						localStorage.setItem('user_auth', 'true')
						localStorage.setItem('user_name', user_name.toString())
						if (values.entry == '1') {
							router.push('/');
						}
						else if (values.entry == '3') {
							if (user_name == 'producao.inove') {
								localStorage.setItem('adm_auth', 'true')
								router.push('/painel/administrador')
							}
						}
					}
				}
				else {
					toast({
						variant: "destructive",
						title: "Credenciais incorretas, tente novamente! ❌",
						description: "Usuário ou senha incorretos!",
					})
				}
			} catch (error) {
				toast({
					variant: "destructive",
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
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 max-tablet:p-32 max-tablet:space-y-7" method="post">
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
			<FormField
				control={form.control}
				name="entry"
				render={({ field }) => (
				<FormItem>
					<FormLabel className="text-full-white">Tipo de Entrada</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
						<FormControl>
							<SelectTrigger className="w-full h-11 text-mat-black">
							<SelectValue placeholder="Selecione uma entrada" />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							<SelectItem value="1">1 - PBI unificado</SelectItem>
							<SelectItem value="2">2 - Migrador</SelectItem>
							<SelectItem value="3">3 - Administrativo</SelectItem>
						</SelectContent>
					</Select>
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
