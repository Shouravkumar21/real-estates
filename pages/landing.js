import Head from "next/head";
import { useState } from "react";
import {
  FaShoppingCart,
  FaHome,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function Landing() {
  const [activeModal, setActiveModal] = useState(null);
  const [cartCount] = useState(2);
  const [menuOpen, setMenuOpen] = useState(false);

  const floatingButtons = [
    { id: "why-ondrive", label: "Why OneDrive Realty", color: "#8B5CF6", position: { top: "25%", left: "10%" } },
    { id: "halal-funding", label: "Halal Funding", color: "#7C3AED", position: { top: "37%", left: "8%" } },
    { id: "build-2-suit", label: "Build 2 Suit", color: "#D4AF37", position: { top: "52%", left: "12%" } },
    { id: "list-property", label: "List Your Property", color: "#DC2626", position: { bottom: "30%", left: "18%" } },
    { id: "agent-commission", label: "Agent 100% Commission", color: "#1F2937", position: { bottom: "10%", left: "41%" } },
    { id: "cap-ror-reo", label: "CAP-ROR-REO", color: "#DC2626", position: { top: "25%", right: "10%" } },
    { id: "re-blogs", label: "R/E BLOGS", color: "#7F1D1D", position: { top: "37%", right: "8%" } },
    { id: "1031-exchange", label: "1031 Exchange", color: "#EC4899", position: { top: "52%", right: "12%" } },
    { id: "api-leads", label: "API-LEADS-DFLX", color: "#DB2777", position: { bottom: "30%", right: "15%" } },
  ];

  const products = [
    { title: "RESIDENTIAL", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
    { title: "MARINA", image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800&q=80" },
    { title: "AGRICULTURE", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
    { title: "MIX-USE DEVELOPMENT", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" },
    { title: "HIGHRISE BUILDING", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80" }
  ];

  const footerLinks = [
    { label: "Partners", color: "#8B5CF6" },
    { label: "Board Members", color: "#166534" },
    { label: "We Support GF", color: "#1E3A8A" },
    { label: "Connect With Us", color: "#991B1B" },
    { label: "License Regulators", color: "#6B21A8" },
    { label: "Terms & Condition", color: "#92400E" },
    { label: "Obtain Real Estate", color: "#BE185D" },
  ];

  return (
    <>
      <Head>
        <title>OneDrive Realty - Interactive Hub</title>
      </Head>

      {/* TOP BAR */}
      <div className="fixed top-6 right-6 z-50 flex gap-4">
        <button className="relative bg-white rounded-lg p-3 shadow-xl hover:scale-110 transition">
          <FaShoppingCart size={24} className="text-red-600" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {cartCount}
          </span>
        </button>

        <button
          onClick={() => setMenuOpen(true)}
          className="bg-white rounded-lg p-3 shadow-xl hover:scale-110 transition"
        >
          <FaBars size={24} className="text-[#1E3A8A]" />
        </button>
      </div>

      {/* SIDE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex">
          <div className="w-72 bg-white h-full shadow-xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#1E3A8A]">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes size={22} className="text-gray-600" />
              </button>
            </div>

            <ul className="flex flex-col gap-4">
              {floatingButtons.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveModal(item.id);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left py-3 px-4 rounded-lg bg-[#1E3A8A] text-white font-semibold hover:bg-[#2A4FB0] transition"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}

      {/* LANDING SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/assets/backgrounds/backgrorund.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300/20 to-blue-500/30"></div>

        {floatingButtons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveModal(btn.id)}
            className="absolute px-8 py-3 text-white font-bold shadow-2xl hover:scale-110 transition-all duration-300 text-sm whitespace-nowrap"
            style={{ backgroundColor: btn.color, ...btn.position, borderRadius: "25px" }}
          >
            {btn.label}
          </button>
        ))}

        <div className="relative z-20 flex items-center justify-center">
          <img
            src="/assets/logos/logomain.png"
            alt="OneDriveRealty Hub"
            className="w-[400px] h-auto"
          />
        </div>
      </section>

      {/* FIXED ERROR: removed extra </section> */}

      {/* PRODUCTS SECTION (unchanged) */}
      <section className="py-8 relative min-h-screen flex items-center" style={{ background: "linear-gradient(135deg, #FFC0CB 0%, #FFB6C1 50%, #FFA0B0 100%)" }}>
        <div className="max-w-6xl mx-auto px-4 w-full">

          {/* PRODUCTS TITLE */}
          <div className="flex justify-center mb-6">
            <div className="relative bg-[#9B59B6] text-white px-12 py-2 shadow-lg rounded-full">
              <span className="text-xl font-bold">Our Products</span>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <ProductCard title="RESIDENTIAL" image={products[0].image} />
                <ProductCard title="MARINA" image={products[1].image} />
              </div>

              <div className="px-6">
                <ProductCardLarge title="AGRICULTURE" image={products[2].image} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ProductCardSmall title="MIX-USE DEVELOPMENT" image={products[3].image} />
                <ProductCardSmall title="HIGHRISE BUILDING" image={products[4].image} />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
                className="w-full h-[280px] object-cover rounded-lg shadow-lg"
              />

              <div className="bg-[#1E5BA8] rounded-lg p-3 shadow-lg text-center">
                <h3 className="text-base font-bold text-[#FFD700] leading-tight">
                  Luxury Homes Exclusive Marketing
                </h3>
                <p className="text-xs text-white mt-1">&</p>
                <p className="text-base font-bold text-[#FFD700]">Build 2 Suite Plans</p>
              </div>
            </div>
          </div>

          {/* HOME BUTTON */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-20 h-20 bg-blue-700 rounded-xl flex items-center justify-center shadow-2xl hover:bg-blue-800 hover:scale-110 transition z-40"
          >
            <FaHome className="text-white text-4xl" />
          </button>

        </div>
      </section>

      {/* FOOTER (unchanged) */}
      <footer className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 py-12 relative">
        <div className="absolute top-8 right-8 text-white text-2xl bg-blue-600 px-6 py-3 rounded-lg shadow-lg">
          لا إله إلا ٱلله محمد رسول ٱلله
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="text-center text-white text-sm">OneDriveRealty.com</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                className="px-4 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition text-sm"
                style={{ backgroundColor: link.color }}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-full shadow-lg relative">
              <p className="font-bold">2024 Copyrights OneDriveRealty</p>
              <p className="text-sm">All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-[#1E3A8A] capitalize">
                {activeModal.replace(/-/g, " ")}
              </h2>
              <button onClick={() => setActiveModal(null)}>
                <FaTimes size={24} />
              </button>
            </div>

            <div className="text-gray-700">
              <p>Content for {activeModal} will be displayed here.</p>
              <p className="mt-4">This modal will contain detailed information about this section.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* PRODUCT CARD COMPONENTS */
function ProductCard({ title, image }) {
  return (
    <div className="bg-white rounded-lg p-2 shadow-lg hover:scale-105 transition cursor-pointer">
      <div className="h-24 rounded-lg mb-1 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-center text-sm font-bold text-[#00AEEF]">{title}</h3>
    </div>
  );
}

function ProductCardLarge({ title, image }) {
  return (
    <div className="bg-white rounded-lg p-3 shadow-lg hover:scale-105 transition cursor-pointer">
      <div className="h-28 rounded-lg mb-1 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-center text-base font-bold text-[#00AEEF]">{title}</h3>
    </div>
  );
}

function ProductCardSmall({ title, image }) {
  return (
    <div className="bg-white rounded-lg p-2 shadow-lg hover:scale-105 transition cursor-pointer">
      <div className="h-24 rounded-lg mb-1 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-center text-xs font-bold text-[#00AEEF] leading-tight">{title}</h3>
    </div>
  );
}
