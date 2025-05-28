import { useState } from "react"
import { Modal } from "../Modal"

export const Cart = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>Cart</button>
      {<Modal open={showModal} onClose={() => setShowModal(false)}></Modal>}
    </>
  )
}
