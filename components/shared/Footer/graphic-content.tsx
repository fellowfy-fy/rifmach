import Image from "next/image"

export default function GraphicContent() {
    return(
        <div className="flex flex-col text-left justify-start items-start">
            <Image
                src="/icons/logo.svg"
                width={138}
                height={44}
                alt="logo"
            />
        </div>
    )
}