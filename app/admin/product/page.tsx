"use client";
import * as React from 'react';
import { DataGrid, GridRowSelectionModel, GridRowsProp } from '@mui/x-data-grid';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import columnProduct from '@/public/utils/helpers/product/col-product';
import localeTextProduct from '@/public/utils/helpers/product/locale-text';
import { PATHCONST } from '@/public/utils/constants';
import ToolbarGridData from '@/public/utils/helpers/grid-data-admin/toolbar-container/toolbar';

const rows: GridRowsProp = Array.from({ length: 50 }, (_, index) => ({
  slug: index + 1,
  fullname: `User ${index + 1}`,
  code: `Code_${index + 100}`,
  prices: `${(Math.random() * 1000).toFixed(2)}$`,
  status: index % 2 === 0 ? "Active" : "Inactive",
  short_description: `Description ${index + 1}`,
  avarta: `50/50`, // Ảnh avatar ngẫu nhiên
  created_at: new Date(Date.now() - index * 10000000).toISOString().split('T')[0], // Ngày tạo lùi dần
  user: `User_${index + 1}`,
  supplier: `Supplier_${index % 5}`,
  categories: `Category_${index % 3}`,
  feature: `Feature_${index % 4}`
}));
export default function App() {
  const [data, setData] = React.useState<GridRowsProp>([]);
  const [loading, setLoading] = React.useState(true);
  const [paginationModel, setPaginationModel] = React.useState({ page: 0, pageSize: 10, });
  const [rowCount, setRowCount] = React.useState(0);
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>([]);
  const jsonProduct = {
    data: {
      textAdd: "Thêm sản phẩm",
      pathAdd: PATHCONST.ADMIN.PRODUCT.CREATE,
      textDel: "Xóa sản phẩm",
      pathDel: PATHCONST.ADMIN.PRODUCT.DELETE(rowSelectionModel.join("/")),      
    },
    textExcel: "Xuất file",
    rows: [...rows],
    column: columnProduct,
    paginationModel: paginationModel,
    setPaginationModel: setPaginationModel,
    rowSelectionModel: rowSelectionModel
  }
  // React.useEffect(() => {
  //   jsonProduct.d
  // },[rowSelectionModel])
  React.useEffect(() => {
    setLoading(true);
    // Giả lập API lấy dữ liệu theo trang
    setTimeout(() => {
      const start = paginationModel.page * paginationModel.pageSize;
      const end = start + paginationModel.pageSize;
      setData(rows.slice(start, end)); // Lấy dữ liệu theo trang
      setRowCount(rows.length); // Tổng số bản ghi
      setLoading(false);
    }, 500);
  }, [paginationModel]);
  return (
    <div className='w-full h-full'>
      <Suspense fallback={<Loading />}>
        <DataGrid
          getRowId={(row) => row.slug} // Dùng slug thay vì id
          rows={data}
          columns={columnProduct}
          rowCount={rowCount}
          loading={loading}
          pageSizeOptions={[20, 15, 13,100]}
          disableColumnSorting
          // autoPageSize
          // paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          paginationMode="server"
          checkboxSelection
          rowSelectionModel={rowSelectionModel}
          onRowSelectionModelChange={(newSelection) => {
            setRowSelectionModel(newSelection);
          }}
          // disableRowSelectionOnClick
          localeText={localeTextProduct}
          slots={{
            toolbar: ToolbarGridData,
            footer: undefined,
          }}
          slotProps={{
            toolbar: jsonProduct,
            loadingOverlay: {
              // Tìm ở https://mui.com/x/react-data-grid/overlays/
              variant: "skeleton",
              noRowsVariant: 'skeleton',
            }
          }}
        // columnVisibilityModel={{}} ẩn cột
        />
      </Suspense>
    </div>
  );
}
