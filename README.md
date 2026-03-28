# ระบบจัดการสต๊อกสินค้า (Inventory Management System)

โปรเจกต์นี้เป็นระบบจัดการสต๊อกสินค้าแบบเบื้องต้น พัฒนาด้วย React + TypeScript + Tailwind CSS

## คุณสมบัติ

### 📊 หน้า Dashboard (/)
- แสดงจำนวนรายการสินค้าทั้งหมด
- แสดงมูลค่ารวมของสต๊อก (price × quantity)
- แสดงจำนวนสินค้าที่ของหมด (quantity = 0)

### 📦 หน้าจัดการสินค้า (/products)
- **ฟอร์มเพิ่มสินค้า**: กรอกชื่อสินค้า, ราคา, จำนวนเริ่มต้น
- **รายการสินค้า**: แสดงสินค้าทั้งหมดในรูปแบบการ์ด
- **การจัดการ**:
  - ปุ่ม [+] เพิ่มจำนวนสต๊อก (ทีละ 1)
  - ปุ่ม [-] ลดจำนวนสต๊อก (ทีละ 1, ไม่ต่ำกว่า 0)
  - ปุ่ม [ลบ] ลบสินค้าออกจากระบบ
- **ระบบค้นหา**: ค้นหาสินค้าตามชื่อแบบ Real-time
- **Conditional Styling**: สินค้าที่หมดสต๊อกจะแสดงพื้นหลังสีแดงอ่อนพร้อมป้ายกำกับ "สินค้าหมด"

## เทคโนโลยีที่ใช้

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **React Router DOM v7** - Routing
- **Tailwind CSS v3** - Styling
- **Vite** - Build Tool
- **Bun** - Package Manager & Runtime

## โครงสร้างโปรเจกต์

```
src/
├── types.ts                 # TypeScript interfaces
├── hooks/
│   └── useInventory.ts      # Custom Hook สำหรับจัดการ State
├── pages/
│   ├── Dashboard.tsx        # หน้า Dashboard
│   └── Products.tsx         # หน้าจัดการสินค้า
├── App.tsx                  # Main App Component
├── main.tsx                 # Entry Point
└── index.css                # Tailwind CSS Imports
```

## การติดตั้งและรันโปรเจกต์

### 1. ติดตั้ง Dependencies
```bash
bun install
```

### 2. รันโปรเจกต์ในโหมด Development
```bash
bun run dev
```

### 3. Build สำหรับ Production
```bash
bun run build
```

### 4. Preview Production Build
```bash
bun run preview
```

## Custom Hook: useInventory

Hook นี้จัดการ Logic ทั้งหมดของระบบสต๊อก:

- `products`: Array ของสินค้าทั้งหมด
- `addProduct(name, price, quantity)`: เพิ่มสินค้าใหม่
- `updateQuantity(id, delta)`: เพิ่ม/ลดจำนวนสต๊อก
- `deleteProduct(id)`: ลบสินค้า

## การใช้งาน Array Methods

โปรเจกต์นี้ใช้ Array Methods สำคัญ:

- **`reduce()`**: คำนวณมูลค่ารวมของสต๊อก
- **`filter()`**: กรองสินค้าที่หมดสต๊อกและระบบค้นหา
- **`map()`**: แสดงรายการสินค้าและอัพเดต State

## การ Deploy

### Vercel
```bash
# ติดตั้ง Vercel CLI
bun add -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
bun run build