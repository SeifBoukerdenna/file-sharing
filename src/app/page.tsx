'use client'

import FileDropzone from '@/components/FileDropzone'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <>
      <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
      </button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <FileDropzone />
      </div>
    </>
  )
}