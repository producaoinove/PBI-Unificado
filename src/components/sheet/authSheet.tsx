import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
	SheetClose,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Info } from 'lucide-react';

export default function AuthSheet() {
	return (
		<div className="flex items-end justify-end p-6">
			<Sheet>
				<SheetTrigger className="bg-light-green rounded-md w-14 h-9 fixed flex items-center justify-center"><Info/></SheetTrigger>
				<SheetContent className="space-y-10 w-1/2">
					<SheetHeader>
						<SheetTitle>Acesso PowerBI</SheetTitle>
						<SheetDescription>
							Para fins de segurança, insira seu usuário abaixo para verificar o acesso para este powerBI.
						</SheetDescription>
					</SheetHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="username" className="text-right">Usuário</Label>
							<Input id="username" placeholder="Nome de usuário" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="password" className="text-right">Senha</Label>
							<Input id="password" placeholder="Digite sua Senha" className="col-span-3" />
						</div>
					</div>
					<div className="flex items-center justify-end">	
						<SheetClose asChild>
							<Button type="button" className="mb-8 bg-red-600 hover:bg-red-800 m-6 text-center">Fechar</Button>
						</SheetClose>
						<Button type="submit" className="text-center bg-light-green hover:bg-dark-green">Autenticar</Button>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}