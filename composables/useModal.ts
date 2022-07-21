export default function () {
  const userModal = useState('modal', () => ({
    isOpen:false,
   }))

  const openModal = () =>{
    userModal.value.isOpen = true;
  }

  const closeModal =  () =>{
    userModal.value.isOpen = false;

  }

  return {
    userModal,
    openModal,
    closeModal,
  }
}