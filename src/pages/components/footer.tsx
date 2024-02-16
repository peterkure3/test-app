export default function Footer() {
    return (
      <footer className="bg-gray-800 py-8 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Logo and Description */}
            <div>
              <img src="/logo.png" alt="Farmhub Logo" className="h-8 mb-4" />
              <p className="mb-4">
                Discover a world of different products on offer that you'd never
                experienced before.
              </p>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200">
                Sign Up
              </button>
            </div>
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-bold mb-4">QUICK LINKS</h2>
              <ul>
                <li>
                  <a href="#">Browse Products</a>
                </li>
                <li>
                  <a href="#">Special Offers & Packages</a>
                </li>
                <li>
                  <a href="#">Farming Tips</a>
                </li>
                <li>
                  <a href="#">Customer Reviews & Ratings</a>
                </li>
                <li>
                  <a href="#">Trips From Farmers</a>
                </li>
              </ul>
            </div>
            {/* Our Services */}
            <div>
              <h2 className="text-xl font-bold mb-4">OUR SERVICES</h2>
              <ul>
                <li>Interact With Farmers</li>
                <li>Browse the Latest Products</li>
                <li>Transaction</li>
                <li>Build Connections</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  