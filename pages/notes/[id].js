import { useRouter } from "next/router"

const id = () => {
    const router = useRouter()
    const {id} = router.query;
    return (
        <h1>Hi from {id}</h1>
    )
}

export default id