import { Menu } from '@headlessui/react';

// Add this to your Navbar component
<Menu as="div" className="relative">
  <Menu.Button className="text-gray-700 hover:text-pink-500 px-3 py-2">
    Settings
  </Menu.Button>
  <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={handleClearData}
          className={`${
            active ? 'bg-pink-50 text-pink-600' : 'text-gray-700'
          } group flex w-full items-center px-4 py-2 text-sm`}
        >
          Clear All Data
        </button>
      )}
    </Menu.Item>
  </Menu.Items>
</Menu>