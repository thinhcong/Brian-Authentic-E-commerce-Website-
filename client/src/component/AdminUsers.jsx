import React  from 'react'
import { supabase } from '../supabaseClient.js'
import { useState } from 'react'
import { useEffect } from 'react'
 const AdminUsers = () => {
  const [userList, setUserList] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const {data,error} = await supabase.from('profiles').select('*')
      if(!error){
        setUserList(data)
        console.log(data)
      } else {

         console.log(error,"Lỗi khi lấy danh sách người dùng về ")

      } 
       
    }
    fetchUsers();
  },[]); 
    return (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-3xl font-bold mb-8 text-gray-800">
      Danh sách người dùng
      <span className="ml-2 text-base font-normal text-gray-500">
        ({userList.length})
      </span>
    </h1>

    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-4 text-left">Người dùng</th>
            <th className="p-4 text-left">Vai trò</th>
            <th className="p-4 text-center">Trạng thái</th>
          </tr>
        </thead>

        <tbody>
          {userList.map((u) => (
            <tr
              key={u.id}
              className="border-t hover:bg-gray-50 transition"
            >
              {/* USER INFO */}
              <td className="p-4">
                <div className="border rounded-lg px-3 py-2 bg-gray-50">
                  <p className="font-semibold text-gray-800">
                    {u.full_name || 'Chưa đặt tên'}
                  </p>
                  <p className="text-sm text-gray-500">
                    {u.email}
                  </p>
                </div>
              </td>

              {/* ROLE */}
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      u.role === 'admin'
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-700'
                    }
                  `}
                >
                  {u.role || 'user'}
                </span>
              </td>

              {/* STATUS */}
              <td className="p-4 text-center">
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                  Active
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {userList.length === 0 && (
        <div className="p-6 text-center text-gray-500">
          Chưa có người dùng nào
        </div>
      )}
    </div>
  </div>
)

  }
  

export default AdminUsers
