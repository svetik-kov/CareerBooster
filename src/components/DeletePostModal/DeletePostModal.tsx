import { ModalRadix } from "../Modal/ModalRadix/ModalRadix.tsx"
import { Button } from "../Button/Button.tsx"

type Props = {
  open: boolean
  onClose: () => void
}

export const DeletePostModal = ({ open, onClose }: Props) => {
  return (
    <ModalRadix open={open} onClose={onClose} modalTitle={"Delete Post"}>
      Are you sure you want to delete this post?
      <div>
        {/*Будем использовать обычные кнопки*/}
        {/*<button onClick={onClose}>Yes</button>*/}
        <Button onClick={onClose} variant={"primary"}>
          Yes
        </Button>
        <Button onClick={onClose} variant={"secondary"}>
          No
        </Button>
      </div>
    </ModalRadix>
  )
}
