import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader
} from "../../../components/ui/alert-dialog"
import Image from 'next/image'
  
const Loading = ({loading}) => {
  return (

<AlertDialog open={loading}>
 
  <AlertDialogContent>
    <AlertDialogHeader>
    
      <AlertDialogDescription>
        <div className='flex items-center flex-col py-12'>
            <Image src={'/LoadingCourse.gif'} width={100} height={100} />
            <h2>Please wait... Ai working on your Course.</h2>
        </div>
      </AlertDialogDescription>
    </AlertDialogHeader>
    
  </AlertDialogContent>
</AlertDialog>

  )
}

export default Loading