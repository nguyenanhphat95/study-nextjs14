'use client'
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <h1>Error page</h1>
      <button onClick={reset}>Try again</button>
      {error.message}
    </>
  )
}
