/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"


export default function Header(){
    return(
        <>
        <header>
            <Link href="/">
            <img src="/images/logo/adidas.svg" width={60} />
            </Link>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
        </header>
        </>
    )
}