import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useConnectors } from "@starknet-react/core";
import { useDispatch, useSelector } from "react-redux";

const navigation = [
  { name: "Scrolls", href: "#" },
  { name: "How to Play", href: "#" },
  { name: "Social", href: "https://twitter.com/lostincairogame/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="ml-6 flex items-center space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-white"
                          : "text-gray-200  hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
