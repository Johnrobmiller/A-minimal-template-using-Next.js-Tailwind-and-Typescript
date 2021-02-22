import Head from 'next/head'

type deleteThisType = 'Testing Typescript to make sure it is working.'
const deleteThisString: deleteThisType = 'Testing Typescript to make sure it is working.'

export default function Home() {
  return (
    <div>
      <h1 className=' bg-blue-300'>Testing Tailwind to make sure it is working.</h1>
      <p>{deleteThisString}</p>
    </div>
  )
}
