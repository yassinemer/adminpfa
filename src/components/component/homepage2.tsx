
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DrawerTrigger, DrawerTitle, DrawerDescription, DrawerHeader, DrawerClose, DrawerFooter, DrawerContent, Drawer } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardContent, CardFooter, Card } from "@/components/ui/card"

export function homepage2() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950 dark:border-b dark:border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Store</span>
          </Link>
          <div className="flex flex-1 items-center justify-center">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full rounded-md border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50"
                placeholder="Search products..."
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className="hidden text-sm font-medium hover:text-primary dark:text-gray-400 dark:hover:text-gray-50 md:block"
              href="#"
            >
              Categories
            </Link>
            <Drawer>
              <DrawerTrigger asChild>
                <div className="relative">
                  <ShoppingCartIcon className="h-6 w-6" />
                  <Badge className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">
                    3
                  </Badge>
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Your Cart</DrawerTitle>
                  <DrawerDescription>Review and manage your cart items.</DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-6">
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Product Image"
                        className="rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "64/64",
                          objectFit: "cover",
                        }}
                        width="64"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">Product Name</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">$49.99</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost">
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                        <span>1</span>
                        <Button size="icon" variant="ghost">
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button size="icon" variant="ghost">
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        alt="Product Image"
                        className="rounded-md object-cover"
                        height="64"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "64/64",
                          objectFit: "cover",
                        }}
                        width="64"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">Another Product</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">$29.99</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost">
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                        <span>2</span>
                        <Button size="icon" variant="ghost">
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button size="icon" variant="ghost">
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium">$79.98</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Shipping</span>
                      <span className="font-medium">$5.00</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between font-medium">
                      <span>Total</span>
                      <span>$84.98</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1">Checkout</Button>
                    <DrawerClose asChild>
                      <Button className="flex-1" variant="outline">
                        Continue Shopping
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                  size="icon"
                  variant="ghost"
                >
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
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
              <img
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
                <img
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
                <img
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
                <img
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
                <img
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
                <img
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
                <img
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
                <img
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
                <img
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
                <img
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
                <img
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
    </>
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
