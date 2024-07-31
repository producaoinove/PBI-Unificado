'use client'

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
	SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info } from 'lucide-react';
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

type Frame = {
	frame_user: string,
	frame_pass: string
}

export default function AuthSheet(frame: Frame) {
	const [isLoading, setIsLoading] = useState<boolean>(false)
  	const [error, setError] = useState<string | null>(null)
	const { toast } = useToast()
	const [isPassShow, setPassShow] = useState<boolean>(false)

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
					toast({
						title: "Usuário Autenticado com sucesso! ✅",
					})
					setPassShow(true)
				} else {
					toast({
						title: "Credenciais incorretas, tente novamente! ❌",
						description: "Usuário ou senha incorretos!",
					})
					setPassShow(false)
					
				}
			} catch (error) {
				toast({
					title: "Erro interno no servidor, tente novamente mais tarde! 🚧",
					description: "Erro na conexão do servidor.",
				})
				setPassShow(false)
			}
			finally {
				setIsLoading(false)
			}
		}		
	}

	return (
		<div className="flex items-end justify-end p-6">
			<Sheet>
				<SheetTrigger className="bg-light-green rounded-md w-14 h-9 fixed flex items-center justify-center"><Info/></SheetTrigger>
				<SheetContent className="space-y-10 w-1/2">
					<SheetHeader>
						<SheetTitle>Acesso PowerBI 🖥️</SheetTitle>
						<SheetDescription>
							Para fins de segurança, insira seu usuário abaixo para verificar o acesso para este powerBI.
						</SheetDescription>
					</SheetHeader>
					<Form {...form}>
						<form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 max-tablet:p-32 max-tablet:space-y-7" method="post">
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-mat-black">Usuário</FormLabel>
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
										<FormLabel className="text-mat-black">Senha</FormLabel>
										<FormControl>
										<Input placeholder="Senha" {...field} className="text-gray h-11" type="password"/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex items-center justify-end">	
								<SheetClose asChild>
									<Button type="button" className="mb-8 bg-red-600 hover:bg-red-800 m-6 text-center">Fechar</Button>
								</SheetClose>
								<Button type="submit" disabled = {isLoading} className="bg-dark-green text-full-white hover:bg-green-800">
									{ isLoading ? <div className="border-white h-5 w-5 animate-spin rounded-full border-4 border-t-light-green" /> : 'Autenticar'}
								</Button>
							</div>
							{
								isPassShow ?
								<div className="transition duration-75 transform animate-accordion-up translate-x-0  w-auto h-32 bg-mat-white  rounded-md border-2 border-slate-200 shadow-sm grid grid-cols-1 items-center">	
									<div className="flex items-center justify-center">
										{ isPassShow ? <div className="text-wrap flex items-center justify-center w-auto"><span>Usuário: {frame.frame_user}</span></div> : ''}
									</div>
									<div className="flex items-center justify-center">
										{ isPassShow ? <div className="text-wrap flex items-center justify-center w-auto"><span>Senha: {frame.frame_pass}</span></div> : ''}
									</div>
								</div>
								: ''
							}
						</form>
					</Form>					
				</SheetContent>
			</Sheet>
		</div>
	);
}