import { BookSchema } from "../../../Utils/Interfaces"
import NormalShopView from "../NormalShopView/NormalShopView";
import Grid from '@mui/material/Grid2'
import ShopGridView from "../ShopGridView/ShopGridView";

interface ShopViewControllerProps {
    books: BookSchema[];
    activeView: string;
}
export default function ShopViewController({ books, activeView }: ShopViewControllerProps) {
    return (
        <Grid container>
            {
                activeView === 'normal' ?
                    <NormalShopView books={books} />
                    :
                    <ShopGridView books={books} />
            }
        </Grid>
    );
};