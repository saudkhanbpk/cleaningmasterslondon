// 'use client'; // Ensure this is a Client Component

// import { useRouter } from 'next/navigation'; 
// import * as Dialog from "@radix-ui/react-dialog";

// export default function ModelPage() {
//   const router = useRouter();

//   return (
//     <Dialog.Root open onOpenChange={() => router.back()}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
//         <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
//           <Dialog.Title className="text-xl font-semibold">Custom Quote</Dialog.Title>
//           <Dialog.Description className="mt-2 text-gray-600">
//             Get a custom quote for your project.
//           </Dialog.Description>

//           <div className="mt-4">
//             <p className="text-sm text-gray-500">Fill in your details...</p>
//           </div>

//           <div className="mt-4 flex justify-end">
//             <Dialog.Close asChild>
//               <button className="px-4 py-2 bg-gray-300 rounded-md">Close</button>
//             </Dialog.Close>
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }
