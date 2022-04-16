import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/login/Login";
import MainLayout from "./components/layouts/Main";
import Register from "./pages/register/Register";
import Archive from "./pages/course/Archive";
import Course from "./pages/course/Course";
import SingleCourse from "./pages/course/SingleCourse";
import UserProfile from "./pages/profile/Profile";

const App =() => {
    return(
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/">
                        <Route path={"/"}   element={<Course />} />
                        <Route path={"/register"} element={<Register />} />
                        <Route path={"/login"} element={<Login />} />
                        <Route path={"/archive"} element={<Archive />} />
                        <Route path={"/course"} element={<SingleCourse />} />
                        <Route path={"/user-profile"} element={<UserProfile />} />
                    </Route>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}
export default App;
