'use client'

import { BeatLoader } from "react-spinners"
import { useCallback, useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { FormError } from "@/components/ui/form/formError"
import { FormSuccess } from "@/components/ui/form/formSuccess"
import { newVerification } from "@/actions/verification"

export function VerificationForm() {
    const searchParams = useSearchParams()
    const router = useRouter();
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const token = searchParams.get('token')

    const onSubmit = useCallback(() => {
        if (success || error) return;
        if (!token) {
            setError('Missing token!')
            return
        }

        newVerification(token)
            .then((data) => {
                if (data.success) {
                    setSuccess(data.success)
                    setTimeout(() => {
                        router.push('/signin')
                    }, 3000)
                } else {
                    setError(data.error)
                    setTimeout(() => {
                        router.push('/')
                    }, 3000)
                }
            })
            .catch(() => {
                setError('Something went wrong!')
            })
    }, [token, success, error, router])

    useEffect(() => {
        onSubmit()
    }, [onSubmit])

    return (
        <div className="flex items-center w-full justify-center">
            {!success && !error && (
                <BeatLoader />
            )}
            <FormSuccess message={success} />
            {!success && (
                <FormError message={error} />
            )}
        </div>
    );
}