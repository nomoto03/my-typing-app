import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>My Typing App!</h1>
      <Link href="/game">Play!!</Link>
    </div>
  )
}
