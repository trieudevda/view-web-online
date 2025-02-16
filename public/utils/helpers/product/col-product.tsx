"use client";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import renderCellExpand from '@/public/components/grid/grid-cell-expand/page';

const columnProduct: GridColDef[] = [
  // { field: 'slug', headerName: 'ID', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'fullname', headerName: 'Họ Tên', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'code', headerName: 'Mã sản phẩm', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'prices', headerName: 'Giá', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'status', headerName: 'Tình trạng', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'short_description', headerName: 'Mô tả', type: 'string', width: 150, renderCell: renderCellExpand },
  { field: 'avarta', headerName: 'Hình ảnh', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'created_at', headerName: 'Ngày tạo', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'user', headerName: 'Người tạo', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'supplier', headerName: 'NCC', width: 150, type: 'string', renderCell: renderCellExpand },
  { field: 'categories', headerName: 'Loại', width: 150, type: 'string', renderCell: renderCellExpand },
  {
    field: "feature", headerName: 'Tính Năng', width: 150,
    renderCell: (params: any) =>
      <div className='flex flex-row items-center gap-1'>
        <Button
          variant="outlined"
          className='aspect-square !p-0 !min-w-[30px] max-w-[30px]'
        // onClick={()=>router.push('')}
        >
          <EditOutlined />
        </Button>
        <Button
          variant="outlined"
          className='aspect-square !p-0 !min-w-[30px] max-w-[30px]'
        >
          <DeleteOutline />
        </Button>
      </div>,
  }
];
export default columnProduct;