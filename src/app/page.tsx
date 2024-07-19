import { MainNavBar } from "@/components/navbar/navbar";
import { HelpCard } from "@/components/home/helpCard";

export default function Home() {
  return (
	<>
		<MainNavBar/>
		<main className="flex min-h-screen flex-col items-center justify-center">
			<div className="bg-mat-black bg-opacity-30 w-screen h-[38.75rem] z-0 rounded-xl mt-48 p-7 overflow-y-auto scrollbar">
				<h1 className="text-white text-3xl mb-2 w-auto h-auto border-b-2 border-light-green">PBI Unificado</h1>
				<p className="mt-4 w-auto h-auto text-white text-lg mb-5">Lugar centralizado dos PowerBI contendo: DFV, Lista Telefônica, InfoMEI e Ofertas</p>
				
				<div className="bg-neutral-900 border-2 border-gray rounded-md w-full h-[18.75rem] text-white p-4 overflow-y-auto scrollbar scrollbar-thumb-gray">
					<div className="text-xl text-light-green">
						<h1>DFV</h1>
						<HelpCard title="DFV RSE" content="Verificar viabilidade para a regional RSE (ES, MG, RJ, SP)."/>
						<HelpCard title="DFV RNN" content="Verificar viabilidade para a regional RNN (AL, AM, AP, BA, CE, MA, PA, PB, PE, PI, RN, RR, SE)."/>
						<HelpCard title="DFV RCS: CENTRO-OESTE" content="Verificar viabilidade para a regional RCS: CENTRO-OESTE (AC, DF, GO, MS, MT, RO, TO)."/>
						<HelpCard title="DFV RCS: SUL" content="Verificar viabilidade para a regional RCS: SUL (PR, RS, SC)."/>
					</div>
				</div>

				<div className="bg-neutral-900 border-2 border-gray rounded-md w-full h-[18.75rem] text-white p-4 mt-5">
					<div className="text-xl text-light-green">
						<h1>Padrão Inove</h1>
						<HelpCard title="OFERTAS" content="Ofertas correntes em cada UF e Municipio."/>
						<HelpCard title="LISTA TELEFÔNICA" content="Puxar dados a partir do CNPJ, Razão Social ou Telefone."/>
					</div>
				</div>
			</div>
		</main>
	</>
  );
}
