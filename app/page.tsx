import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-[320px]">
        <h1 className="text-3xl font-bold">Secure ID</h1>

        <div className="flex flex-col w-full gap-4">
          <Button size="lg" variant="default">
            Open Dashboard
          </Button>

          <Button size="lg" variant="secondary">
            QR Auth Flow
          </Button>

          <Button size="lg" variant="outline">
            Native App Auth
          </Button>
        </div>
      </main>

      <footer className="row-start-3 text-sm text-muted-foreground">
        PoC Version
      </footer>
    </div>
  )
}
