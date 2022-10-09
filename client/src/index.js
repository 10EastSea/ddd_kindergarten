import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/main';
import Chat from './pages/chat';

import Field from './pages/field';

import Login from './pages/login';
import { SocketContextProvider } from './contexts/SocketContext';


const App = () => {
	// 1. 초기 버전
    // return (
    //     <BrowserRouter>
    //         <SocketContextProvider>
    //           <Routes>
    //             <Route path="/" element={<Main />} />
    //             <Route path="/chat-room/:roomId/:userId" element={<Chat />} />
    //           </Routes>
    //         </SocketContextProvider>
    //     </BrowserRouter>
    // )
	
	// 2. 테스트 버전
	// return (
	// 	<BrowserRouter>
	// 		<SocketContextProvider>
	// 			<Routes>
	// 				<Route path="/" element={<Field />} />
	// 			</Routes>
	// 		</SocketContextProvider>
	// 	</BrowserRouter>
	// );
	
	// 3. 둥동댕 데모 버전
	return (
		<BrowserRouter>
			<SocketContextProvider>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/game-field/:fieldId/:userId" element={<Field />} />
				</Routes>
			</SocketContextProvider>
		</BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
