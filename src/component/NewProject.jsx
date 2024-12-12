import { useRef } from 'react'
import Input from './Input'
import Modal from './Modal';

export default function NewProject({ onAdd }) {
  const modal= useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    // validation ...
    if(
      enteredTitle.trim() === ''||
      enteredDescription.trim() === ''||
      enteredDueDate.trim() === ''
    ){
      //show error modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption='Okay' >
      <h2 className='text-xl font-bold text-stone-700 my-4' >Invalid Input</h2>
      <p className='text-stone-600 mb-4'>Oops...looks like you forgot to enter a value.</p>
      <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field. </p>
    </Modal>
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'>Cancel</button>
        </li>
        <li>
          <button
            className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
            onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} type='text' label='Title' />
        <Input ref={descriptionRef} label='Description' textarea />
        <Input ref={dueDateRef} type='date' label='Due Date' />
      </div>
    </div>
    </>
  )
}