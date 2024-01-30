"use client";

import Image from "next/image";
import Link from "next/link";

import {Button} from "@/components/ui/button"

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src="/swimming-ring.svg" alt="error"
        height="300"
        width="300"
        className="dark:hidden"
      />
      <Image src="/swimming-ring-dark.svg" alt="error"
        height="300"
        width="300"
        className="hidden dark:block"
      />
      <h2 className="text-xl font-medium">
        Something went wrong!
      </h2>
      <Button asChild>
        <Link href="/documents">
          Go back to documents
        </Link>
      </Button>
    </div>
  )
}

export default Error;