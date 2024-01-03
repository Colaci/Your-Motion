"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth()
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Plans & Unspeakable Future. Welcome to <span className="underline">Your Motion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Your Motion is your personal daily planner where <br/>
                you are free to plan whatever you want.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size = "lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Enter Your Motion
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get Your Motion Free
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}