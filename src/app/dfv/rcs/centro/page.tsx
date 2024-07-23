import { MainNavBar } from "@/components/navbar/navbar"
import AuthSheet from "@/components/sheet/authSheet";

export default function dfv_rcs_centro() {
	return (
		<>
			<MainNavBar/>
			<div className=" absolute items-start justify-start w-screen h-auto z-0 mt-[8.75rem] rounded-sm overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray">
				<AuthSheet frame_user="PARCEIRO" frame_pass="1 - 6253 | 2 - 7981"/>
				<h1 className="text-white p-6 text-2xl">DFV RCS - CENTRO OESTE</h1>
				<iframe title="dfv_rcs_centro" src="https://app.powerbi.com/view?r=eyJrIjoiZDdkMzQ4MTYtYjJmNi00ZmEzLWI5M2QtZTQzYTEzMjU0OGM4IiwidCI6IjllN2M3ZGNmLTEwMmUtNDU4ZS05MTczLTk5OWFjYTU5NjRkNSJ9" id="dfv_rcs_centro" frameBorder="0" allowFullScreen = {true} className="w-screen h-screen rounded-md"></iframe>
			</div>
		</>
	)
}