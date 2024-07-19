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
import dotenv from 'dotenv';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

dotenv.config()

const UserDataMock = {
	'username' : 'teste',
	'password' : 'teste123',
	'entry' : '1 - PBI unificado',
}

export function LoginForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
  	const [error, setError] = useState<string | null>(null)
	const router = useRouter();
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
		// const userName = UserDataMock.username
		// const userPass = UserDataMock.password
		// const userEntry = UserDataMock.entry
		// if (values.username == userName ||  values.password == userPass || values.entry == userEntry) {
		//     console.log(values)
		//     router.push('/')
		// }
		if (values.username != ''||  values.password != '' || values.entry != '') {
			try {
				const api_url = 'http://168.121.7.194:5001'
				console.log(JSON.stringify(values))
				const response = await fetch(`${api_url}/api/auth`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(values)
				  })
				  const data = await response.json()
				  const userAuth = data['auth_session']
				  
				if (userAuth) {
					toast.success('Login realizado com sucesso! ✅', {
						position: "bottom-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
					});
					// router.push('/')
				}
				else {
					toast.error('Credenciais incorretas, tente novamente! ❌', {
						position: "bottom-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
						transition: Bounce,
					});
				}
				console.log(data['username'])
			} catch (error) {
				console.log(error)
			}
			finally {
				setIsLoading(false)
			}
		}		
	}

	return (
		<Form {...form}>
		<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 max-tablet:p-32 max-tablet:space-y-7">
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
							<SelectItem value="2">2 - Administrativo</SelectItem>
						</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
				)}
			/>
			<div className="flex items-center justify-center">
				<Button type="submit" disabled = {isLoading} className="bg-dark-green text-full-white w-72 hover:bg-mat-black font-medium text-xl">
					{ isLoading ? <div className="border-white h-5 w-5 animate-spin rounded-full border-4 border-t-light-green" /> : 'Entrar'}</Button>
			</div>
		</form>
	  </Form>
	)
}
