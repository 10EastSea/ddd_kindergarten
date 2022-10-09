import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './pages/main';
import Chat from './pages/chat';
import Field from './pages/field';
import { SocketContextProvider } from './contexts/SocketContext';


const App = () => {
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
	return (
        <BrowserRouter>
            <SocketContextProvider>
              <Routes>
                <Route path="/" element={<Field />} />
              </Routes>
            </SocketContextProvider>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
