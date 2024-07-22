import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";

export default function dfv_rse() {
	return (
		<>
			<MainNavBar/>
			<main className="flex min-h-screen flex-col items-center justify-center w-full">
				<div className="absolute items-start justify-start w-screen h-[38.75rem] z-0 overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray mt-32">
					<AuthSheet/>
					<h1 className="text-white p-6 text-2xl">DFV RSE</h1>
					<iframe title="dfv_rse" src="https://app.powerbi.com/view?r=eyJrIjoiMjAzODkwOTQtOTRiOS00OGM0LTgzMzktOWE4YzZjNzdiNmUyIiwidCI6IjljZTY2NzI4LThmZmQtNDEzNS1hZTFkLTNiMmUyNjVlMjhlOSJ9" id="dfv_rse" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
				</div>
			</main>
		</>
	)
}