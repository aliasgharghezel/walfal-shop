export default function HomePage() {
  return (
    <main className="bg-white min-h-screen p-6 text-gray-900">
      <header className="mb-8 border-b pb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Walfal Store</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">ورود / ثبت‌نام</button>
      </header>

      <section className="mb-8">
        <input
          type="text"
          placeholder="جستجو در محصولات…"
          className="w-full border rounded px-4 py-2 text-right"
        />
      </section>

      <section>
        <h2 className="mb-4 text-lg font-bold">محصولات مجिद्ध</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border p-4 rounded text-center">
            <div className="h-32 bg-gray-200 mb-2 rounded"></div>
            <h3 className="font-semibold">محصول نمونه ۱</h3>
            <p className="text-gray-600">تومان ۱٬۵۰۰٬۰۰۰</p>
          </div>
          <div className="border p-4 rounded text-center">
            <div className="h-32 bg-gray-200 mb-2 rounded"></div>
            <h3 className="font-semibold">محصول نمونه ۲</h3>
            <p className="text-gray-600">تومان ۸۰۰٬۰۰۰</p>
          </div>
          <div className="border p-4 rounded text-center">
            <div className="h-32 bg-gray-200 mb-2 rounded"></div>
            <h3 className="font-semibold">محصول نمونه ۳</h3>
            <p className="text-gray-600">تومان ۲٬۲۰۰٬۰۰۰</p>
          </div>
        </div>
      </section>
    </main>
  )
}