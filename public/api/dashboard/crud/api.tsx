export async function addApi(path:string,data:Object) {}
export async function deleteApi(path:string,slug:Object) {
  try {
      const result = await Promise.all(
        Object.entries(slug).map(async ([key, value]) => {
          const res = await fetch(`/api/product/${value}`, { method: "DELETE" });
          return res.json();
        })
      );
      console.log("Xóa thành công tất cả phần tử!");
      console.log(result)
      // result.forEach((result, index) => {
      //   console.log(`Sản phẩm ${index + 1}:`, result);
      // });
    } catch (err) {
      throw new Error("Không thể xóa phần tử" + err.message);
    }
}
export async function updateApi(path:string,slug:string,data:Object) {}
export async function detailApi(path:string,slug:string) {}