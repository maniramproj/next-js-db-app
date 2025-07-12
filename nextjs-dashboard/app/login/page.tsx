import Link from "next/link";

export default function Page() {
    return (
        <>
            <div>Welcome to Login!</div>
            <Link href={'/'} className='text-sm font-medium text-blue'>
                Go to Home Page
            </Link>
        </>
    )
}