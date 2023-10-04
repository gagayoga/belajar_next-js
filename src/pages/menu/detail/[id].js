import Router, { useRouter } from "next/router"


export default function DetailMenu(){
    const router = useRouter()

    console.log('ini isi eouter', router)
    return(
        <section>
            Ini detail menu
        </section>
    )
}