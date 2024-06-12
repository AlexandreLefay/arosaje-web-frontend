// import React from 'react';
// import { Auth0Provider } from '@auth0/auth0-react';
// import {Navigate, useNavigate} from "react-router-dom";
//
// interface Auth0ProviderWithHistoryProps {
//     children: React.ReactNode;
// }
//
// const Auth0ProviderWithHistory: React.FC<Auth0ProviderWithHistoryProps> = ({ children }) => {
//     const domain = process.env.REACT_APP_AUTH0_DOMAIN!;
//     const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID!;
//     const audience = process.env.REACT_APP_AUTH0_AUDIENCE;
//
//     // const navigate = useNavigate()
//
//     const onRedirectCallback = () => {
//         return <Navigate to="/welcome" />;
//     };
//
//     return (
//         <Auth0Provider
//             domain={domain}
//             clientId={clientId}
//             authorizationParams={{
//                 redirect_uri: window.location.origin,
//                 audience: audience,
//             }}
//             onRedirectCallback={onRedirectCallback}
//         >
//             {children}
//         </Auth0Provider>
//     );
// };
//
// export default Auth0ProviderWithHistory;
