import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";

export default function dfv_rnn() {
	return (
		<>
			<MainNavBar/>
			<div className=" absolute items-start justify-start w-screen h-auto z-0 mt-[8.75rem] rounded-sm overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray">
				<AuthSheet frame_user="1050293" frame_pass="1 - 745 | 2 - 856"/>
				<h1 className="text-white p-6 text-2xl">DFV RNN</h1>
				<iframe title="dfv_rnn" src="https://app.powerbi.com/view?r=eyJrIjoiYmI4YzkzNDEtNjk1NC00YTJkLWJkYjgtNDA3ZDk2Y2U0NjE4IiwidCI6IjA2Y2IwNGM2LTAwNDktNDNlZC04YWNiLTQ1YWFmNTk0NDRiZCJ9" id="dfv_rnn" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
			</div>
		</>
	)
}