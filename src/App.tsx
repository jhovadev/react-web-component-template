import { Button } from "@/components/ui/button"

export default function App({ title }: { title: string }) {
  return (
    <Button>foo {title}</Button>
  )
}