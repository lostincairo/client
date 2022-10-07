import ConnectWallet from "./ConnectWallet/Index";

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Blog", href: "#" },
  { name: "Documentation", href: "#" },
  { name: "About Us", href: "#" },
];

export default function Header() {
  return (
    <header className="">
      <nav className=" max-w-xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6 lg:border-none">
          <div className="flex w-full items-center">
            <a href="#">
              <span className="sr-only">Lost in Cairo</span>
              <img className="h-10 w-auto" src="logo_Main.png" alt="" />
            </a>
            <div className="ml-10 hidden grow space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white @ver:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}

            </div>
            <div className=" hidden grow space-x-8 lg:block">
                <ConnectWallet />
              </div>
          </div>
        </div>
        <div className="flex justify-between w-full space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
