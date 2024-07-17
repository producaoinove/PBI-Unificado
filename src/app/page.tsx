import { MainNavBar } from "@/components/navbar/navbar";

export default function Home() {
  return (
    <>
        <MainNavBar/>
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="bg-mat-black w-[71.25rem] h-[38.75rem] z-0 rounded-xl mt-48 p-7 divide-y-2 divide-dark-green">
                <h1 className="text-white text-3xl mb-2 w-auto h-auto">PBI Unificado</h1>
                <p className="mt-4 w-auto h-auto text-white text-lg">Lugar centralizado dos PowerBI contendo: DFV, Lista Telefônica, InfoMEI e Ofertas</p>
            </div>
        </main>
    </>
  );
}
