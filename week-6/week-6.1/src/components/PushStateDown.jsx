import { useState } from "react"

export function PushStateDown() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is raman" />
    </div>
  )
}

export function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("My name is kise");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return <>
    <button onClick={changeTitle}>Clikc the title</button>
    <Header title={firstTitle} />
  </>
}

export function Header({ title }) {
  return <div>
    {title}
  </div>
}

