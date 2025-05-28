import s from "./Modal.module.css"
import { ReactNode } from "react"

type Props = {
  open: boolean
  onClose?: () => void
  modalTitle: string
  children: ReactNode
}

export const Modal = ({ onClose, open, modalTitle, children }: Props) => {
  return (
    <>
      {open && (
        <div className={s.overlay}>
          <div className={s.content}>
            <h3 className={s.title}>{modalTitle}</h3>
            <hr />
            {children}
            <button className={s.closeIcon} onClick={onClose}>
              x
            </button>
          </div>
        </div>
      )}
    </>
  )
}

//<h3 className={s.title}>Cart</h3>
//             <hr />
//             <ul>
//               <li>1 товар</li>
//               <li>2 товар</li>
//               <li>3 товар</li>
//             </ul>
