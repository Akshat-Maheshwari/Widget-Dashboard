import "./Modal.css"
type TModalProp={
    open:boolean,
    children:React.ReactNode,
    onClose:()=>void
}

function Modal({open,children,onClose}:TModalProp) {
  if(!open) return null;
  return (
    <div className='modal' onClick={onClose}>
        {children}
    </div>
  )
}

export default Modal