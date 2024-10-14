import { Input } from "../ui/input"

export default function EmailComponent() {
    return(
        <div className="max-w-[500px]">
            <p className="text-h3 text-headers mb-[9px] md:mb-[9px]">E-mail для отправки чека</p>
            <Input/>
        </div>
    )
}