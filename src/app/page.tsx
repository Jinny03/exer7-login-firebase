import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-home-background">
  <span className="text-3xl text-white font-sans font-semibold p-3 rounded-lg">Welcome to Home Page</span>
    </div>
  )
}
