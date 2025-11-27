"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

type Category = {
  id: number;
  name: string;
  items: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Pain Rustique",
    description: "Khobz artisanal b farina dyal blé complet.",
    price: "25 DH",
    image: "/bread-8.jpg",
  },
  {
    id: 2,
    name: "Brioche Spirale",
    description: "Brioche b so9r w zbdya, texture hchicha.",
    price: "30 DH",
    image: "/bread-6.jpg",
  },
  {
    id: 3,
    name: "Bagel Grillé",
    description: "Bagel b gra3 lgnid wal grains.",
    price: "18 DH",
    image: "/bread-3.jpg",
  },
];

const categories: Category[] = [
  {
    id: 1,
    name: "Khobz Lyoum",
    items: "Baguette, Pain complet, Ciabatta...",
  },
  {
    id: 2,
    name: "Viennoiseries",
    items: "Croissant, Pain au chocolat, Brioche...",
  },
  {
    id: 3,
    name: "Gâteaux & Tartes",
    items: "Tartes aux fruits, Cheesecake, Opéra...",
  },
];

// استعمل غير gallery-* اللي عندك دابا
const galleryImages: string[] = [
  "/gallery-12.jpg",
  "/gallery-22.jpg",
  "/gallery-13.jpg",
  "/gallery-14.jpg",
  "/gallery-15.jpg",
  "/gallery-17.jpg",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050607] text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-8 lg:px-8">
        {/* NAVBAR */}
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold uppercase tracking-widest">
              Bakery
            </span>
            <span className="text-sm text-gray-400">Artisan Breads</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#products" className="hover:text-orange-400">
              Produits
            </a>
            <a href="#categories" className="hover:text-orange-400">
              Catégories
            </a>
            <a href="#gallery" className="hover:text-orange-400">
              Galerie
            </a>
            <a href="#order" className="hover:text-orange-400">
              Commander
            </a>
          </nav>

          <button className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-black shadow-md hover:bg-orange-400">
            Se connecter
          </button>
        </header>

        {/* HERO */}
        <main className="grid flex-1 gap-10 md:grid-cols-2 md:items-center">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
              Artisan depuis 1998
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Free Luxury <span className="text-orange-400">Bakery</span>
            </h1>
            <p className="max-w-md text-sm text-gray-300 md:text-base">
              Khobz frés, viennoiseries hchichine, w gâteaux b ingrédients
              mtchdarin. T9der tcommanda online w tchofo soit{" "}
              <span className="font-semibold text-orange-300">livraison</span>{" "}
              soit{" "}
              <span className="font-semibold text-orange-300">
                retrait en boutique
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#order"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-lg hover:bg-orange-400"
              >
                Commander maintenant
              </a>
              <button className="rounded-full border border-gray-600 px-6 py-3 text-sm font-semibold text-gray-200 hover:border-orange-400 hover:text-orange-400">
                Voir le menu
              </button>
            </div>

            <div className="flex gap-8 pt-4 text-xs text-gray-400">
              <div>
                <p className="font-semibold text-white">+120</p>
                <p>Produits frais</p>
              </div>
              <div>
                <p className="font-semibold text-white">7j/7</p>
                <p>Livraison ville</p>
              </div>
            </div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-full bg-[#181818] shadow-2xl">
              <Image
                src="/main-bread.jpg"
                alt="Pain artisanal"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-6 hidden h-20 w-20 rounded-2xl border border-orange-500/50 md:block" />
            <div className="absolute -top-6 -right-4 hidden h-24 w-24 rounded-full border border-gray-700 md:block" />
          </motion.div>
        </main>

        {/* PRODUCTS */}
        <section id="products" className="mt-16 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Best Seller du jour
              </h2>
              <p className="text-sm text-gray-400">
                Choisis khobza w zidha l commande b click wahed.
              </p>
            </div>
            <button className="text-xs font-medium text-orange-400 underline-offset-4 hover:underline">
              Voir tous les produits
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <motion.article
                key={product.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="group rounded-2xl bg-[#0e0f10] p-4 shadow-lg"
              >
                <div className="relative mb-4 h-56 w-full overflow-hidden rounded-xl bg-[#181818]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm font-semibold md:text-base">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-400">
                    {product.price}
                  </span>
                  <button className="rounded-full bg-orange-500 px-3 py-1.5 text-xs font-semibold text-black hover:bg-orange-400">
                    Ajouter
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="categories" className="mt-16 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Explorer nos catégories
              </h2>
              <p className="text-sm text-gray-400">
                Mn khobz classic 7tta pâtisserie moderne.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {categories.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-gray-800 bg-[#080809] p-4"
              >
                <h3 className="text-sm font-semibold text-orange-300 md:text-base">
                  {cat.name}
                </h3>
                <p className="mt-2 text-xs text-gray-400">{cat.items}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mt-16 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold md:text-2xl">
                Galerie de la boulangerie
              </h2>
              <p className="text-sm text-gray-400">
                Tsawer dyal khobz, viennoiseries, w l’ambiance dyal boutique.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="relative h-56 w-full overflow-hidden rounded-2xl bg-[#181818]"
              >
                <Image
                  src={src}
                  alt={`Photo boulangerie ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ORDER FORM */}
        <section id="order" className="mt-16 rounded-3xl bg-[#0a0a0b] p-6">
          <h2 className="text-xl font-semibold md:text-2xl">
            Passer une commande
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Rempli l–form, chois type de livraison, w n3ytoulek n–confirmiw.
          </p>

          <form
            className="mt-6 grid gap-4 md:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="md:col-span-1">
              <label className="mb-1 block text-xs font-medium text-gray-300">
                Nom complet
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-orange-400"
                placeholder="Ex: Ahmed El Fassi"
              />
            </div>

            <div className="md:col-span-1">
              <label className="mb-1 block text-xs font-medium text-gray-300">
                Téléphone
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-orange-400"
                placeholder="06 XX XX XX XX"
              />
            </div>

            <div className="md:col-span-1">
              <label className="mb-1 block text-xs font-medium text-gray-300">
                Type de commande
              </label>
              <select className="w-full rounded-xl border border-gray-700 bg-[#050607] px-3 py-2 text-sm outline-none focus:border-orange-400">
                <option value="delivery">Livraison à domicile</option>
                <option value="pickup">Retrait en boutique</option>
              </select>
            </div>

            <div className="md:col-span-1">
              <label className="mb-1 block text-xs font-medium text-gray-300">
                Heure souhaitée
              </label>
              <input
                type="time"
                className="w-full rounded-xl border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-orange-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-gray-300">
                Détail de la commande
              </label>
              <textarea
                rows={3}
                className="w-full rounded-xl border border-gray-700 bg-transparent px-3 py-2 text-sm outline-none focus:border-orange-400"
                placeholder="Ex: 2 baguettes, 4 croissants, 1 brioche spirale..."
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-gray-500">
              
              </p>
              <button
                type="submit"
                className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-black hover:bg-orange-400"
              >
                Envoyer la demande
              </button>
            </div>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="mt-10 border-t border-gray-800 pt-6 text-xs text-gray-500">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <p>© {new Date().getFullYear()} Luxury Bakery. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a className="hover:text-orange-400" href="#">
                Instagram
              </a>
              <a className="hover:text-orange-400" href="#">
                Facebook
              </a>
              <a className="hover:text-orange-400" href="#">
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
