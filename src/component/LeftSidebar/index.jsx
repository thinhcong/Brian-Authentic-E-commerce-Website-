

const LeftSidebar = (props) => {
  // Lấy con số từ props ra
  const soLuong = props.count || 0; // Mặc định là 0 nếu không truyền

  const handleCount = props.handleCount;


  return (
    <div  onClick={handleCount} className='flex flex-col   justify-center items-center gap-10 '>
      {
        /* 
           Giải thích logic dòng dưới:
           1. Array.from({ length: soLuong }): Tạo ra một danh sách rỗng có độ dài bằng số lượng bạn nhập.
           2. .map((_, index)): Đi qua từng phần tử và biến nó thành thẻ div.
        */
          <div className="flex" key={soLuong}>
      
          </div>
      }
    </div>
  )
}

export default LeftSidebar