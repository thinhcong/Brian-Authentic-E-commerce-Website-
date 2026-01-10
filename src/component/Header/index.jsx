import React from 'react'
import { Link } from 'react-router-dom' // <--- 1. Thêm dòng này

const Header = (props) => {
    let totalAmount = props.cartList.reduce((total, item) => total + item.price * item.quantity, 0);
    let totalQuantity = props.cartList.reduce((total, item) => total + item.quantity, 0);
    
    return (
       <header className="bg-white text-white py-4 px-8 flex justify-between items-center shadow-lg border-b border-gray-800 h-20">
            
            {/* Logo Link về trang chủ */}
            <div className="flex-1 text-center">
                <Link to="/"> {/* <--- 2. Bọc Logo bằng Link về Home */}
                    <h1 className="text-3xl font-extrabold tracking-widest uppercase text-yellow-500 font-serif cursor-pointer">
                        Brian Authentic
                    </h1>
                </Link>
            </div>

            {/* Giỏ hàng Link sang trang Cart */}
            <Link to="/cart"> {/* <--- 3. Bọc khu vực giỏ hàng bằng Link tới /cart */}
                <div className="w-24 flex flex-col items-center justify-center cursor-pointer text-blue-400 transition duration-300">
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-black">
                                {totalQuantity}
                            </span>
                        )}
                    </div>
                    <span className="text-sm font-semibold mt-1 text-black-300">
                        {totalAmount.toLocaleString()}Đ
                    </span>
                </div>
            </Link>
        </header>
    )
}

export default Header