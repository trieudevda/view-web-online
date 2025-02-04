'use server'
 
export async function createData(formData: FormData) {
    const title = formData.get('title')
    const content = formData.get('content')
    try {
        const newPost = true;
        // Thực hiện tạo bài viết mới trong cơ sở dữ liệu
        // const newPost = await prisma.post.create({
        //   data: {
        //     title,
        //     content,
        //   },
        // });
    
        // Kiểm tra xem bài viết có được tạo thành công không
        if (newPost) {
          console.log('Bài viết đã được tạo thành công:', newPost);
          return newPost; // Trả về bài viết mới
        } else {
          console.error('Không thể tạo bài viết');
          throw new Error('Không thể tạo bài viết');
        }
      } catch (error) {
        // Bắt lỗi nếu có sự cố xảy ra
        console.error('Lỗi khi tạo bài viết:', error);
        throw error; // Ném lại lỗi để xử lý tiếp ở nơi khác (nếu cần)
      }
}