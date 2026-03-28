import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface DashboardProps {
  products: Product[];
}

export default function Dashboard({ products }: DashboardProps) {
  // จำนวนรายการสินค้าทั้งหมด
  const totalProducts = products.length;

  // มูลค่ารวมของสต๊อก (price * quantity)
  const totalValue = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  // สินค้าที่ของหมด (quantity === 0)
  const outOfStock = products.filter((product) => product.quantity === 0).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📊 Dashboard
          </h1>
          <p className="text-gray-600">ภาพรวมระบบจัดการสต๊อกสินค้า</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* การ์ดจำนวนสินค้าทั้งหมด */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  จำนวนรายการสินค้า
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {totalProducts}
                </p>
                <p className="text-gray-400 text-xs mt-1">รายการ</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* การ์ดมูลค่ารวม */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  มูลค่ารวมของสต๊อก
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  ฿{totalValue.toLocaleString()}
                </p>
                <p className="text-gray-400 text-xs mt-1">บาท</p>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* การ์ดสินค้าหมด */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  สินค้าที่ของหมด
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {outOfStock}
                </p>
                <p className="text-gray-400 text-xs mt-1">รายการ</p>
              </div>
              <div className="bg-red-100 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ปุ่มไปหน้าจัดการสินค้า */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            เริ่มจัดการสินค้าของคุณ
          </h2>
          <p className="text-gray-600 mb-6">
            เพิ่ม แก้ไข หรือลบสินค้าในระบบได้ที่หน้าจัดการสินค้า
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            ไปหน้าจัดการสินค้า
          </Link>
        </div>
      </div>
    </div>
  );
}