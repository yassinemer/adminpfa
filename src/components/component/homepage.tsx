
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose, DrawerFooter, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image"

export function homepage() {
  return (
    <main>
      <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-950">
        <div className="container mx-auto flex flex-col-reverse items-center gap-8 px-4 md:flex-row md:gap-12 lg:gap-20">
          <div className="flex flex-1 flex-col items-start gap-6">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Discover the latest trends in fashion
            </h1>
            <p className="text-gray-600 dark:text-gray-400 md:text-lg">
              Explore our curated collection of stylish and high-quality products for all your needs.
            </p>
            <Button className="w-full sm:w-auto" size="lg">
              Shop Now
            </Button>
          </div>
          <div className="flex flex-1 justify-center">
            <Image
              alt="Hero Product"
              className="max-w-full rounded-lg shadow-lg"
              height="500"
              src="/placeholder.svg"
              style={{
                aspectRatio: "500/500",
                objectFit: "cover",
              }}
              width="500"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Products</h2>
            <Link className="text-sm font-medium text-primary hover:underline" href="#">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">New Arrivals</h2>
            <Link className="text-sm font-medium text-primary hover:underline" href="#">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <Image
                alt="Product Image"
                className="aspect-square w-full rounded-t-md object-cover"
                height="300"
                src="/placeholder.svg"
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p className="text-gray-600 dark:text-gray-400">$49.99</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
