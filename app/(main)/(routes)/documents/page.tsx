"use client"
import Image from "next/image";
import {useUser} from "@clerk/clerk-react"
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const DocumentsPage = () => {
  const {user} = useUser()
  const create = useMutation(api.documents.create)
  
  const onCreate = () => {
    const promise = create({title: 'Untitled'})
  }

  return (
  <div className="h-full flex flex-col items-center justify-center space-y-4">
    <Image src="/fish.svg"
      width="300"
      height="300"
      alt="Empty"
      className="dark:hidden"
    />
    <Image src="/fish-dark.svg"
      width="300"
      height="300"
      alt="Empty"
      className="hidden dark:block"
    />
    <h2 className="text-lg font-medium">
      Welcome to {user?.username}&apos;s Motion
    </h2>
    <Button>
      <PlusCircle className="h-4 w-4 mr-2"/>
      Create a note
    </Button>
  </div> );
}
 
export default DocumentsPage;