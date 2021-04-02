import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
     Deploie de Zina n° 1.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
