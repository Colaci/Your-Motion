"use client";

import { Id } from "@/convex/_generated/dataModel";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator
 } from "@/components/ui/dropdown-menu";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
interface MenuProps{
  documentId: Id<"documents">;
}
export const Menu = ({documentId}:MenuProps)=>{
  const router = useRouter()
  const {user} = useUser()

  const archive = useMutation(api.documents.archive)
  
  return (
    <div>
      Menu
    </div>
  )
}