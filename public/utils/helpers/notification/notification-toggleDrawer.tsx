import {
    ListItem,
    List,
    Box,
    Divider,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ItemButton from "../template-mui/collapse/list/item";
function NotificationToggleDrawer (toggleDrawer:any) {
    return <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
    >
        <List>
            {["Inbox1", "Starred", "Send email", "Drafts"].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ItemButton iconbefore={index % 2 === 0 ? <InboxIcon /> : <MailIcon />} primary={text}/>
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ItemButton iconbefore={index % 2 === 0 ? <InboxIcon /> : <MailIcon />} primary={text}/>
                </ListItem>
            ))}
        </List>
    </Box>
};
export default NotificationToggleDrawer;
