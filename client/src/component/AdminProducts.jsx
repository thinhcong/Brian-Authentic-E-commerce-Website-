import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient.js'
import { FaRecycle } from 'react-icons/fa'

const AdminProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [newProduct, setNewProduct] = useState({ name: '',
     price: '',
      stock: '' ,
      brand:'',
    category:'',
    img:'',
    description:''
   })

  // ================= FETCH PRODUCTS =================
useEffect(() => {
  fetchProducts();
})
const fetchProducts = async ()=> {
  const {data,error} = await supabase
  .from ('products')
  .select('*')
  if (error) {
    console.log(error);
    setLoading(true) ;

  } else {
    setLoading(false) ;
    setProducts(data);

  }

}

const creatNewProduct = async () => {
  const {error} = await supabase
  .from ('products')
  .insert (
    {
      name: newProduct.name,
      price:newProduct.price,
      sotck:newProduct.stock,
      category:newProduct.category,
      brand:newProduct.brand,
      img:newProduct.img,
      description:newProduct.description

    }
    
    
  )
  if (error) {
    console.log(error);
  }

  alert('Thêm thành công')
  fetchProducts();
  setNewProduct({ name: '',
    price: '',
     stock: '' ,
     brand:'',  
     category:'',
     img:'',
     description:''})  
}

const updateStock = async (prodcut) => {
  const {error} = await supabase
  .from ('products')
  .update (
    {
      stock:prodcut.stock
    }
  )
  .eq('id',prodcut.id)
  if (error) {
    console.log(error);
  }
  fetchProducts();
}




   
  

 return (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-3xl font-bold mb-8 text-gray-800">
      Admin Products
    </h1>

    {/* CREATE PRODUCT */}
    <div className="bg-white p-6 rounded-xl shadow-md mb-10 max-w-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Thêm sản phẩm mới
      </h2>

      <div className="space-y-3">
        <input
          placeholder="Tên sản phẩm"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-black outline-none"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />

        <input
          placeholder="Giá"
          type="number"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-black outline-none"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />

        <input
          placeholder="Stock"
          type="number"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-black outline-none"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, stock: e.target.value })
          }
        />

        <input
          placeholder="Category"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-black outline-none"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
        />

        <textarea
          placeholder="Description"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-black outline-none"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
        />

        <button
          onClick={creatNewProduct}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Tạo sản phẩm
        </button>
      </div>
    </div>

    {/* PRODUCT LIST */}
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-4 text-left">Tên sản phẩm</th>
            <th className="p-4 text-left">Giá</th>
            <th className="p-4 text-left">Stock</th>
            <th className="p-4 text-center">Hành động</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              className="border-t hover:bg-gray-50 transition"
            >
              {/* NAME WITH BORDER */}
              <td className="p-4">
                <div className="border rounded-lg px-3 py-2 font-medium text-gray-800 bg-gray-50">
                  {p.name}
                </div>
              </td>

              <td className="p-4 text-gray-700">
                {Number(p.price).toLocaleString()} ₫
              </td>

              <td className="p-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setProducts((prev) =>
                        prev.map((item) =>
                          item.id === p.id
                            ? { ...item, stock: item.stock - 1 }
                            : item
                        )
                      )
                    }
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="min-w-[40px] text-center font-semibold">
                    {p.stock}
                  </span>

                  <button
                    onClick={() =>
                      setProducts((prev) =>
                        prev.map((item) =>
                          item.id === p.id
                            ? { ...item, stock: item.stock + 1 }
                            : item
                        )
                      )
                    }
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="p-4 text-center space-x-2">
                <button
                  onClick={() => updateStock(p)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Lưu
                </button>

                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

}

export default AdminProducts
