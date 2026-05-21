import React from 'react';

const products = [
  { id: 1, name: 'Thức ăn hạt cao cấp', price: '250.000đ', category: 'Thức ăn' },
  { id: 2, name: 'Đồ chơi gặm thông minh', price: '120.000đ', category: 'Đồ chơi' },
  { id: 3, name: 'Vòng cổ dạ quang', price: '85.000đ', category: 'Phụ kiện' },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Thanh điều hướng */}
      <nav className="p-4 bg-white shadow-md flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">Pet Paradise</h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition">
          Giỏ hàng (0)
        </button>
      </nav>
      
      {/* Banner */}
      <header className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Dành trọn tình yêu cho thú cưng</h2>
        <p className="text-gray-600 text-lg">Sản phẩm chất lượng, giá cả phải chăng, giao hàng tận nơi.</p>
      </header>

      {/* Danh sách sản phẩm */}
      <main className="container mx-auto p-6">
        <h3 className="text-2xl font-bold mb-8">Sản phẩm nổi bật</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
              <div className="h-40 bg-gray-100 rounded-xl mb-4 flex items-center justify-center text-gray-400">
                [Hình ảnh {product.name}]
              </div>
              <p className="text-sm text-blue-500 font-semibold uppercase">{product.category}</p>
              <h4 className="text-xl font-bold mb-2">{product.name}</h4>
              <p className="text-gray-900 font-bold text-lg mb-4">{product.price}</p>
              <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Mua ngay
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-gray-500 border-t">
        <p>© 2026 Pet Paradise Store - Hệ thống thú cưng Thủ Đức</p>
      </footer>
    </div>
  );
};

export default App;
