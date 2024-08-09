"use client";

// reference: https://github.com/mui/material-ui/tree/v5.10.2/docs/data/material/getting-started/templates/dashboard

import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import NotificationsIcon from "@mui/icons-material/Notifications";

// For DataPicker locale

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ja";

import { SessionProvider } from "next-auth/react";
import { mainMenu, secondaryMenu } from "./Menu";
import AccountInfo from "./AccountInfo";
import { CheckBox } from "@mui/icons-material";

/*
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
*/

function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}>
			{"Copyright © "}
			{"UEHARA "}{" "}
			{/* <Link color="inherit" href="https://mui.com/">
				Your Website
			</Link> */}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

// ここでメインバーの色を調整
const mdTheme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#C4D872",
			light: "#ffa2a3",
			dark: "#a34449",
		},
	},
});

type LayoutProps = Required<{
	readonly children: React.ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: "flex" }}>
				<CssBaseline />
				<AppBar className="absolute," open={open}>
					<Toolbar
						sx={{
							pr: "24px", // keep right padding when drawer closed
						}}>
						<IconButton
							edge="start"
							color="success"
							aria-label="open drawer"
							onClick={toggleDrawer}
							sx={{
								marginRight: "36px",
								...(open && { display: "none" }),
							}}>
							<MenuIcon />
						</IconButton>
						<Typography
							className=""
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							sx={{ flexGrow: 1 }}>
							〇〇〇〇アプリ
							{/* ここがメインメニューバーTextの部分 */}
						</Typography>

						<SessionProvider>
							{/* AccountInfoがメニューバーの情報 */}
							<AccountInfo />
						</SessionProvider>
						{/* <IconButton color="inherit">
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>  */}
						{/* IconButtonがベルマーク */}
					</Toolbar>
				</AppBar>
				<Drawer variant="permanent" open={open}>
					<Toolbar
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "flex-end",
							px: [1],
						}}>
						<IconButton onClick={toggleDrawer}>
							<ChevronLeftIcon />
						</IconButton>
					</Toolbar>
					<Divider />
					{/* サイドバー：List*/}
					<List component="nav">
						{mainMenu}
						<Divider sx={{ my: 0 }} />
						{secondaryMenu}
					</List>
				</Drawer>
				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === "light"
								? //　固定ページの背景
								  theme.palette.grey[300]
								: theme.palette.grey[400],
						// 真ん中に表示している画面
						flexGrow: 1,
						height: "100vh",
						// overflow: "auto",  //overflowがスクロールバーのやつ
					}}>
					<Toolbar />
					<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
						<Grid container spacing={10}>
							{/* Chart */}
							<Grid item xs={12} md={8} lg={18}>
								{/* Paper：メイン画面の中 */}
								<Paper
									sx={{
										p: 2,
										display: "flex",
										flexDirection: "column",
										height: 500, // 白色背景の高さ
										overflow: "auto", //overflow:スクロールバーの設定
										//for scrollable
									}}>
									<LocalizationProvider
										dateAdapter={AdapterDayjs}
										adapterLocale="ja"
										localeText={{
											previousMonth: "前月",
											nextMonth: "次月",
										}}>
										{children}
									</LocalizationProvider>
									{/*<Chart />*/}
								</Paper>
							</Grid>
						</Grid>
						<Copyright sx={{ pt: 4 }} />
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
