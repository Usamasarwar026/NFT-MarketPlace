import Home from "../pages/home/Home";
import MarketPlace from "../pages/marketplace/MarketPlace";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ranking from "../pages/ranking/Ranking";
import ConnectWalletPage from "../pages/connectwallet/ConnectWalletPage";
import Nft from "../pages/nft/Nft";
import AccountSection from "../components/accountSection/AccountSection";
import Layout from "../components/layout/Layout";
import ScrollToTop from "../components/ScrollTop/ScrollToTop";
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop /> 
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/marketplace/:collection_slug",
        element: <MarketPlace />,
      },
      {
        path: "/marketplace",
        element: <MarketPlace />,
      },
      {
        path: "/nft/:marketplace/:contract/:identifier",
        element: <Nft />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/connectwallet",
        element: <ConnectWalletPage />,
      },
     
    ]
  },
  {
    path: "/signup",
    element: <AccountSection />,
  },
  
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
