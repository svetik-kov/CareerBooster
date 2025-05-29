import * as Dialog from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import s from "./ModalRadix.module.css"

export const ModalRadix = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className={`${s.Button} violet`}>Delete props</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={s.Overlay} />
      <Dialog.Content className={s.Content}>
        <Dialog.Title className={s.Title}>Delete Post</Dialog.Title>
        <hr />
        <Dialog.Description className={s.Description}>Are you sure you want to delete this post?</Dialog.Description>
        {/*  <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="name">
            Name
          </label>
          <input className={s.Input} id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className={s.Fieldset}>
          <label className={s.Label} htmlFor="username">
            Username
          </label>
          <input className={s.Input} id="username" defaultValue="@peduarte" />
        </fieldset>*/}

        <Dialog.Close asChild>
          <button className={`${s.Button} violet`}>Yes</button>
        </Dialog.Close>
        <Dialog.Close asChild>
          <button className={`${s.Button} green`}>No</button>
        </Dialog.Close>

        <Dialog.Close asChild>
          <button className={s.IconButton} aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
