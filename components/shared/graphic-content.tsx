import Image from "next/image"

export default function GraphicContent() {
    return(
        <div>
            <Image
                src="/logo.svg"
                width={138}
                height={44}
                alt="logo"
            />
        </div>
    )
}