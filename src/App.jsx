import React, { useState, useEffect } from 'react';
import { ShoppingCart, PawPrint, Search, Star, X, Plus, Minus, Menu, Heart, MapPin, Navigation, Phone } from 'lucide-react';

const CATEGORIES = ['Tất cả', 'Thức ăn', 'Đồ chơi', 'Phụ kiện'];

const PARTNER_STORES = [
  { 
    id: 1, 
    name: 'Meow & Woof Thảo Điền', 
    address: '12 Quốc Hương, Thảo Điền, Q.2, TP. Thủ Đức', 
    phone: '0901 234 567', 
    rating: 4.8 
  },
  { 
    id: 2, 
    name: 'Pet Mart An Phú', 
    address: '50 Song Hành, An Phú, Q.2, TP. Thủ Đức', 
    phone: '0902 345 678', 
    rating: 4.7 
  },
  { 
    id: 3, 
    name: 'Trạm Cứu Hộ & Pet Shop Đỗ Xuân Hợp', 
    address: '150 Đỗ Xuân Hợp, Phước Long A, Q.9, TP. Thủ Đức', 
    phone: '0903 456 789', 
    rating: 4.9 
  },
  { 
    id: 4, 
    name: 'Thế Giới Thú Cưng Q9', 
    address: '200 Lê Văn Việt, Hiệp Phú, Q.9, TP. Thủ Đức', 
    phone: '0904 567 890', 
    rating: 4.6 
  },
];

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Hạt Royal Canin Kitten cho mèo con',
    category: 'Thức ăn',
    price: 450000,
    size: 'Túi 2kg',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80',
    tag: 'Bán chạy',
  },
  {
    id: 2,
    name: 'Hạt Pedigree vị Bò & Rau củ (Chó lớn)',
    category: 'Thức ăn',
    price: 320000,
    size: 'Túi 3kg',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Súp thưởng Ciao Churu vị Cá ngừ',
    category: 'Thức ăn',
    price: 65000,
    size: 'Hộp 50 thanh',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1623366302587-bca28c9b3a95?auto=format&fit=crop&w=600&q=80',
    tag: 'Siêu hot',
  },
  {
    id: 4,
    name: 'Cần câu mèo gắn lông vũ kèm chuông',
    category: 'Đồ chơi',
    price: 45000,
    size: 'Dài 50cm',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Đồ chơi cao su Kong Classic cho chó',
    category: 'Đồ chơi',
    price: 280000,
    size: 'Size M',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80',
    tag: 'Độ bền cao',
  },
  {
    id: 6,
    name: 'Chuột vải nhồi Cỏ bạc hà (Catnip)',
    category: 'Đồ chơi',
    price: 85000,
    size: 'Set 3 con',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    name: 'Nệm bông gòn êm ái cho thú cưng',
    category: 'Phụ kiện',
    price: 350000,
    size: 'Size L (60x80cm)',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    name: 'Bát sứ ăn chống gù lưng cho mèo',
    category: 'Phụ kiện',
    price: 180000,
    size: 'Dung tích 200ml',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1629237699970-1f953256ccbc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 9,
    name: 'Dây dắt chó tự cuốn cao cấp 5m',
    category: 'Phụ kiện',
    price: 250000,
    size: 'Dài 5m, Tải 20kg',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 10,
    name: 'Cát đậu nành Tofu khử mùi tốt',
    category: 'Phụ kiện',
    price: 110000,
    size: 'Túi 6 Lít',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80',
    tag: 'Bảo vệ môi trường',
  },
  {
    id: 11,
    name: 'Lược chải lông giảm rụng cho Chó/Mèo',
    category: 'Phụ kiện',
    price: 150000,
    size: 'Freesize',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 12,
    name: 'Pate hỗn hợp King\'s Pet (Chó & Mèo)',
    category: 'Thức ăn',
    price: 45000,
    size: 'Lon 380g',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
  }
];

const formatVND = (amount) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState(PARTNER_STORES[0]);

  useEffect(() => {
    let filtered = INITIAL_PRODUCTS;
    
    if (activeCategory !== 'Tất cả') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setProducts(filtered);
  }, [activeCategory, searchQuery]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      });
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartTotalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer">
              <PawPrint className="h-8 w-8 text-orange-500 mr-2" />
              <span className="font-bold text-2xl tracking-tight text-gray-900">
                Pet<span className="text-orange-500">Paradise</span>
              </span>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm hạt, đồ chơi, phụ kiện..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="font-medium text-gray-600 hover:text-orange-500">Trang chủ</a>
                <a href="#" className="font-medium text-orange-500">Sản phẩm</a>
                <a href="#map-section" className="font-medium text-gray-600 hover:text-orange-500">Đối tác</a>
              </nav>
              
              <button 
                className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-orange-100 to-amber-50 py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-6">
            <span className="inline-block bg-orange-200 text-orange-800 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
              Hệ thống sàn thú cưng Thủ Đức
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Dành trọn tình yêu cho <span className="text-orange-500">thú cưng</span> của bạn
            </h1>
            <p className="text-lg text-gray-600">
              Khám phá bộ sưu tập thức ăn dinh dưỡng, đồ chơi vui nhộn và phụ kiện cao cấp. Đảm bảo sức khỏe và niềm vui mỗi ngày cho các "boss".
            </p>
            <div className="flex space-x-4">
              <a href="#product-section" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5">
                Mua sắm ngay
              </a>
              <a href="#map-section" className="inline-block bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md border border-gray-200 transition-all transform hover:-translate-y-0.5">
                Cửa hàng gần nhất
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-30 -top-10 -left-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80" 
              alt="Thú cưng hạnh phúc" 
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover h-64 md:h-96 z-10 border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Main Content (Products) */}
      <main id="product-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sản phẩm nổi bật</h2>
            <p className="text-gray-500 mt-1">Chất lượng hàng đầu được chọn lọc</p>
          </div>
          
          {/* Categories Filters */}
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
              <div className="relative pt-[100%] bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.tag && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2.5 py-1 rounded-full font-bold shadow-sm">
                    {product.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-2 py-1 rounded-lg font-semibold flex items-center shadow-sm">
                  <Star className="h-3 w-3 text-amber-500 mr-1 fill-amber-500" />
                  {product.rating}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-orange-500 font-semibold uppercase tracking-wider mb-1">{product.category}</span>
                <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-2 min-h-[3rem]">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{product.size}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-lg font-extrabold text-gray-900">{formatVND(product.price)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-gray-900 hover:bg-orange-500 text-white p-2 rounded-full transition-colors duration-200"
                    title="Thêm vào giỏ"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Local Store Map Section */}
      <section id="map-section" className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Mạng lưới đối tác khu vực Thủ Đức (Q.2 & Q.9)
            </h2>
            <p className="text-gray-500 mt-2">
              PetParadise liên kết trực tiếp với các cửa hàng thú cưng uy tín. Đảm bảo giao hàng hỏa tốc trong 2h hoặc bạn có thể chọn "Lấy tại trạm" khi thanh toán!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* List Stores */}
            <div className="lg:col-span-5 space-y-4 max-h-[500px] overflow-y-auto pr-2">
              {PARTNER_STORES.map((store) => (
                <div 
                  key={store.id}
                  onClick={() => setSelectedStore(store)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedStore.id === store.id 
                      ? 'border-orange-500 bg-orange-50/50 shadow-md shadow-orange-500/5' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 text-lg">{store.name}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded font-bold flex items-center shrink-0">
                      <Star className="h-3 w-3 text-amber-500 mr-1 fill-amber-500" />
                      {store.rating}
                    </span>
                  </div>
                  <div className="space-y-2 mt-3 text-sm text-gray-600">
                    <p className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400 shrink-0 mt-0.5" />
                      {store.address}
                    </p>
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-400 shrink-0" />
                      {store.phone}
                    </p>
                  </div>
                  {selectedStore.id === store.id && (
                    <div className="mt-4 pt-3 border-t border-orange-100 flex justify-between items-center text-xs font-bold text-orange-600">
                      <span className="flex items-center">
                        <Navigation className="h-3 w-3 mr-1 fill-orange-600" /> Đang hiển thị trên bản đồ
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Google Map Display (Static Embed Map optimized for Q2/Q9 area) */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-gray-200 h-[500px] relative shadow-inner">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1419409893963!2d106.741270!3d10.800473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752615456f91f3%3A0xe7c6dfcf4611593b!2zVGjhuqNvIMSQaeG7gW4sIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1716300000000!5m2!1svi!2s`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ các đối tác Pet Shop"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-sm">
                <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">Trạm đang chọn</p>
                <h4 className="font-bold text-gray-900 mt-1">{selectedStore.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{selectedStore.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="flex justify-center items-center">
            <PawPrint className="h-6 w-6 text-orange-500 mr-2" />
            <span className="font-bold text-xl tracking-tight text-white">PetParadise</span>
          </div>
          <p className="text-sm max-w-md mx-auto">
            Sứ mệnh của chúng tôi là mang đến những sản phẩm chất lượng nhất, giúp cuộc sống của bạn và bạn bốn chân luôn hạnh phúc và khỏe mạnh mỗi ngày.
          </p>
          <div className="text-xs text-gray-600 pt-6">
            &copy; 2026 PetParadise Store. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end" onClick={() => setIsCartOpen(false)}>
          <div className="bg-white w-full sm:w-96 p-6 h-full overflow-y-auto flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2 text-orange-500" /> Giỏ hàng ({cartItemCount})
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="h-6 w-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center space-y-4 text-gray-400">
                <ShoppingCart className="h-16 w-16 stroke-1" />
                <p className="font-medium">Giỏ hàng trống rỗng</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center space-x-4 pb-4 border-b border-gray-100">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg shrink-0 bg-gray-100" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{item.size}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="p-1 border border-gray-200 rounded-full hover:bg-gray-100"><Minus className="h-3 w-3" /></button>
                        <span className="text-sm font-semibold text-gray-800">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="p-1 border border-gray-200 rounded-full hover:bg-gray-100"><Plus className="h-3 w-3" /></button>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900 text-sm">{formatVND(item.price * item.quantity)}</p>
                      <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 hover:underline mt-1">Xóa</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-gray-600">Tổng thanh toán:</span>
                  <span className="font-extrabold text-orange-500 text-xl">{formatVND(cartTotalAmount)}</span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-full shadow-lg transition-colors">
                  Tiến hành đặt hàng
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
