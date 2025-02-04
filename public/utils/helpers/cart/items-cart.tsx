import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import Link from 'next/link';
import { PATHCONST } from '../../constants';
import { parse } from 'path';
/*
* data chứa: pathImg, productName, quality, price
*/
export default function MediaControlCard(props: any) {
    const data = JSON.parse(props.props);
    const deleteProduct = () => {
        console.log('deleteProduct');
    }
    return (
        <Suspense fallback={<Loading />}>
            <Link href={PATHCONST.ADMIN.PRODUCT.DETAIL('123123')} >
                <Card className='flex !shadow-none cart-item rounded pl-4 pr-2 border border-b border-dotted'>
                    <Box className="flex flex-row w-full" >
                        <CardMedia
                            component="img"
                            width="80"
                            image={data.pathImg}
                            alt="green iguana"
                            className='!w-[80px] !object-contain'
                        />
                        <CardContent className="w-full grid grid-rows-2 grid-cols-[70%_30%]">
                            <Typography component="div" variant="h6" className='text-tree-line leading-6'>
                                {data.productName}
                            </Typography>
                            <Typography
                                component={'div'}
                                className='text-end'
                            >
                                <Tooltip title={"Xóa sản phẩm"}>
                                    <DeleteOutline className='text-color1 cursor-pointer icon-delete-cart' onClick={deleteProduct} />
                                </Tooltip>
                            </Typography>
                            {/* <Button onClick={deleteProduct} size="small">X</Button> */}
                            <Typography
                                variant="subtitle1"
                                component="p"
                                className='text-color1'
                            >
                                Số lượng: {data.quality}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="p"
                                className='text-color1 text-end'
                            >
                                {data.price} VNĐ
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Link>
        </Suspense>
    );
}