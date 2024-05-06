import Image from "next/image";

export default function TopLeftImg() {
    return (
        <div className="absolute top-0 left-0 opacity-50 w-[200px] mix-blend-color-dodge">
            <Image src='/top-left-img.png' width={400} height={400} alt="top left" />
        </div>
    )
}
